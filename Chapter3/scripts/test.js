//getElementById
// alert(typeof document.getElementById("purchases"))

//getElementsByTagName
// var items = document.getElementsByTagName("li");
// for (var i = 0; i < items.length; i++) {
//     alert(typeof items[i])
// }

//getElementsByClassName
// var sales = document.getElementsByClassName("sale");
// alert(sales.length);

//getAttribute
// var paras = document.getElementsByTagName("p");
// for (var i = 0; i < paras.length; i++) {
//     var title_text = paras[i].getAttribute("title");
//     if (title_text) {
//         alert(title_text);
//     }
// }

//setAttribute
// var shopping = document.getElementById("purchases");
// alert(shopping.getAttribute("title"));
// shopping.setAttribute("title", "a list of goods");
// alert(shopping.getAttribute("title"));

var paras = document.getElementsByTagName("p");
for (var i = 0; i < paras.length; i++) {
    var title_text = paras[i].getAttribute("title");
    if (title_text) {
        paras[i].setAttribute("title", "brand new title text");
        alert(paras[i].getAttribute("title"));
    }
}