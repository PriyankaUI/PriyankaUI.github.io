_satellite.pushAsyncScript(function(event, target, $variables){
  _satellite._clearCookies("cpn");
_satellite._clearCookies("ppn");

//To delete Stock Internal search
if (!_satellite.getVar("isSite_AdobeStock")) {
    _satellite._clearCookies("s_stov");
    _satellite._clearCookies("s_a_campaign_stock");
}

function searchAsYouType() {
    // Get Position
    function getElementIndex(node) {
        var i = 1,
            prop = document.body.previousElementSibling ? 'previousElementSibling' : 'previousSibling';
        while (node = node[prop]) {++i }
        return i;
    };

    // Search for Parent Elements
    function upTo(el, Type, Ident) {
        var ident = Ident.toLowerCase(),
            i = 0;

        while (el && el.parentNode) {
            el = el.parentNode,
                i++;

            if (Type === "tagName" && el.tagName.toLowerCase() == ident) {
                return el;
            } else if (Type === "id") {
                if (el.id.toLowerCase() == ident) {
                    return el;
                }
            } else if (Type === 'className') {
                if (i >= 5) {
                    return null;
                }
                if (el.className.toLowerCase() == ident) {
                    return el;
                }
            }
        }
        // Many DOM methods return null if they don't 
        // find the element they are searching for
        // It would be OK to omit the following and just
        // return undefined
        return null;
    };

    if (document.getElementsByClassName("Gnav-menu-content").length) {

        // Search Links Click Listener
        document.getElementsByClassName("Gnav-menu-content")[0].addEventListener("click", function(e) {
            // e.target was the clicked element
            if (e.target && (e.target.nodeName == "A" || e.target.nodeName == "SPAN" || e.target.nodeName == "IMG")) {
                // Get the CSS classes
                var classes = e.target.className.split(" ");
                // Search for the CSS class!
                if (classes) {
                    // For every CSS class the element has...
                    for (var x = 0; x < classes.length; x++) {
                        // If it has the CSS class we want...
                        if (classes[x].indexOf('SAYT-') !== -1 && classes[x].indexOf('SAYT-advancedSearch') ===-1) {
                            // Bingo!
                            var searchResults = upTo(e.target, 'id', "SAYT-results");
                            if (searchResults) {
                                var searchTerm = document.querySelectorAll(".Gnav-menu-content input.SAYT-input"),
                                    searchTerm = searchTerm.length ? searchTerm[0].value : '',
                                    nextPageURL = e.target.nodeName == "SPAN" || e.target.nodeName == "IMG" ? e.target.parentNode.href : e.target.href,
                                    nextPageURL = nextPageURL.replace(/https?:\/\//, '').replace(/\?(.*)/, '')
                                parentElem = '';
                                if (e.target.nodeName == "SPAN" || e.target.nodeName == "IMG") {
                                    //targetChange = e.target.parentNode;
                                    parentElem = upTo(e.target.parentNode, 'className', 'SAYT-hubblet') !== null ? upTo(e.target.parentNode, 'className', 'SAYT-hubblet') : upTo(e.target.parentNode, 'className', 'SAYT-suggestion');
                                } else {
                                    parentElem = upTo(e.target, 'className', 'SAYT-hubblet') !== null ? upTo(e.target, 'className', 'SAYT-hubblet') : upTo(e.target, 'className', 'SAYT-suggestion');
                                }
                                var suggestionParent = upTo(e.target, 'tagName', 'ul'),
                                    type = (suggestionParent.className && suggestionParent.className === 'SAYT-suggestions') ? 'SAYT_Org' : 'SAYT';
                                s_adbadobenonacdc.eVar143 = type + "|" + searchTerm + "|" + getElementIndex(parentElem) + "|" + s_adbadobenonacdc.eVar28 + "|" + nextPageURL;
                                s_adbadobenonacdc.eVar69 = s_adbadobenonacdc.pageName;
                                s_adbadobenonacdc.linkTrackVars = "prop4,prop5,prop27,prop29,prop52,prop59,eVar69,eVar143";
                                s_adbadobenonacdc.tl_b(true, 'o', "Search CTR tracking");
                            }
                            // Now do something here....
                        }
                    }
                }
            }
        });
    }
};
_satellite._poll(searchAsYouType, [function() {
    if (document.getElementsByClassName("Gnav-menu-content").length && document.getElementsByClassName("Gnav-menu-content")[0]) {
        return true;
    }
}], { timeout: 5000, interval: 200 });
});
