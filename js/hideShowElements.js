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