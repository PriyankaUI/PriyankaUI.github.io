_satellite.pushAsyncScript(function(event, target, $variables){
  if (typeof jQuery != 'undefined' && typeof jQuery.fn.on !== 'undefined') {
  var linkname = '',
    linkTrack = function(linkname) {
      s_adbadobenonacdc.eVar69 = s_adbadobenonacdc.pageName;
      s_adbadobenonacdc.linkTrackVars = 'prop3,prop4,prop5,prop27,prop52,eVar28,eVar12,eVar69,eVar80,eVar111,events';
      s_adbadobenonacdc.tl(true, "o", linkname);
    };


  //Logged In home page

  jQuery("a[href*='max.adobe.com']").click(function() {
    linkname = "adobe.com:homepage:WatchMAXkeynoteClick";
    linkTrack(linkname);
  })

  //Logged out home page in Launch

  //Max site
  jQuery(".keynote a").click(function() {
    if (jQuery(this).text() && jQuery(this).text().trim() == "Watch now") {
      linkname = "max.adobe.com:WatchNowClick";
    }
    if (jQuery(this).text() && jQuery(this).text().trim() == "Watch replay") {
      linkname = "max.adobe.com:WatchReplayClick";
    }
    linkTrack(linkname);
  })


  //max.adobe .com play icon click

  jQuery(".playerwrapper .mainvideowrapper .playbutton, .fa-play").on('click', function() {
    linkname = s_adbadobenonacdc.prop3 + ":playIconClick";
    linkTrack(linkname);
  });



  //phases
  jQuery(document).on("click", "a[href*='/phases/phase']", function() {
    linkname = s_adbadobenonacdc.prop3 + ":" + jQuery(this).text().trim() + "Click";
    linkTrack(linkname);
  });
}
});
