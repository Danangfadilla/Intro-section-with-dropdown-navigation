const windowResponse = window.matchMedia('(max-width: 375px)'),
    toggler = document.querySelector('.toggler'),
    items = document.querySelector('.items'),
    impstuff = document.querySelector('.impstuff'),
    overlay = document.querySelector('.overlay'),
    heroImage = document.querySelector('.hero-img > img'),
    closeMenu = document.querySelector('.close-menu');

const itemsText = items.innerHTML;
const impText = impstuff.outerHTML;
const navText = itemsText + impText;
const mobileNav = document.querySelector('.mobilenav');
mobileNav.insertAdjacentHTML('beforeend', navText);
let dropdownTitles = mobileNav.querySelectorAll('.has-dropdown > div');
dropdownTitles.forEach((title) => {
    title.addEventListener('click', function() {
        this.parentNode
            .querySelector('.dropdown')
            .classList.toggle('dropdown-active');
    });
});

function response(x) {
    if (x.matches) {
        heroImage.setAttribute('src', 'images/image-hero-mobile.png');
        toggler.addEventListener('click', function() {
            setTimeout(() => {
                overlay.classList.add('overlay-active');
            }, 300);
            mobileNav.classList.add('nav-active');
        });

        function closeNav(closer) {
            closer.addEventListener('click', function() {
                mobileNav.classList.remove('nav-active');
                overlay.classList.remove('overlay-active');
            });
        }
        closeNav(overlay);
        closeNav(closeMenu);
    } else {}
}
response(windowResponse);
windowResponse.onchange = response; <
/script>