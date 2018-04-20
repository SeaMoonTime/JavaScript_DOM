function prepareSlideshow() {
    if (!document.getElementsByTagName("linklist")) {
        return false;
    }
    if (!document.getElementsByTagName("preview")) {
        return false;
    }
    var preview = document.getElementById("preview");
    preview.style.position = "absolute";

    var list = document.getElementById("linklist");
    var links = list.getElementsByTagName("a");

    //为mouseover事件添加动画效果
    links[0].onmouseover = function() {
        moveElement("preview",-100,0,10);
    }
    links[1].onmouseover = function() {
        moveElement("preview",-200,0,10);
    }
    links[2].onmouseover = function() {
        moveElement("preview",-300,0,10);
    }
}

addLoadEvent(prepareSlideshow);