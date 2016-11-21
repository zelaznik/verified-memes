$(document).ready(function() {

  var ct = 0;
  var $container        = $('#interactive_electoral_map'),
      $results_headers  = $('#results_headers'),
      $results_by_state = $('#results_by_state');

  window.refresh_map = function(booster) {
    $container.empty();

    var data = (function() {
      var r, orig, abbreviation, final = {};

      for(abbreviation in raw_data) {
        orig = raw_data[abbreviation];

        r = (booster == null) ? orig : boosted(orig, booster);

        final[abbreviation] = {
          fillKey:         getKey(r.clinton, r.trump, r.pickup),
          electoral_votes: r.electoral_votes,
          clinton:         r.clinton,
          trump:           r.trump,
          stein:           r.stein,
          johnson:         r.johnson
        };
      }

      return final;
    })();

    var usa = window.usa = new ElectionTable({
      data: raw_data,
      params: {
        pct_johnson_to_clinton: (booster == null) ? 0.5 : booster.johnson,
        pct_stein_to_clinton:   (booster == null) ? 0.5 : booster.stein
      }
    });

    $results_headers.html(election_table_headers(usa));
    $results_by_state.html(election_table_body(usa));

    var electoral_map = window.electoral_map = new Datamap({
      scope: 'usa',
      element: document.getElementById('interactive_electoral_map'),

      geographyConfig: {
        highlightBorderColor: '#bada55',
        popupTemplate: function(geography, data) {
          var total_votes = (data.clinton + data.trump + data.johnson + data.stein);
          function percent(val) {
            return '' + (Math.floor(10000 * val / total_votes)/100) + '%'
          }
          return (
            '<div class="hoverinfo">' +
            geography.properties.name + ': ' + data.electoral_votes + '<br/>' +
            '  Clinton: ' + percent(data.clinton) + '<br/>' +
            '  Trump: '   + percent(data.trump)   + '<br/>' +
            '  Johnson: ' + percent(data.johnson) + '<br/>' +
            '  Stein: '   + percent(data.stein)   + '<br/>' +
            '</div>'
          );
        },
        highlightBorderWidth: 3
      },

      fills: fills,
      data: data
    });

    electoral_map.labels();

    return data;
  };

  window.refresh_map();
  var $stein_slider   = $('#green'),
      $johnson_slider = $('#blue');

  $stein_slider.slider( "value", 128 );
  $johnson_slider.slider(  "value", 128 );

});
