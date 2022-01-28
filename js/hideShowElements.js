const sideBar = document.querySelector("#side-bar");
const showSideBarButton = document.querySelector("#side-bar-button-show");
const hideSideBarButton = document.querySelector("#side-bar-button-hide");

showSideBarButton.addEventListener('click', showSideBar);
hideSideBarButton.addEventListener('click', hideSideBar);


function showSideBar() {
  sideBar.style.display = 'block';
  showSideBarButton.style.display = 'none';
}

function hideSideBar() {
  sideBar.style.display = 'none';
  showSideBarButton.style.display = 'block';
}





const sideBarLinkHeaders = document.querySelectorAll(".side-bar-link-header");
const sideBarLists = document.querySelectorAll(".side-bar-list");
document.element

for (let j = 0; j < sideBarLists.length; j++) {
  let sideBarLinks = sideBarLists[j].querySelectorAll('.side-bar-link');

  for (let i = 0; i < sideBarLinks.length; i++) {
    if (sideBarLinks[i].href === window.location.href) {
      sideBarLists[j].style.display = 'block';
    }
  }
}




for (let i = 0; i < sideBarLinkHeaders.length; i++) {
  sideBarLinkHeaders[i].addEventListener('click', openCloseList);

  function openCloseList() {
    if (sideBarLists[i].style.display != 'block') {
      sideBarLists[i].style.display = 'block';
      sideBarLinkHeaders[i].classList.remove("blue-dot");
    } else {
      sideBarLists[i].style.display = 'none';
      if (sideBarLists[i].getElementsByClassName("current").length != 0) {
        sideBarLinkHeaders[i].classList.add("blue-dot");
      }
    }
  }
}

let sideBarLinks = document.querySelectorAll(".side-bar-link");

for (let i = 0; i < sideBarLinks.length; i++) {
  if (sideBarLinks[i].href === (window.location.href)) {
    sideBarLinks[i].classList.add("current");
  }
}