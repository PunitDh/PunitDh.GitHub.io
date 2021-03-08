function showNav()
{
    var navMenu   = document.querySelector('.nav-links');
    var navLink   = document.querySelectorAll('.nav-links li');
    var navButton = document.querySelector('.nav-button');

    navButton.classList.toggle('nav-button-active');
    navMenu.classList.toggle('nav-active');
    
    navLink.forEach((link, index) => {
      with (link.style)
      {
        if (animation) animation = ''
        else animation = 'navBarAnimation 0.2s ease forwards';
      }
    });
}