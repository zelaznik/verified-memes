(function() {
  'use strict';

  function inherit(Child, Parent) {
    function Surrogate() {}
    Surrogate.prototype = Parent.prototype;
    Child.prototype = new Surrogate();
    Child.prototype.constructor = Child;
  }

  function defineGetterSingle(target, key, getter) {
   Object.defineProperty(target, key, {
      get: getter,
      set: function(val) { throw new Error("Attribute '" + key + "' is read-only."); },
    });
  }

  function defineGetters(target, namespace) {
    for (var key in namespace) {
      defineGetterSingle(target, key, namespace[key]);
    }
  }

  function Election(options) {}

  defineGetters(Election.prototype, {
    orig_spread:                function() { return (this.orig_vote_clinton - this.orig_vote_trump); },

    stein_votes_to_clinton:     function() { return (this.pct_stein_to_clinton   * this.orig_vote_stein); },
    stein_votes_to_trump:       function() { return (this.pct_stein_to_trump     * this.orig_vote_stein); },
    johnson_votes_to_clinton:   function() { return (this.pct_johnson_to_clinton * this.orig_vote_johnson); },
    johnson_votes_to_trump:     function() { return (this.pct_johnson_to_trump   * this.orig_vote_johnson); },

    adjusted_vote_clinton_with_johnson_only: function() { return this.orig_vote_clinton  + this.johnson_votes_to_clinton; },
    adjusted_vote_trump_with_johnson_only:   function() { return this.orig_vote_trump    + this.johnson_votes_to_trump; },
    adjusted_vote_clinton_with_stein_only:   function() { return this.orig_vote_clinton  + this.stein_votes_to_clinton; },
    adjusted_vote_trump_with_stein_only:     function() { return this.orig_vote_trump    + this.stein_votes_to_trump; },

    adjusted_vote_clinton:  function() { return (this.orig_vote_clinton + this.johnson_votes_to_clinton + this.stein_votes_to_clinton); },
    adjusted_vote_trump:    function() { return (this.orig_vote_trump   + this.johnson_votes_to_trump   + this.stein_votes_to_trump); },

    adjusted_spread_with_johnson_only:  function() { return this.adjusted_vote_clinton_with_johnson_only - this.adjusted_vote_trump_with_johnson_only; },
    adjusted_spread_with_stein_only:    function() { return this.adjusted_vote_clinton_with_stein_only   - this.adjusted_vote_trump_with_stein_only; },
    adjusted_spread:                    function() { return (this.adjusted_vote_clinton                  - this.adjusted_vote_trump); }
  });

  function ElectionRow(options) {
    this.state_name         = options.data.state_name;
    this.orig_vote_clinton  = options.data.clinton;
    this.orig_vote_trump    = options.data.trump;
    this.orig_vote_johnson  = options.data.johnson;
    this.orig_vote_stein    = options.data.stein;
    this.electoral_votes    = options.data.electoral_votes;
    this.table              = options.table;
  }

  inherit(ElectionRow, Election);
  defineGetters(ElectionRow.prototype, {

    pct_johnson_to_clinton:     function() { return this.table.pct_johnson_to_clinton; },
    pct_johnson_to_trump:       function() { return this.table.pct_johnson_to_trump; },
    pct_stein_to_clinton:       function() { return this.table.pct_stein_to_clinton; },
    pct_stein_to_trump:         function() { return this.table.pct_stein_to_trump; },

    orig_electors_clinton:      function() { return ((this.orig_spread > 0) ? this.electoral_votes : 0); },
    orig_electors_trump:        function() { return ((this.orig_spread < 0) ? this.electoral_votes : 0); },

    adjusted_electors_clinton_with_johnson_only: function() { return ((this.adjusted_spread_with_johnson_only > 0) ? this.electoral_votes : 0); },
    adjusted_electors_clinton_with_stein_only:   function() { return ((this.adjusted_spread_with_stein_only   > 0) ? this.electoral_votes : 0); },
    adjusted_electors_clinton:                   function() { return ((this.adjusted_spread                   > 0) ? this.electoral_votes : 0); },
    adjusted_electors_trump:                     function() { return ((this.adjusted_spread                   < 0) ? this.electoral_votes : 0); },

    orig_outcome:     function() { return ((this.orig_spread     < 0) ? 'Trump' : 'Clinton'); },
    adjusted_outcome: function() { return ((this.adjusted_spread < 0) ? 'Trump' : 'Clinton'); },
    pickup_clinton:   function() { return ((this.orig_outcome !== 'Clinton') && (this.adjusted_outcome === 'Clinton')); },
    pickup_trump:     function() { return ((this.orig_outcome !== 'Trump')   && (this.adjusted_outcome === 'Trump')); },

    stein_split_needed_pure: function() {
      if (this.orig_vote_stein === 0) { return null; }
      else { return (1 - (this.adjusted_spread_with_johnson_only / this.orig_vote_stein)) / 2; }
    },

    johnson_split_needed_pure: function() {
      if (this.orig_vote_johnson === 0) { return null; }
      else { return (1 - (this.adjusted_spread_with_stein_only / this.orig_vote_johnson)) / 2; }
    }

  });

  function ElectionTable(options) {
    this.pct_johnson_to_clinton = options.params.pct_johnson_to_clinton;
    this.pct_stein_to_clinton   = options.params.pct_stein_to_clinton;
    this.rows                   = this.make_rows(options.data);
  }

  inherit(ElectionTable, Election);

  ElectionTable.prototype.make_rows = function(data) {
    var symbol, state_data, row, rows;

    rows = {};
    for (symbol in data) {
      rows[symbol] = new ElectionRow({
        data:  data[symbol],
        table: this
      });
    }

    return rows;
  };

  ElectionTable.prototype.sum = function(sequence) {
    return sequence.reduce(function(a,b) { return a+b; });
  };

  defineGetters(ElectionTable.prototype, {
    pct_johnson_to_trump:  function() { return (1 - this.pct_johnson_to_clinton); },
    pct_stein_to_trump:    function() { return (1 - this.pct_stein_to_clinton);   },

    electoral_votes:       function() { return this.sum($.map(this.rows, function(state_data) { return state_data.electoral_votes;   })); },

    orig_vote_clinton:     function() { return this.sum($.map(this.rows, function(state_data) { return state_data.orig_vote_clinton; })); },
    orig_vote_trump:       function() { return this.sum($.map(this.rows, function(state_data) { return state_data.orig_vote_trump;   })); },
    orig_vote_johnson:     function() { return this.sum($.map(this.rows, function(state_data) { return state_data.orig_vote_johnson; })); },
    orig_vote_stein:       function() { return this.sum($.map(this.rows, function(state_data) { return state_data.orig_vote_stein;   })); },

    orig_electors_clinton:     function() { return this.sum($.map(this.rows, function(state_data) { return state_data.orig_electors_clinton; })); },
    orig_electors_trump:       function() { return this.sum($.map(this.rows, function(state_data) { return state_data.orig_electors_trump;   })); },

    adjusted_electors_clinton_with_johnson_only: function() { return this.sum($.map(this.rows, function(state_data) { return state_data.adusted_electors_clinton_with_johnson_only; })); },
    adjusted_electors_clinton_with_stein_only:   function() { return this.sum($.map(this.rows, function(state_data) { return state_data.adjusted_electors_clinton_with_stein_only;  })); },

    adjusted_electors_clinton:   function() { return this.sum($.map(this.rows, function(state_data) { return state_data.adjusted_electors_clinton;  })); },
    adjusted_electors_trump:     function() { return this.sum($.map(this.rows, function(state_data) { return state_data.adjusted_electors_trump;  })); },

  });

  window.ElectionRow   = ElectionRow;
  window.ElectionTable = ElectionTable;

})();