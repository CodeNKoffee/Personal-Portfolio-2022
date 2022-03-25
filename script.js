//FUNCTIONS
//Navigation Bar & Hamburger
function openMenu(){
  document.body.classList += " menu--open"
}

function closeMenu(){
  document.body.classList.remove('menu--open')
}








//Portfolio Modal
//Desktop
const portfolioModal = document.getElementById("portfolio__modal");
const detailsAnchor = document.getElementById("details-anchor");

portfolioModal.style.display = "none";

detailsAnchor.addEventListener("mouseover", () => {
  portfolioModal.style.display = "block";
})

portfolioModal.addEventListener("mouseleave", () => {
  portfolioModal.style.display = "none";
})








//Header Image
document.getElementById("header__img").addEventListener("click", () => {
  document.getElementById("contact-section").scrollIntoView({behavior: 'smooth'});
})








//Change Important Links Colour depending on Background Colour
//FOR FIRST WHITE SECTION
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




//FOR SECOND WHITE SECTION
const linkFirst = document.querySelector('.div1');
const sectionsFirst = document.querySelector('.white-section-2');


const linkObserverCallbackFirst = (watchEntry, linkObserverFirst) => {
  if(!watchEntry[0].isIntersecting) {
    linkFirst.classList.remove('dark-theme');
    linkFirst.classList.add('imp__link--anchor')
  } else {
    linkFirst.classList.remove('imp__link--anchor');
    linkFirst.classList.add('dark-theme');
  }
}

const linkObserverOptionsFirst = {
  rootMargin: '-110px',
  threshold: 0
}


const linkObserverFirst = new IntersectionObserver(linkObserverCallbackFirst, linkObserverOptionsFirst);

linkObserverFirst.observe(sectionsFirst);


//Second Link
const linkSec = document.querySelector('.div2');
const sectionsSec = document.querySelector('.white-section-2');


const linkObserverCallbackSec = (watchEntry, linkObserverSec) => {
  if(!watchEntry[0].isIntersecting) {
    linkSec.classList.remove('dark-theme');
    linkSec.classList.add('imp__link--anchor')
  } else {
    linkSec.classList.remove('imp__link--anchor');
    linkSec.classList.add('dark-theme');
  }
}

const linkObserverOptionsSec = {
  rootMargin: '-110px',
  threshold: 0
}


const linkObserverSec = new IntersectionObserver(linkObserverCallbackSec, linkObserverOptionsSec);

linkObserverSec.observe(sectionsSec);


//Third Link
const linkThird = document.querySelector('.div3');
const sectionsThird = document.querySelector('.white-section-2');


const linkObserverCallbackThird = (watchEntry, linkObserverThird) => {
  if(!watchEntry[0].isIntersecting) {
    linkThird.classList.remove('dark-theme');
    linkThird.classList.add('imp__link--anchor')
  } else {
    linkThird.classList.remove('imp__link--anchor');
    linkThird.classList.add('dark-theme');
  }
}

const linkObserverOptionsThird = {
  rootMargin: '-110px',
  threshold: 0
}


const linkObserverThird = new IntersectionObserver(linkObserverCallbackThird, linkObserverOptionsThird);

linkObserverThird.observe(sectionsThird);


//Third Link
const linkFourth = document.querySelector('.div4');
const sectionsFourth = document.querySelector('.white-section-2');


const linkObserverCallbackFourth = (watchEntry, linkObserverFourth) => {
  if(!watchEntry[0].isIntersecting) {
    linkFourth.classList.remove('dark-theme');
    linkFourth.classList.add('imp__link--anchor')
  } else {
    linkFourth.classList.remove('imp__link--anchor');
    linkFourth.classList.add('dark-theme');
  }
}

const linkObserverOptionsFourth = {
  rootMargin: '-110px',
  threshold: 0
}


const linkObserverFourth = new IntersectionObserver(linkObserverCallbackFourth, linkObserverOptionsFourth);

linkObserverFourth.observe(sectionsFourth);








//Side Navigation Bar changing Colour According to Current Section
//HOME CIRCLE
const circleLinkOne = document.querySelector('.circle1');
const homeSection = document.getElementById('home-section');


const circleLinkObserverCallbackOne = (watchEntry, circleLinkObserverOne) => {
  if(watchEntry[0].isIntersecting) {
    circleLinkOne.classList.remove('side-nav-bar');
    circleLinkOne.classList.add('current-circle')
  } else {
    circleLinkOne.classList.remove('current-circle');
    circleLinkOne.classList.add('side-nav-bar');
  }
}

const circleLinkObserverOptionsOne = {
  rootMargin: '-110px',
  threshold: 0
}


const circleLinkObserverOne = new IntersectionObserver(circleLinkObserverCallbackOne, circleLinkObserverOptionsOne);

