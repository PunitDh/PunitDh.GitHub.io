function showNav()
{
    var nav       = document.querySelector('.nav-links');
    var navLinks  = document.querySelectorAll('.nav-links li');

    nav.classList.toggle('nav-active');

    navLinks.forEach((link, index) => {
      if (link.style.animation){
        link.style.animation = ''
      } else {
        link.style.animation = `navLinkFade 0.15s ease forwards ${index / 9 + 1}s`;
      }
    });
}