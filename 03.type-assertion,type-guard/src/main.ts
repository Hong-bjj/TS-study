// const bodyElement = document.querySelector("body") as HTMLBodyElement;
// bodyElement.innerText = "Hello";

// const bodyElement2 = document.querySelector("body");
// bodyElement!.innerText = "Hello";

// const bodyElement3 = document.querySelector("body");
// if (bodyElement) {
//   bodyElement.innerText = "Hello";
// }

function func(arg: string | null) {
  if (arg) {
    return (arg as string).toLowerCase();
  }
}

func("hello");
func(null);
