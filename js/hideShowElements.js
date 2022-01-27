function showHideSideBar(element, button) {
  const el = document.getElementsByClassName(element);
  const buttonOpen = document.getElementById(button);

  console.log(window.innerWidth);
  if (window.innerWidth < 760) {
    if (el[0].style.display != 'block') {
      el[0].style.display = 'block';
      buttonOpen.style.display = 'none';
    } else {
      el[0].style.display = 'none';
      buttonOpen.style.display = 'block';
    }
  }
  else {
    if (el[0].style.display != 'none') {
      el[0].style.display = 'none';
      buttonOpen.style.display = 'block';
    } else {
      el[0].style.display = 'block';
      buttonOpen.style.display = 'none';
    }
  }
}

function showHideList(element, id) {
  const el = document.getElementsByClassName(element);

  if (el[id].style.display != 'block') {
    el[id].style.display = 'block';
  } else {
    el[id].style.display = 'none';
  }
}

const el = document.getElementsByClassName('side-bar-list');

for (let j = 0; j < el.length; j++) {
  let links = el[j].getElementsByTagName('a');

  for (let i = 0; i < links.length; i++) {
    if (links[i].href === window.location.href) {
      el[j].style.display = 'block';
    }
  }
}