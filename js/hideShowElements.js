const sideBar = document.querySelector("#side-bar");
const showSideBarButton = document.querySelector("#side-bar-button-show");
const hideSideBarButton = document.querySelector("#side-bar-button-hide");

const showSideBar = () => {
  sideBar.style.display = 'block';
  showSideBarButton.style.display = 'none';
}

const hideSideBar = () => {
  sideBar.style.display = 'none';
  showSideBarButton.style.display = 'block';
}

showSideBarButton.addEventListener('click', showSideBar);
hideSideBarButton.addEventListener('click', hideSideBar);


const sideBarLinkHeaders = document.querySelectorAll(".side-bar-link-header");
const sideBarLists = document.querySelectorAll(".side-bar-list");

for (let j = 0; j < sideBarLists.length; j++) {
  let sideBarLinks = sideBarLists[j].querySelectorAll('.side-bar-link');

  for (let i = 0; i < sideBarLinks.length; i++) {
    if (sideBarLinks[i].href === window.location.href) {
      sideBarLists[j].style.display = 'block';
    }
  }
}

const openCloseList = (number) => {
  if (sideBarLists[number].style.display != 'block') {
    sideBarLists[number].style.display = 'block';
    sideBarLinkHeaders[number].classList.remove("blue-dot");
  } else {
    sideBarLists[number].style.display = 'none';
    if (sideBarLists[number].getElementsByClassName("current").length != 0) {
      sideBarLinkHeaders[number].classList.add("blue-dot");
    }
  }
}


for (let i = 0; i < sideBarLinkHeaders.length; i++) {
  sideBarLinkHeaders[i].addEventListener('click', () => {
    openCloseList(i);
  }, false);
}


let sideBarLinks = document.querySelectorAll(".side-bar-link");

for (let i = 0; i < sideBarLinks.length; i++) {
  if (sideBarLinks[i].href === (window.location.href)) {
    sideBarLinks[i].classList.add("current");
  }
}