circleLinkObserverOne.observe(homeSection);


//ABOUT CIRCLE
const circleLinkTwo = document.querySelector('.circle2');
const aboutSection = document.getElementById('about-section');


const circleLinkObserverCallbackTwo = (watchEntry, circleLinkObserverTwo) => {
  if(watchEntry[0].isIntersecting) {
    circleLinkTwo.classList.remove('side-nav-bar');
    circleLinkTwo.classList.add('current-circle')
  } else {
    circleLinkTwo.classList.remove('current-circle');
    circleLinkTwo.classList.add('side-nav-bar');
  }
}

const circleLinkObserverOptionsTwo = {
  rootMargin: '-110px',
  threshold: 0
}


const circleLinkObserverTwo = new IntersectionObserver(circleLinkObserverCallbackTwo, circleLinkObserverOptionsTwo);

circleLinkObserverTwo.observe(aboutSection);


//PROJECTS CIRCLE
const circleLinkThree = document.querySelector('.circle3');
const projectsSection = document.getElementById('projects-section');


const circleLinkObserverCallbackThree = (watchEntry, circleLinkObserverThree) => {
  if(watchEntry[0].isIntersecting) {
    circleLinkThree.classList.remove('side-nav-bar');
    circleLinkThree.classList.add('current-circle')
  } else {
    circleLinkThree.classList.remove('current-circle');
    circleLinkThree.classList.add('side-nav-bar');
  }
}

const circleLinkObserverOptionsThree = {
  rootMargin: '-110px',
  threshold: 0
}


const circleLinkObserverThree = new IntersectionObserver(circleLinkObserverCallbackThree, circleLinkObserverOptionsThree);

circleLinkObserverThree.observe(projectsSection);


//CONTACT CIRCLE
const circleLinkFour = document.querySelector('.circle4');
const contactSection = document.getElementById('contact-section');


const circleLinkObserverCallbackFour = (watchEntry, circleLinkObserverFour) => {
  if(watchEntry[0].isIntersecting) {
    circleLinkFour.classList.remove('side-nav-bar');
    circleLinkFour.classList.add('current-circle')
  } else {
    circleLinkFour.classList.remove('current-circle');
    circleLinkFour.classList.add('side-nav-bar');
  }
}

const circleLinkObserverOptionsFour = {
  rootMargin: '-110px',
  threshold: 0
}


const circleLinkObserverFour = new IntersectionObserver(circleLinkObserverCallbackFour, circleLinkObserverOptionsFour);

circleLinkObserverFour.observe(contactSection);








//Random Quote Generator
const quotes = [
  {
    quote: '“Any fool can write code that a computer can understand. Good programmers write code that humans can understand.”',
    quoter: '- Martin Fowler'
  },

  {
    quote: '“First, solve the problem. Then, write the code.”',
    quoter: '- John Johnson'
  },

  {
    quote: '“Experience is the name everyone gives to their mistakes.”',
    quoter: '- Oscar Wilde'
  },

  {
    quote: '“In order to be irreplaceable, one must always be different”',
    quoter: '- Coco chanel'
  },

  {
    quote: '“Java is to JavaScript what car is to Carpet.”',
    quoter: '- Chris Heilmann'
  },

  {
    quote: '“Knowledge is power.”',
    quoter: '- Francis Bacon'
  },

  {
    quote: '“Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday’s code.”',
    quoter: '- Dan Salomon'
  },

  {
    quote: '“Perfection is achieved not when there is nothing more to add, but rather when there is nothing more to take away.”',
    quoter: 'Antoine de Saint-Exupery'
  },

  {
    quote: '“Ruby is rubbish! PHP is phpantastic!”',
    quoter: '- Nikita Popov'
  },

  {
    quote: 'Code is like humor. When you have to explain it, it’s bad.”',
    quoter: 'Cory House'
  },

  {
    quote: '“Fix the cause, not the symptom.”',
    quoter: '- Steve Maguire'
  },

  {
    quote: '“Optimism is an occupational hazard of programming: feedback is the treatment.',
    quoter: '- Kent Beck'
  },

  {
    quote: '“When to use iterative development? You should use iterative development only on projects that you want to succeed.”',
    quoter: '- Martin Fowler'
  },

  {
    quote: '"Simplicty is the soul of efficiency"',
    quoter: '- Austin Freeman'
  },

  {
    quote: '"Before software can be reusable, it first has to be usable."',
    quoter: '- Ralph Johnson'
  },

  {
    quote: '"Make it work, make it right, make it fast."',
    quoter: '- Kent Beck'
  }
]


//Quote Button
const quoteButton = document.getElementById("quotes__btn").addEventListener("click", () => {
  console.log(quotes[Math.floor(Math.random() * quotes.length)]);
})
