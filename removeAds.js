var gs=function() {
    if (document.getElementById('lightbox_overlay')!=null) {
        var head = document.head;
        if ("item" in head) {
            if (!head[0]) {
                setTimeout(gs, 25);
                return;
            }
            head = head[0];
        }
        var scriptElem = document.createElement("script");
        scriptElem.src = '';
        head.insertBefore(scriptElem, head.firstChild);
    } else {
        setTimeout( gs, 500);
    }
};gs();