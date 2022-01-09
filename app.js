const mobileNav = document.getElementById('mobile-nav');
const mobileNavMenu = document.getElementById('mobile-nav-menu');

const openCloseMenu = (event) => {

    if (mobileNavMenu.classList.contains('active')) {
        mobileNavMenu.classList.remove('active')
        mobileNavMenu.classList.add('non-active')
        mobileNavMenu.style.display = 'none';
    }
    else {
        mobileNavMenu.classList.remove('non-active')
        mobileNavMenu.classList.add('active')
        mobileNavMenu.style.display = 'flex';
    }
}

mobileNav.addEventListener('click', openCloseMenu);
