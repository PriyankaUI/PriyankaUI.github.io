_satellite.pushAsyncScript(function(event, target, $variables){
  if (typeof jQuery !== "undefined") {
  jQuery('[data-seed-privacy="adobe_optout,omniture_optout"]').click(function() {
    if (_satellite._readCookie('adobe_optout')) {
      var img = jQuery('<img>')
      img = jQuery(img).css("display", "none");
      img.attr('src', 'https://adobe.demdex.net/demoptout.jpg');
      jQuery('body').append(img);

    }
  })
}
});
