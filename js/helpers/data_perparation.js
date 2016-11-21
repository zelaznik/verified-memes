var raw_data = {
  "AL": { "state_name": "Alabama",        "electoral_votes":  9, "clinton":  718084, "trump": 1306925, "johnson":  43869, "stein":   9287 },
  "AK": { "state_name": "Alaska",         "electoral_votes":  3, "clinton":   93007, "trump":  130415, "johnson":  14593, "stein":   4445 },
  "AZ": { "state_name": "Arizona",        "electoral_votes": 11, "clinton":  936250, "trump": 1021154, "johnson":  80151, "stein":  25255 },
  "AR": { "state_name": "Arkansas",       "electoral_votes":  6, "clinton":  378729, "trump":  677904, "johnson":  29518, "stein":   9837 },
  "CA": { "state_name": "Califorina",     "electoral_votes": 55, "clinton": 7230699, "trump": 3841134, "johnson": 394239, "stein": 215694 },
  "CO": { "state_name": "Colorado",       "electoral_votes":  9, "clinton": 1212209, "trump": 1137455, "johnson": 129451, "stein":  33147 },
  "CT": { "state_name": "Connecticut",    "electoral_votes":  7, "clinton":  884432, "trump":  668266, "johnson":  48051, "stein":  22793 },
  "DC": { "state_name": "Washington DC",  "electoral_votes":  3, "clinton":  260223, "trump":   11553, "johnson":   4501, "stein":   3995 },
  "DE": { "state_name": "Deleware",       "electoral_votes":  3, "clinton":  235581, "trump":  185103, "johnson":  14751, "stein":   6100 },
  "FL": { "state_name": "Floria",         "electoral_votes": 29, "clinton": 4485745, "trump": 4605515, "johnson": 206007, "stein":  64019 },
  "GA": { "state_name": "Georgia",        "electoral_votes": 16, "clinton": 1837300, "trump": 2068623, "johnson": 123641, "stein":      0 },
  "HI": { "state_name": "Hawaii",         "electoral_votes":  4, "clinton":  266827, "trump":  128815, "johnson":  15949, "stein":  12727 },
  "ID": { "state_name": "Idaho",          "electoral_votes":  4, "clinton":  189677, "trump":  407199, "johnson":  28256, "stein":   8464 },
  "IL": { "state_name": "Illionis",       "electoral_votes": 20, "clinton": 2977498, "trump": 2118179, "johnson": 204491, "stein":  74112 },
  "IN": { "state_name": "Indiana",        "electoral_votes": 11, "clinton": 1031953, "trump": 1556220, "johnson": 133856, "stein":      0 },
  "IA": { "state_name": "Iowa",           "electoral_votes":  6, "clinton":  650790, "trump":  798923, "johnson":  57322, "stein":  11119 },
  "KS": { "state_name": "Kansas",         "electoral_votes":  6, "clinton":  414788, "trump":  656009, "johnson":  53648, "stein":  22698 },
  "KY": { "state_name": "Kentucky",       "electoral_votes":  8, "clinton":  628834, "trump": 1202942, "johnson":  53749, "stein":  13913 },
  "LA": { "state_name": "Lousiana",       "electoral_votes":  8, "clinton":  779535, "trump": 1178004, "johnson":  37950, "stein":  14018 },
  "ME": { "state_name": "Maine",          "electoral_votes":  5, "clinton":  354873, "trump":  334838, "johnson":  37764, "stein":  14075 },
  "MD": { "state_name": "Maryland",       "electoral_votes": 10, "clinton": 1497951, "trump":  873646, "johnson":  71107, "stein":  31839 },
  "MA": { "state_name": "Massachusetts",  "electoral_votes": 10, "clinton": 1964768, "trump": 1083069, "johnson": 136784, "stein":  46910 },
  "MI": { "state_name": "Michigan",       "electoral_votes": 16, "clinton": 2268193, "trump": 2279805, "johnson": 173057, "stein":  50700 },
  "MN": { "state_name": "Minnesota",      "electoral_votes": 10, "clinton": 1366676, "trump": 1322891, "johnson": 112944, "stein":  36957 },
  "MS": { "state_name": "Mississippi",    "electoral_votes":  6, "clinton":  462250, "trump":  678457, "johnson":  13817, "stein":   3595 },
  "MO": { "state_name": "Missouri",       "electoral_votes": 10, "clinton": 1054889, "trump": 1585753, "johnson":  96404, "stein":  25086 },
  "MT": { "state_name": "Montana",        "electoral_votes":  3, "clinton":  174521, "trump":  274120, "johnson":  27264, "stein":   7669 },
  "NE": { "state_name": "Nebraska",       "electoral_votes":  5, "clinton":  273858, "trump":  485819, "johnson":  37615, "stein":   8346 },
  "NV": { "state_name": "Nevada",         "electoral_votes":  6, "clinton":  537753, "trump":  511319, "johnson":  37299, "stein":      0 },
  "NH": { "state_name": "New Hanpshire",  "electoral_votes":  4, "clinton":  348521, "trump":  345789, "johnson":  30827, "stein":   6416 },
  "NJ": { "state_name": "New Jersey",     "electoral_votes": 14, "clinton": 2021756, "trump": 1535513, "johnson":  68695, "stein":  35949 },
  "NM": { "state_name": "New Mexico",     "electoral_votes":  5, "clinton":  380724, "trump":  315875, "johnson":  73669, "stein":   9729 },
  "NY": { "state_name": "New York",       "electoral_votes": 29, "clinton": 4143874, "trump": 2640570, "johnson": 161857, "stein":  99895 },
  "NC": { "state_name": "North Carolina", "electoral_votes": 15, "clinton": 2162074, "trump": 2339603, "johnson": 127794, "stein":      0 },
  "ND": { "state_name": "North Dakota",   "electoral_votes":  3, "clinton":   93526, "trump":  216133, "johnson":  21351, "stein":   3769 },
  "OH": { "state_name": "Ohio",           "electoral_votes": 18, "clinton": 2317001, "trump": 2771984, "johnson": 168599, "stein":  44310 },
  "OK": { "state_name": "Oklahoma",       "electoral_votes":  7, "clinton":  419788, "trump":  947934, "johnson":  83334, "stein":      0 },
  "OR": { "state_name": "Oregon",         "electoral_votes":  7, "clinton":  934631, "trump":  742506, "johnson":  86306, "stein":  45132 },
  "PA": { "state_name": "Pennsylvania",   "electoral_votes": 20, "clinton": 2844705, "trump": 2912941, "johnson": 142653, "stein":  48912 },
  "RH": { "state_name": "Rhode Island",   "electoral_votes":  4, "clinton":  934631, "trump":  742506, "johnson":  86306, "stein":  45132 },
  "SC": { "state_name": "South Carolina", "electoral_votes":  9, "clinton":  849469, "trump": 1143611, "johnson":  48715, "stein":  12917 },
  "SD": { "state_name": "South Dakota",   "electoral_votes":  3, "clinton":  117442, "trump":  227701, "johnson":  20845, "stein":      0 },
  "TN": { "state_name": "Tennessee",      "electoral_votes": 11, "clinton":  867110, "trump": 1517402, "johnson":  70084, "stein":  15919 },
  "TX": { "state_name": "Texas",          "electoral_votes": 38, "clinton": 3867816, "trump": 4681590, "johnson": 282524, "stein":  71307 },
  "UT": { "state_name": "Utah",           "electoral_votes":  6, "clinton":  274188, "trump":  452086, "johnson": 222858, "stein":   5484 },
  "VT": { "state_name": "Vermont",        "electoral_votes":  3, "clinton":  178179, "trump":   95053, "johnson":  10047, "stein":   6748 },
  "VA": { "state_name": "Virginia",       "electoral_votes": 13, "clinton": 1916845, "trump": 1731156, "johnson": 116600, "stein":  27272 },
  "WA": { "state_name": "Washington",     "electoral_votes": 12, "clinton": 1916845, "trump": 1731156, "johnson": 116600, "stein":  30416 },
  "WV": { "state_name": "West Virginia",  "electoral_votes":  5, "clinton":  187457, "trump":  486198, "johnson":  22798, "stein":   8000 },
  "WI": { "state_name": "Wisconsin",      "electoral_votes": 10, "clinton": 1382210, "trump": 1409467, "johnson": 106442, "stein":  30980 },
  "WY": { "state_name": "Wyoming",        "electoral_votes":  3, "clinton":   55949, "trump":  174248, "johnson":  13285, "stein":   2512 }
};

