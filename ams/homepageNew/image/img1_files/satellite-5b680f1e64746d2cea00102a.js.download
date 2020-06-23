_satellite.pushAsyncScript(function(event, target, $variables){
  var w = window,
    d = document;

// Global Nav Custom link tracking
(function () {

    var
        eventType = 'click',
        getAnchor,
        getAttribute,
        trackLink,
        handler;

    getAnchor = function (start) {
        var
            node,
            i;

        node = start;

        // make sure that we have a node
        if (!node) {
            return null;
        }

        // look up to 3 levels deep
        for (i = 0; i < 3; i++) {

            // if this node is an anchor return it
            if (node.getAttribute("data-analytics-event")) {
                return node;

                // if not, then try it's parent
            } else {

                // make sure that we have a parent
                if (node.parentNode) {
                    node = node.parentNode;

                    // if no parent, return null
                } else {
                    return null;
                }

            }
        }

        return null;
    };

    getAttribute = function (node, name) {
        if (
            node &&
            name &&
            node.getAttribute
        ) {
            return node.getAttribute(name);
        }

        return '';
    };

    trackLink = function (node) {
        var
            linkTrackVars = 'channel,prop3,prop4,prop12,prop27,prop52,prop42,eVar12,eVar14,eVar16,eVar18,eVar22,eVar28,eVar80,eVar69,eVar111,eVar84',
            s = w.s_adbadobenonacdc,
            linkText = node.getAttribute("data-analytics-event"),
            data_apps,
            linkeVar80,
            clickUrl,
            click_app;
      if(linkText.indexOf("AppLauncher") !== -1){
        clickUrl = node.getAttribute("data-analytics-url");
        if (linkText === "AppLauncher.appIconToggle") {
            if (node.getAttribute("data-analytics-is-expanded") == "false")
                linkText = "AppLauncher.appIconToggle.Open"
            else
                linkText = "AppLauncher.appIconToggle.Close"
            window.data_apps = node.getAttribute("data-analytics-apps");
            linkeVar80 = linkText;
            s_adbadobenonacdc.prop42 = window.data_apps;
            s_adbadobenonacdc.linkTrackVars = 'channel,prop3,prop4,prop12,prop27,prop52,prop42,eVar12,eVar14,eVar16,eVar18,eVar22,eVar28,eVar80,eVar69,eVar111,eVar84';
            s_adbadobenonacdc.linkTrackEvents = s_adbadobenonacdc.events = "";
        }
        if (linkText === "AppLauncher.more" || linkText === "AppLauncher.viewAll") {
            data_apps = "Creative Cloud Apps|Document Cloud Apps|Experience Cloud Apps";
            s_adbadobenonacdc.prop42 = data_apps;
            if (linkText === "AppLauncher.viewAll") {
                if (node.getAttribute("aria-label").indexOf("Creative") !== -1) {
                    click_app = "Creative Cloud Apps"
                }
                if (node.getAttribute("aria-label").indexOf("Document") !== -1) {
                    click_app = "Document Cloud Apps"
                }
                if (node.getAttribute("aria-label").indexOf("Experience") !== -1) {
                    click_app = "Experience Cloud Apps"
                }
                linkText = linkText + "." + click_app;
                linkeVar80 = linkText + "|" + click_app + "|" + clickUrl;
            } else {
                linkeVar80 = linkText;
            }
            s_adbadobenonacdc.linkTrackVars = 'channel,prop3,prop4,prop12,prop27,prop52,prop42,eVar12,eVar14,eVar16,eVar18,eVar22,eVar28,eVar80,eVar69,eVar111,eVar84';
            s_adbadobenonacdc.linkTrackEvents = s_adbadobenonacdc.events = "";
        }
        if (node.getAttribute("data-analytics-app")) {
            s_adbadobenonacdc.prop42 = window.data_apps;
            click_app = node.getAttribute("data-analytics-app").replace(":", "|");
            linkeVar80 = linkText + "|" + click_app + "|" + clickUrl;
            s_adbadobenonacdc.linkTrackEvents = s_adbadobenonacdc.events = "event202";
            s_adbadobenonacdc.linkTrackVars = 'channel,prop3,prop4,prop12,prop27,prop52,prop42,eVar12,eVar14,eVar16,eVar18,eVar22,eVar28,eVar80,eVar69,eVar111,eVar84,events';
        }


        s_adbadobenonacdc.eVar80 = linkeVar80;

        // send call
        s_adbadobenonacdc.tl_b(true, 'o', linkText, {
            eVar69: s_adbadobenonacdc.pageName,
            eVar80: linkeVar80
        });
      }
    };

    handle = function (evt) {
        var
            node;

        try {

            // get the element
            node = getAnchor(evt.target || evt.srcElement);

            // if we found a link
            if (node && node.getAttribute("data-analytics-event")) {
                trackLink(node);

            } // node

        } catch (err) {
            // console.error(err);
        }
    };

    if (d.addEventListener) {
        d.addEventListener(eventType, handle, true);
    } else if (d.attachEvent) {
        d.attachEvent('on' + eventType, handle);
    }

})();

});
