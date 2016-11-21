(function() {
  'use strict';

  //http://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
  function with_commas(x) {
      return Math.floor(x).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  function election_table_headers() {
    return ([
      '    <tr>',
      '      <th class="text-center">State</th>',
      '      <th class="text-right">Electors</th>',
      '      <th class="text-right">Hillary Clinton</th>',
      '      <th class="text-right">Donald Trump</th>',
      '      <th class="text-right">Gary Johnson</th>',
      '      <th class="text-right">Jill Stein</th>',
      '      <th class="text-right">Original Spread</th>',
      '      <th class="text-right">Adjusted Spread</th>',
      '    </tr>'
    ].join('\n'));
  }

  function election_table_row(record, symbol) {
    return ([
      '    <tr>',
      '      <td class="text-center">' + record.state_name                     + '</td>',
      '      <td class="text-right">'  + record.electoral_votes                + '</td>',
      '      <td class="text-right">'  + with_commas(record.orig_vote_clinton) + '</td>',
      '      <td class="text-right">'  + with_commas(record.orig_vote_trump)   + '</td>',
      '      <td class="text-right">'  + with_commas(record.orig_vote_johnson) + '</td>',
      '      <td class="text-right">'  + with_commas(record.orig_vote_stein)   + '</td>',
      '      <td class="text-right">'  + with_commas(record.orig_spread)       + '</td>',
      '      <td class="text-right">'  + with_commas(record.adjusted_spread)   + '</td>',
      '    </tr>'
    ].join('\n'));
  }

  function election_table_body(usa) {
    var html_rows = $.map(usa.rows, election_table_row);

    return html_rows.join('\n  ');
  }

  window.election_table_headers = election_table_headers;
  window.election_table_row     = election_table_row;
  window.election_table_body    = election_table_body;

})();

