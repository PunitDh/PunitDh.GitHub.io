const navSlide = () => {
const burger = document.querySelector('.nav-burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');
    //Toggle Nav

    burger.addEventListener('click', () => {
      nav.classList.toggle('nav-active');

    //Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation){
        link.style.animation = ''
      } else {
        link.style.animation = `navLinkFade 0.15s ease forwards ${index / 9 + 1}s`;
      }
    });
  });
}
navSlide();

// function showNav()
// {
//     var links = document.querySelector('.nav-links');
//     links.classList.toggle('nav-active');
// }

