function initTabNav() {
  const tabMenu = document.querySelectorAll('.js-tabmenu li');
  const tabContent = document.querySelectorAll('.js-tabcontent section');

  if(tabMenu.length && tabContent.length) {
    tabContent[0].classList.add('ativo');

    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove('ativo');
      });
      tabContent[index].classList.add('ativo');
    }

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => {
        activeTab(index);
      });
    });
  }
}


function initAccordion() {
  const accordionList = document.querySelectorAll('.js-accordion dt');
  const activeClass = 'ativo';

  if(accordionList.length) {
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);
  

    function activeAccordion() {
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    }

    accordionList.forEach((item) => {
      item.addEventListener('click', activeAccordion);
    })
  }  
}

function initScrollSuave(){
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href)

    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  
  }

  linksInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection);
  })
}

function initAnimationScroll() {

  const sections = document.querySelectorAll('.js-scroll');

  if(sections.length) {

      const windowMetade = window.innerHeight * 0.6;

      function animaScroll() {
        sections.forEach((section) => {
          const sectionTop = section.getBoundingClientRect().top;
          const isSectionVisible = (sectionTop - windowMetade) < 0;    
          if(isSectionVisible) 
            section.classList.add('ativo');
          else 
            section.classList.remove('ativo');
        })
      }

      animaScroll()

      window.addEventListener('scroll', animaScroll);

  }
}

function initCountdown() {
  const countDownDate = new Date("Nov 26, 2021 00:00:00 GMT-0300").getTime();

  return setInterval(function() {
    
    const now = new Date().getTime(); 
    
    const distance = countDownDate - now;
        
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
    document.getElementById('days').innerHTML = days;
    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;  
    
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("countdown").innerHTML = "Começou!";
    }
  }, 1000);
}

function saveOnLocalStorage() { 

  let name = document.getElementById('name').value;
	let email = document.getElementById('email').value;

	let data = { name, email };	

  console.log(data);
  
  if (data.name !== "" && data.email !== "") {    
    let convertData = JSON.stringify(data);

    if (localStorage.cont) {
      localStorage.cont = Number(localStorage.cont) + 1;
    } else {
      localStorage.cont = 1;
    }

    localStorage.setItem("client: " + localStorage.cont, convertData);

    alert("Email cadastrado com sucesso!");
  }
}

initTabNav();
initAccordion();
initScrollSuave(); 
initAnimationScroll();
initCountdown();


