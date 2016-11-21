$( function() {
  var $johnson_slider                          = $('#blue'),
      $stein_slider                            = $('#green'),
      $green_and_blue                          = $('#green, #blue'),
      $stein_percent_for_clinton               = $('#stein_percent_for_clinton'),
      $johnson_percent_for_clinton             = $('#johnson_percent_for_clinton'),
      $stein_percent_for_trump                 = $('#stein_percent_for_trump'),
      $johnson_percent_for_trump               = $('#johnson_percent_for_trump'),
      $electoral_progress_bar                  = $('#electoral_progress_bar'),
      $electoral_debugger                      = $('#electoral_debugger'),
      $electoral_progress_bar_clinton          = $('#electoral_progress_bar_clinton'),
      $electoral_progress_bar_trump            = $('#electoral_progress_bar_trump'),
      $electoral_text_bar_clinton              = $('#electoral_progress_bar_clinton > p'),
      $electoral_text_bar_trump                = $('#electoral_progress_bar_trump   > p'),
      $electoral_progress_bar_clinton_extra    = $('#electoral_progress_bar_clinton_extra'),
      $electoral_progress_bar_trump_extra      = $('#electoral_progress_bar_trump_extra');

  function electors(data) {
    var tally = {clinton: 0, trump: 0};
    $.each(data, function(abbreviation, state_results) {
      if (state_results.trump > state_results.clinton) {
        tally.trump += state_results.electoral_votes;
      } else {
        tally.clinton += state_results.electoral_votes;
      }
    });

    if (tally.trump + tally.clinton !== 538) {
      throw new Error("Error counting electors");
    }

    return Object.freeze(tally);
  }

  var old_clinton_count;
  function sync_electoral_progess_bar(electoral_total) {
    if (electoral_total.clinton === old_clinton_count) {
      return;
    } else {
      old_clinton_count = electoral_total.clinton;
    }

    var total         =  (electoral_total.clinton + electoral_total.trump),
        clinton_width =  Math.round(100* electoral_total.clinton / total),
        trump_width   =  100 - clinton_width,
        max_width     =  50;

    $electoral_progress_bar_clinton_extra.stop();
    $electoral_progress_bar_trump_extra.stop();
    $electoral_progress_bar_clinton.stop();
    $electoral_progress_bar_trump.stop();

    $electoral_progress_bar_clinton.attr(       'style',   'width: ' + Math.min(max_width, clinton_width)       + '%; transition: 40ms; ');
    $electoral_progress_bar_clinton_extra.attr( 'style',   'width: ' + Math.max(0,  clinton_width - max_width)  + '%; transition: 40ms; ');

    $electoral_progress_bar_trump_extra.attr(   'style',   'width: ' + Math.max(0, trump_width - max_width)     + '%; transition: 40ms; ');
    $electoral_progress_bar_trump.attr(         'style',   'width: ' + Math.min(max_width, trump_width)         + '%; transition: 40ms; ');

    $electoral_text_bar_clinton.text('Clinton (' + electoral_total.clinton + ')');
    $electoral_text_bar_trump.text('(' + electoral_total.trump + ') Trump');
  }

  function refreshSwatch() {
    var stein    = $stein_slider.slider('value'),
        johnson  = $johnson_slider.slider('value');

    var booster  =  {stein: stein/256, johnson: johnson/256},
        tmpGary  =  Math.round(100*booster.johnson),
        tmpStein =  Math.round(100*booster.stein);

    $stein_percent_for_trump.attr('value', 100-tmpStein);
    $stein_percent_for_trump.val(100-tmpStein);

    $johnson_percent_for_trump.attr('value', 100-tmpGary);
    $johnson_percent_for_trump.val(100-tmpGary);

    $stein_percent_for_clinton.attr('value', tmpStein);
    $stein_percent_for_clinton.val(tmpStein);

    $johnson_percent_for_clinton.attr('value', tmpGary);
    $johnson_percent_for_clinton.val(tmpGary);

    var data, msg, elector_total;
    if (!!window.refresh_map) {
      data = window.refresh_map(booster);
      electoral_total = electors(data);
      sync_electoral_progess_bar(electoral_total);
    }
  }

  $johnson_percent_for_clinton.on('change', function() {
    if (!$johnson_percent_for_clinton.val()) {
      $johnson_slider.slider('value', 128);
    } else {
      var tmpVal = $johnson_percent_for_clinton.val();
      $johnson_slider.slider('value', 2.56*tmpVal);
    }
  });

  $stein_percent_for_clinton.on('change', function() {
    if (!$stein_percent_for_clinton.val()) {
      $stein_slider.slider('value', 128);
    } else {
      var tmpVal = $stein_percent_for_clinton.val();
      $stein_slider.slider('value', 2.56*tmpVal);
    }
  });

  $green_and_blue.slider({
      orientation: "horizontal",
      range: "min",
      max: 255,
      value: 127,
      slide: refreshSwatch,
      change: refreshSwatch
  });
});