var primary = {
  clinton: [ 34,  71, 105],
  trump:   [143,  50,  34],
  grey:    [160, 160, 160],
  white:   [255, 255, 255]
};

function mixColor(color_start, color_finish, alpha) {
  var blended = [];
  for (var i =0; i<3; i++) {
    var color_float = color_start[i] * (1-alpha) + color_finish[i] * alpha;
    var color_hex   = Math.floor(256+color_float).toString(16).slice(-2).toUpperCase();
    blended.push(color_hex);
  }
  return '#' + blended.join('');
}

function createMix(color_start, color_finish, color_name, mixed_colors) {
  mixed_colors = mixed_colors || {};
  for (var i=0; i<=100; i ++) {
    var pct   = ('' + (1000 + i)).slice(1);
    var key   = color_name + '_' + pct;
    var alpha = 0.01*(100-i);
    mixed_colors[key] = mixColor(color_start, color_finish, alpha);
  }
  return mixed_colors;
}

function getKey(clinton, trump, pickup) {
  if (pickup === 'clinton') {
    return 'pickup_clinton';
  } else if (pickup === 'trump') {
    return 'pickup_trump';
  }

  var multiplier = 2,
      exponent   = 0.25;

  var margin     = Math.abs(clinton - trump) / (clinton+trump);
  var curved     = Math.pow(margin, exponent);
  var magnified  = Math.min(Math.floor(curved * multiplier * 100), 100);
  var digits3    = (1000 + magnified).toString(10).slice(-3);

  if (clinton > trump) {
    return 'clinton_' + digits3;
  } else {
    return 'trump_' + digits3;
  }
}

