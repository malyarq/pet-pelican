(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)

    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }
  
  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })
})()

const zag = document.querySelector('.zag');
const delay = 5000;

zag.innerHTML = zag.textContent.replace(/\S/g, '<span>$&</span>');

zag.addEventListener('mouseover', function(event) {
  if (event.target.tagName != 'SPAN') return;
  event.target.classList.add('zaga');
  setTimeout(() => {
    event.target.classList.remove('zaga');
  }, delay);
})
