function showHideSideBar(element, button) {
  const el = document.getElementsByClassName(element);
  const buttonOpen = document.getElementById(button);

  if (el[0].style.display == 'none') {
    el[0].style.display = 'block';
    buttonOpen.style.display = 'none';
  } else {
    el[0].style.display = 'none';
    buttonOpen.style.display = 'block';
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