var fills = (function() {
  var mixed_colors = {
    'pickup_clinton': '#00FF00',
    'pickup_trump':   '#FF00FF'
  };

  createMix(primary.clinton, primary.grey, 'clinton', mixed_colors);
  createMix(primary.trump, primary.grey, 'trump', mixed_colors);
  return Object.freeze(mixed_colors);
})();

var ct = 0;
function boosted(original, boost) {
  var with_boost = {
    original_clinton: original.clinton,
    original_trump:   original.trump
  };

  for (var field_name in original) {
    with_boost[field_name] = original[field_name];
  }

  if (boost.stein > 1 || boost.stein < 0) {
    throw new Error('Invalid boost.stein: ' + boost.stein);
  }
  if (boost.johnson > 1 || boost.johnson < 0) {
    throw new Error('Invalid boost.johnson: ' + boost.johnson);
  }

  with_boost.clinton = Math.floor(
    original.clinton +
    (original.stein * boost.stein) +
    (original.johnson * boost.johnson)
  );

  with_boost.trump = Math.floor(
    original.trump +
    (original.stein * (1-boost.stein)) +
    (original.johnson * (1-boost.johnson))
  );

  var old_spread = original.clinton - original.trump,
      new_spread = with_boost.clinton - with_boost.trump;

  if ((old_spread > 0) && (new_spread < 0)) {
    with_boost.pickup = 'trump';
  }
  if ((old_spread < 0) && (new_spread > 0)) {
    with_boost.pickup = 'clinton';
  }
  return with_boost;
}

$(document).ready(function() {
  window.boosted = boosted;
});
