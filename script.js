const smMenuBtn = document.querySelector('.main-header__sm-scr-nav-btn')
const smMenu = document.querySelector('.main-header__sm-menu')

const smMenuLink1 = document.querySelector('.main-header__sm-menu-link--1')
const smMenuLink2 = document.querySelector('.main-header__sm-menu-link--2')
const smMenuLink3 = document.querySelector('.main-header__sm-menu-link--3')
const smMenuLink4 = document.querySelector('.main-header__sm-menu-link--4')

smMenuBtn.addEventListener('click', () => {
  if (smMenu.classList.contains('main-header__sm-menu--active')) {
    smMenu.classList.remove('main-header__sm-menu--active')
  } else {
    smMenu.classList.add('main-header__sm-menu--active')

    smMenuLink1.style.animation = 'smMenuLinkStartAnimation 1s .5s'
    smMenuLink1.style.animationFillMode = 'forwards';

    smMenuLink2.style.animation = 'smMenuLinkStartAnimation 1s .8s'
    smMenuLink2.style.animationFillMode = 'forwards';

    smMenuLink3.style.animation = 'smMenuLinkStartAnimation 1s 1.1s'
    smMenuLink3.style.animationFillMode = 'forwards';

    smMenuLink4.style.animation = 'smMenuLinkStartAnimation 1s 1.4s'
    smMenuLink4.style.animationFillMode = 'forwards';
  }
})
