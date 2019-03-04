var buttonMenu = document.querySelector('.my-menu-button');
var sidebar = document.querySelector('.mysidebar');
  console.log(buttonMenu)


buttonMenu.onclick = function(e) {
  buttonMenu.classList.toggle('is-active');
  sidebar.classList.toggle('is-active');
}