const smMenuBtn = document.querySelector('.main-header__sm-scr-nav-btn')
const smMenu = document.querySelector('.main-header__sm-menu')
const smMenuCloseBtn = document.querySelector('.main-header__sm-menu-close')
const smMenuLinks = document.querySelectorAll('.main-header__sm-menu-link')

// Helper function to animate menu links
const animateMenuLinks = (show) => {
  const delays = show ? [0.5, 0.8, 1.1, 1.4] : [0, 0.3, 0.6, 0.9]
  const transform = show ? 'translateY(0)' : 'translateY(50px)'
  const opacity = show ? '1' : '0'
  
  smMenuLinks.forEach((link, index) => {
    link.style.transitionDelay = `${delays[index]}s`
    link.style.transform = transform
    link.style.opacity = opacity
  })
}

smMenuBtn.addEventListener('click', () => {
  smMenu.style.transitionDelay = '0s'
  smMenu.classList.add('main-header__sm-menu--active')
  animateMenuLinks(true)
})

smMenuLinks.forEach((ele) => {
  ele.addEventListener('click', () => {
    animateMenuLinks(false)
    smMenu.style.transitionDelay = '1.2s'
    smMenu.classList.remove('main-header__sm-menu--active')

    setTimeout(() => {
      document.getElementById(ele.name).scrollIntoView()
    }, 1300)
  })
})

smMenuCloseBtn.addEventListener('click', () => {
  animateMenuLinks(false)
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
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null
}

themeColorSelector.addEventListener('click', () => {
  themeColorSelectorInput.click()
})

const setDynamicColor = (color) => {
  const rgb = hexToRgb(color)
  if (rgb) {
    root.style.setProperty('--themeColor', `${rgb.r},${rgb.g},${rgb.b}`)
  }
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
