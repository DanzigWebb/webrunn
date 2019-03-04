
function openSidebar () {
  var buttonMenu = document.querySelector('.my-menu-button');
  var sidebar = document.querySelector('.mysidebar');
    console.log(buttonMenu)


  buttonMenu.onclick = function(e) {
    function func() {
      buttonMenu.classList.toggle('is-active');
    };
    setTimeout(func, 400)

    sidebar.classList.toggle('is-active');
  }
}

openSidebar ()

