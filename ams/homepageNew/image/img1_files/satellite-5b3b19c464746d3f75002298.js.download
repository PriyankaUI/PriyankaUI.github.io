_satellite.pushAsyncScript(function(event, target, $variables){
  var match_cookie = '',
    group,
    aam_sid;

match_cookie = _satellite.readCookie('amstg');

if (match_cookie == 'undefined' || match_cookie == null) {
    group = (Math.random() < 0.5) ? 'control' : 'test';
    var d = new Date();
    d.setTime(d.getTime() + (365 * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = "amstg=" + group + ";" + expires + ";Domain=stock.adobe.com";
} else if (match_cookie) {
    group = match_cookie;
}

aam_sid = (group === "control") ? "4069747" : "4070085";
var element = document.createElement("img");
element.src = "https://adobe.demdex.net/event?d_sid=" + aam_sid;
element.height = "0";
element.width = "0";
document.body.appendChild(element);
});
