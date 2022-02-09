//FUNCTIONS
//Navigation Bar & Hamburger
function openMenu(){
  document.body.classList += " menu--open"
}

function closeMenu(){
  document.body.classList.remove('menu--open')
}

//Change Important Links Colour depending on Background Colour
//First Link
const link = document.querySelector('.div1');
const sections = document.querySelector('.white-sections');


const linkObserverCallback = (watchEntry, linkObserver) => {
  if(!watchEntry[0].isIntersecting) {
    link.classList.remove('dark-theme');
    link.classList.add('imp__link--anchor')
  } else {
    link.classList.remove('imp__link--anchor');
    link.classList.add('dark-theme');
  }
}

const linkObserverOptions = {
  rootMargin: '-110px',
  threshold: 0
}


const linkObserver = new IntersectionObserver(linkObserverCallback, linkObserverOptions);

linkObserver.observe(sections);


//Second Link
const secLink = document.querySelector('.div2');
const secSections = document.querySelector('.white-sections');


const secLinkObserverCallback = (watchEntry, secLinkObserver) => {
  if(!watchEntry[0].isIntersecting) {
    secLink.classList.remove('dark-theme');
    secLink.classList.add('imp__link--anchor')
  } else {
    secLink.classList.remove('imp__link--anchor');
    secLink.classList.add('dark-theme');
  }
}

const secLinkObserverOptions = {
  rootMargin: '-110px',
  threshold: 0
}


const secLinkObserver = new IntersectionObserver(secLinkObserverCallback, secLinkObserverOptions);

secLinkObserver.observe(secSections);


//Third Link
const thirdLink = document.querySelector('.div3');
const thirdSections = document.querySelector('.white-sections');


const thirdLinkObserverCallback = (watchEntry, thirdLinkObserver) => {
  if(!watchEntry[0].isIntersecting) {
    thirdLink.classList.remove('dark-theme');
    thirdLink.classList.add('imp__link--anchor')
  } else {
    thirdLink.classList.remove('imp__link--anchor');
    thirdLink.classList.add('dark-theme');
  }
}

const thirdLinkObserverOptions = {
  rootMargin: '-110px',
  threshold: 0
}


const thirdLinkObserver = new IntersectionObserver(thirdLinkObserverCallback, thirdLinkObserverOptions);

thirdLinkObserver.observe(thirdSections);


//Fourth Link
const fourthLink = document.querySelector('.div4');
const fourthSections = document.querySelector('.white-sections');


const fourthLinkObserverCallback = (watchEntry, fourthLinkObserver) => {
  if(!watchEntry[0].isIntersecting) {
    fourthLink.classList.remove('dark-theme');
    fourthLink.classList.add('imp__link--anchor')
  } else {
    fourthLink.classList.remove('imp__link--anchor');
    fourthLink.classList.add('dark-theme');
  }
}

const fourthLinkObserverOptions = {
  rootMargin: '-110px',
  threshold: 0
}


const fourthLinkObserver = new IntersectionObserver(fourthLinkObserverCallback, fourthLinkObserverOptions);

fourthLinkObserver.observe(fourthSections);


