//FUNCTIONS
//Navigation Bar & Hamburger
function openMenu(){
  document.body.classList += " menu--open"
}

function closeMenu(){
  document.body.classList.remove('menu--open')
}

//Change Important Links Colour depending on Background Colour
const link = document.querySelector('.imp__link--anchor');
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








// card section

const cards = document.querySelectorAll('.card');

// card callback function
const cardObserverCallback = (cardsToWatch, cardObserver) => {
  cardsToWatch.forEach(cardToWatch => {
    if(cardToWatch.isIntersecting) {
      cardToWatch.target.classList.add('fade');
      cardObserver.unobserve(cardToWatch.target);
    }
  })
}

//card options
const cardObserverOptions = {
  threshold: .5
}

//card observer

const cardObserver = new IntersectionObserver(cardObserverCallback, cardObserverOptions);

//card observer on cards
cards.forEach(card => {
  cardObserver.observe(card);
})













//Progress Bar
function updateList() {
	const titles = [...document.querySelectorAll('section, i')].sort((a, b) => {
		return Math.abs(a.getBoundingClientRect().top) - Math.abs(b.getBoundingClientRect().top);
	});

	document.querySelectorAll(".selected-circle").forEach(c => c.classList.remove("selected-circle"));
	
	document.querySelectorAll(".nav-dot")[[...document.querySelectorAll('section, i')].indexOf(titles[0])].classList.add("selected-circle");
}

updateList();
window.addEventListener('scroll', () => {
    updateList();
})

