"use strict";
// const bodyElement = document.querySelector("body") as HTMLBodyElement;
// bodyElement.innerText = "Hello";
// const bodyElement2 = document.querySelector("body");
// bodyElement!.innerText = "Hello";
// const bodyElement3 = document.querySelector("body");
// if (bodyElement) {
//   bodyElement.innerText = "Hello";
// }
function func(arg) {
    if (arg) {
        return arg.toLowerCase();
    }
}
func("hello");
func(null);
