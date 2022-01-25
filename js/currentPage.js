let pages = document.getElementsByTagName("a");

for (let i = 0; i < pages.length; i++) {
   if (pages[i].href === (window.location.href)) {
      pages[i].classList.add("current");
   }
}
