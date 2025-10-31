// Mobile menu elements
const smMenuBtn = document.querySelector('.main-header__sm-scr-nav-btn');
const smMenu = document.querySelector('.main-header__sm-menu');
const smMenuCloseBtn = document.querySelector('.main-header__sm-menu-close');
const smMenuLinks = document.querySelectorAll('.main-header__sm-menu-link');

/**
 * Animates menu links with staggered transitions
 * @param {NodeListOf<Element>} links - Menu link elements
 * @param {boolean} show - Whether to show (true) or hide (false) the links
 */
function animateMenuLinks(links, show) {
  const delays = [0.5, 0.8, 1.1, 1.4];
  const translateY = show ? '0' : '50px';
  const opacity = show ? '1' : '0';
  
  links.forEach((link, index) => {
    const delay = show ? delays[index] : delays[delays.length - 1 - index] - 0.5;
    link.style.transitionDelay = `${delay}s`;
    link.style.transform = `translateY(${translateY})`;
    link.style.opacity = opacity;
  });
}

/**
 * Opens the mobile menu
 */
function openMobileMenu() {
  if (!smMenu || !smMenuLinks) return;
  
  smMenu.style.transitionDelay = '0s';
  smMenu.classList.add('main-header__sm-menu--active');
  animateMenuLinks(smMenuLinks, true);
  
  // Update ARIA attribute
  if (smMenuBtn) {
    smMenuBtn.setAttribute('aria-expanded', 'true');
  }
}

/**
 * Closes the mobile menu
 * @param {Element|null} targetSection - Optional section to scroll to after closing
 */
function closeMobileMenu(targetSection = null) {
  if (!smMenu || !smMenuLinks) return;
  
  animateMenuLinks(smMenuLinks, false);
  smMenu.style.transitionDelay = '1.2s';
  smMenu.classList.remove('main-header__sm-menu--active');
  
  // Update ARIA attribute
  if (smMenuBtn) {
    smMenuBtn.setAttribute('aria-expanded', 'false');
  }
  
  if (targetSection) {
    setTimeout(() => {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }, 1300);
  }
}

// Event listeners for mobile menu
if (smMenuBtn) {
  smMenuBtn.addEventListener('click', openMobileMenu);
}

if (smMenuCloseBtn) {
  smMenuCloseBtn.addEventListener('click', () => closeMobileMenu());
}

if (smMenuLinks) {
  smMenuLinks.forEach((link) => {
    link.addEventListener('click', () => {
      const targetSection = document.getElementById(link.getAttribute('name'));
      closeMobileMenu(targetSection);
    });
  });
}





// Theme color selector elements
const themeColorSelector = document.querySelector('.themeClrSelector');
const themeColorSelectorInput = document.querySelector('.themeClrSelector__input');
const root = document.documentElement;

/**
 * Converts hex color to RGB object
 * @param {string} hex - Hexadecimal color code
 * @returns {Object|null} Object with r, g, b properties or null if invalid
 */
function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

/**
 * Triggers a click event on the color input when selector is clicked
 */
function triggerColorInput() {
  if (themeColorSelectorInput) {
    themeColorSelectorInput.click();
  }
}

/**
 * Sets the dynamic theme color
 * @param {string} color - Hexadecimal color code
 */
function setDynamicColor(color) {
  const rgb = hexToRgb(color);
  
  if (rgb) {
    root.style.setProperty('--themeColor', `${rgb.r},${rgb.g},${rgb.b}`);
  }
}

// Event listeners for theme color selector
if (themeColorSelector) {
  themeColorSelector.addEventListener('click', triggerColorInput);
}

if (themeColorSelectorInput) {
  themeColorSelectorInput.addEventListener('input', (e) => {
    setDynamicColor(e.target.value);
  });
}

// Logo container navigation
const headerLogoContainer = document.querySelector('.main-header__logo-container');

if (headerLogoContainer) {
  headerLogoContainer.addEventListener('click', () => {
    window.location.href = 'index.html';
  });
}
