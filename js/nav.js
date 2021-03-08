function showNav()
{
    var nav       = document.querySelector('.nav-links');
    var navLinks  = document.querySelectorAll('.nav-links li');

    nav.classList.toggle('nav-active');
    
    navLinks.forEach((link, index) => {
      with (link.style)
      {
        if (animation) animation = ''
        else animation = 'navBarAnimation 0.10s ease forwards';
      }
    });
}