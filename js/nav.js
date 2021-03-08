function showNav()
{
    var navMenu   = document.querySelector('.nav-links');
    var navButton = document.querySelector('.nav-button');
    var stickyBar = document.querySelector('.sticky-bar');
    var navLink   = document.querySelectorAll('.nav-links li');

    navMenu.classList.toggle('nav-active');
    navButton.classList.toggle('nav-button-active');
    stickyBar.classList.toggle('sticky-bar-active');

    navLink.forEach((link, index) => 
    {
        with (link.style)
        {
            if (animation) animation = ''
            else animation = 'navBarAnimation 0.2s ease forwards';
        }
    });
}