
//NAVBAR DISPOSITIVOS MOVILES.

const toggleButton = document.getElementsByClassName('navbar-toggle')[0];
const navbarLinks = document.getElementsByClassName('navbar-links');
toggleButton.addEventListener('click',function() {
      for(var i=0; i<navbarLinks.length; i++)
      navbarLinks[i].classList.toggle('active');
});

//SCROLL CAMBIA DE COLOR NAVBAR. 

window.addEventListener("scroll", function(){
      var menu = document.querySelector(".menu");
      menu.classList.toggle("sticky", window.scrollY > 0);
})




