// NOTE: Don't use this token, replace it with your own client access token.
$.jribbble.setToken('377aa441b4d99023661dcc0698df8f864db53c767fef28f541df33e3583ea2bb');

$.jribbble.shots('debuts', {
  'per_page': 36,
  'timeframe': 'month',
  'sort': 'views'
}).then(function(res) {
  var html = [];
  res.forEach(function(shot) {
    html.push('<li class="shots--shot">');
    html.push('<a href="' + shot.html_url + '" target="_blank">');
    html.push('<img src="' + shot.images.normal + '">');
    html.push('</a></li>');
  });

  $('.shots').html(html.join(''));
});
