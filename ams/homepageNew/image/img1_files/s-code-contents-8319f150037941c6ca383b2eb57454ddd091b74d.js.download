 //--------------------- Globals ------------------------------------------------
 // so that the sObject is set globally on IE8 and earlier
 var s_adbadobestock; // set this globally

 (function(_satellite) {
     'use strict';

     /************************** Global Config *************************************/
     var namespace = 'adobecorp';
     var sObjectName = 's_adbadobestock';
     var account = '';


     /************************** Global Config End *********************************/

     /************************** VisitorAPI.js Config ******************************/
     //var visitor = new Visitor(namespace); // not yet...
     //visitor.trackingServer = 'stats.adobe.com'; // not yet...
     //visitor.trackingServerSecure = 'sstats.adobe.com'; // not yet...
     /************************** VisitorAPI.js Config End **************************/

     /************************** AppMeasurement.js Config **************************/
    //var s = new AppMeasurement();

     //s.account = _satellite._getAdobeAnalyticsAccount(sObjectName);
   if (window.location.hostname === "staging-astock1.fotolia.net" || window.location.hostname ==="primary.staging.adobestock.com" || window.location.hostname ==="adobestock.dev.loc" || window.location.hostname ==="primary.stock.stage.adobe.com") {
         account = 'adbadobestockqa';
     } else if (window.location.hostname === "stock.adobe.com") {
         account = 'adbadobestockprod';
     }

    var s = window.s_gi(account);

     // set globals
     window[sObjectName] = s;

     //--------------------- Visitor Config -----------------------------------------
     //s.visitorNamespace = namespace; //technically not needed
     //s.visitor = Visitor.getInstance(namespace); // not yet...
     //s.visitorID = ''; // not yet...

     //--------------------- Other Config -------------------------------------------
     s.charSet = 'UTF-8';
     s.trackingServer = 'stats.adobe.com';
     s.trackingServerSecure = 'sstats.adobe.com';
     s.cookieDomainPeriods = _satellite._getDomainPeriods();
     s.fpCookieDomainPeriods = _satellite._getDomainPeriods();
     //s.cookieLifetime = ''; //set in UI
     //s.currencyCode = ''; //set in UI
     //s.debugTracking = false; // not going to set yet...
     //s.dynamicVariablePrefix = 'D='; //set in UI
     //s.mobile = ''; //not going to set here...not applicable

     //--------------------- Link Tracking Config -----------------------------------
     //s.maxDelay = 1000; // not going to set yet...
     //s.trackInlineStats = true; // ClickMap
     s.trackInlineStats = false; // ClickMap
     s.trackDownloadLinks = true;
     s.trackExternalLinks = true;
     s.linkLeaveQueryString = false;
     s.linkTrackEvents = "None";
     s.linkTrackVars = "None";
     s.linkDownloadFileTypes = [
         'adpp',
         'air',
         'apk',
         'avi',
         'bin',
         'cptx',
         'css',
         'csv',
         'dmg',
         'doc',
         'docx',
         'eps',
         'exe',
         'flv',
         'hqx',
         'jar',
         'jpg',
         'js',
         'm4v',
         'mov',
         'mp3',
         'mpg',
         'msi',
         'mxp',
         'pdf',
         'png',
         'ppt',
         'pptx',
         'rar',
         'svg',
         'swc',
         'tab',
         'tbz2',
         'txt',
         'vsd',
         'vxd',
         'wav',
         'wma',
         'wmv',
         'xls',
         'xlsx',
         'xml',
         'zip',
         'zxp'
     ].join(',');
     s.linkExternalFilters = ''; //none
     s.linkInternalFilters = _satellite.getVar('adobe_linkInternalFilters');
     //_satellite._adobeAnalytics_plugin_clickPast(s_adbadobestock);
     _satellite._adobeAnalytics_plugin_getLoadTime(s_adbadobestock);
     _satellite._adobeAnalytics_plugin_clickPast(s_adbadobestock)
         //--------------------- doPlugins ----------------------------------------------
     s.usePlugins = true;
     s.doPlugins = function(s) {
      if (s.linkType && s_adbadobestock ) {
        s_adbadobestock.eVar32 = _satellite.getVar('adbadobenonacdc_pageName');
        s_adbadobestock.linkTrackVars = s_adbadobestock.linkTrackVars ? s_adbadobestock.linkTrackVars + ",eVar32" : "eVar32";
        }
         // TODO:
         //if (window.syncTrackCall) {
         //    s.sync = true;
         //}
         // var visitStart = 0,
         //firstPage = false;

         // Get the visit start page
         // visitStart = _satellite._getVisitStart('s_vs_s');
         //if (visitStart && visitStart == 1) {
         // firstPage = 'firstpage';
         //}

         //s_adbadobestock.clickPast(firstPage, 'event86', 'event87');
         var visitStart = 0,
             firstPage = false;
         // Get the visit start page
         visitStart = SL._getVisitStart('s_vs_as');
         if (visitStart && visitStart == 1) {
             firstPage = 'firstpage';
         }

         s.clickPast(firstPage, 'event86', 'event87');

         if (!s.eVar65) {
             if (window.performance && window.performance.timing) {
                 s.eVar65 = s.getLoadTime("browserapi", "event61", "event62");
             } else {
                 s.eVar65 = s.getLoadTime("header", "event61", "event62");
             }
         }

         s_adbadobestock.marketingCloudVisitorID = s_adbadobenonacdc.visitor.getMarketingCloudVisitorID();
         s_adbadobestock.analyticsVisitorID = s_adbadobenonacdc.visitor.getAnalyticsVisitorID();
         s_adbadobestock.eVar22 = _satellite.getVar('adbadobenonacdc_eVar22');
         s_adbadobestock.eVar41 = _satellite.getVar('adbadobestock_eVar41_New_Repeat_Visitor_Stock');
         s_adbadobestock.prop13 = _satellite.getVar('adbadobenonacdc_prop13');
         s_adbadobestock.prop10 = _satellite.getVar('adbadobestock_prop10_SignInStatus')

         if(document.getElementById("js-page-config")){
            var stockJSONObj = JSON.parse(document.getElementById("js-page-config").innerHTML);
            if(stockJSONObj.SUSI && stockJSONObj.SUSI.profile && stockJSONObj.SUSI.profile.userId){   // eVar12
                s_adbadobestock.eVar12 = stockJSONObj.SUSI.profile.userId.replace('@AdobeID','');
            }
         }

         var t_search = _satellite._getValOnce(s_adbadobestock.eVar3, 's_stov', 0);

/*         if (t_search === '') {

             var a = s_adbadobestock.events ? s_adbadobestock.events.split(',') : [],
                 ev = [],
                 i;
             for (i = 0; i < a.length; i++) {
                 if (a[i] == 'event1' || a[i] == 'event2') {
                     continue;
                 } else {
                     ev.push(a[i]);
                 }
             }
             s_adbadobestock.events = ev.join(',');
         }*/



     };

     //--------------------- Plugins ------------------------------------------------
     //TODO:

     /************************** AppMeasurement.js Config End **********************/

     /************************** AppMeasurement_Module_media.js Config *************/
     //s.Media.trackEvents = ''; // not going to set yet...
     //s.Media.trackVars = ''; // not going to set yet...
     /************************** AppMeasurement_Module_media.js Config End *********/

     /************************** AppMeasurement_Module_Integrate.js Config *********/
     /************************** AppMeasurement_Module_Integrate.js Config End *****/

     // VisitorAPI.js Library in Page Load Rule
     // AppMeasurement.js Library in Page Load Rule
     // AppMeasurement_Module_media.js in Page Load Rule
     // AppMeasurement_Module_Integrate.js in Page Load Rule

 }(_satellite));