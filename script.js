const smMenuBtn = document.querySelector('.main-header__sm-scr-nav-btn')
const smMenu = document.querySelector('.main-header__sm-menu')
const smMenuCloseBtn = document.querySelector('.main-header__sm-menu-close')

const smMenuLinks = document.querySelectorAll('.main-header__sm-menu-link')
const smMenuLink1 = smMenuLinks[0]
const smMenuLink2 = smMenuLinks[1]
const smMenuLink3 = smMenuLinks[2]
const smMenuLink4 = smMenuLinks[3]

const DELAY = .3; // delay between links animation (.3s)

smMenuBtn.addEventListener('click', () => {
  smMenu.style.transitionDelay = '0s'
  smMenu.classList.add('main-header__sm-menu--active')

  for(let i = 0;i < smMenuLinks.length;i++){
    let link = smMenuLinks[i]
    link.style.transitionDelay = `${.5 + (i * DELAY)}s`
    link.style.transform = 'translateY(0)'
    link.style.opacity = '1'
  }
})

smMenuLinks.forEach((link) => {
  link.addEventListener('click', () => {
    for(let i = 0;i < smMenuLinks.length;i++){
      let link = smMenuLinks[i]
      link.style.transitionDelay = `${(smMenuLinks.length -1 -i) * DELAY}s`
      link.style.transform = 'translateY(50px)'
      link.style.opacity = '0'
    }
    smMenu.style.transitionDelay = '1.2s'
    smMenu.classList.remove('main-header__sm-menu--active')

    setTimeout(() => {
      document.getElementById(link.name).scrollIntoView()
    }, 1300)
  })
})

smMenuCloseBtn.addEventListener('click', () => {
  for(let i = 0;i < smMenuLinks.length;i++){
    let link = smMenuLinks[i]
    link.style.transitionDelay = `${(smMenuLinks.length -1 -i) * DELAY}s`
    link.style.transform = 'translateY(50px)'
    link.style.opacity = '0'
  }
  smMenu.style.transitionDelay = '1.2s'
  smMenu.classList.remove('main-header__sm-menu--active')
})

// ---
const themeColorSelector = document.querySelector('.themeClrSelector')
const themeColorSelectorInput = document.querySelector(
  '.themeClrSelector__input'
)
const root = document.documentElement;

const hexToRgb = (hex) => {
  let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null
}

const eventFire = (el, etype) => {
  if (el.fireEvent) {
    el.fireEvent('on' + etype)
  } else {
    let evObj = document.createEvent('Events')
    evObj.initEvent(etype, true, false)
    el.dispatchEvent(evObj)
  }
}

themeColorSelector.addEventListener('click', () => {
  eventFire(themeColorSelectorInput, 'input')
})

const setDynamicColor = (color) => {

  const { r, g, b } = hexToRgb(`${color}`)
  
  root.style.setProperty('--themeColor', `${r},${g},${b}`);
  //localStorage.setItem('color', color)
}

themeColorSelectorInput.addEventListener('input', (e) => {
  setDynamicColor(e.target.value)
})

// if (localStorage.getItem('color')) {
//   let userSelectedColor = localStorage.getItem('color')
//   themeColorSelectorInput.value = userSelectedColor
//   setDynamicColor(userSelectedColor)
// }

// ---
const headerLogoConatiner = document.querySelector('.main-header__logo-container')

headerLogoConatiner.addEventListener('click', () => {
  location.href = 'index.html'
})
