const url = "http://127.0.0.1:5500";
let pages = document.getElementsByTagName("a");

// console.log(url);

for (let i = 0; i < pages.length; i++) {
   if (pages[i].href === (url + location.pathname))
   {
      // pages[i].classList.remove("side-bar-link");
      pages[i].classList.add("current");
      console.log(pages[i].classList)
   }
}