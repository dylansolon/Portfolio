/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

    if(navToggle){
        navToggle.addEventListener('click', ()=>{
            navMenu.classList.add('show-menu');
        })
    }

    if(navClose) {
        navClose.addEventListener('click', ()=>{
            navMenu.classList.remove('show-menu');
        })
    }

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link');

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));


/*=============== ADD BLUR TO HEADER ===============*/
const blurHeader = () =>{
    const header = document.getElementById('header');
    this.scrollY >= 50 ? header.classList.add('blur-header')
                    : header.classList.remove('blur-header');
}
window.addEventListener('scroll', blurHeader);


/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
        contactMessage = document.getElementById('contact-message')

const sendEmail = (e) =>{
    e.preventDefault()
// ServiceID-templateID-#form-publikey
    emailjs.sendForm('service_9wsi1ud','template_z2fsus9','#contact-form',"PtdP-YugBWEYdvtj3")
    .then(()=>{
        //show sent message
        contactMessage.textContent = "Message sent Successfully ✅"

        setTimeout(()=>{
            contactMessage.textContent = ""
        },5000)
 
        contactForm.reset()
    }, ()=>{

        contactMessage.textContent ="Message not send (service error) ❌"

    })
}

contactForm.addEventListener('submit', sendEmail)



/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = ()  =>{
    const scrollUp = document.getElementById('scroll-up');
    //when the scroll is higher than 350 vh, add the show-scroll class to the a tag with the scrollup
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll',scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{

    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link')
        } else {
            sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin:'top',
    distance:'60px',
    duration:2500,
    delay:400,
})

sr.reveal(`.home__content, .contact__container, .footer__container`)
sr.reveal(`.home__image`,{origin:'bottom'})
sr.reveal(`.about__data, .skills__data`, {origin:'left'})
sr.reveal(`.about__image, .skills__content`, {origin:'right'})
sr.reveal(`.services__card, .projects__card`, {interval:100})

/*=============== ABOUT ===============*/

let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

/*=============== DOWNLOAD BUTTON ===============*/

document.getElementById("downloadButton").addEventListener("click", () => {
  let button = document.querySelector(".buttonDownload");
  button.classList.add("active");

  setTimeout(() => {
    button.classList.remove("active");
    let icon = document.querySelector(".buttonDownload i");
    icon.classList.replace("ri-download-cloud-2-line", "ri-checkbox-circle-line");
    document.querySelector(".button-text").innerHTML = "Completed";
  }, 1000);
});

function downloadCV() {

  setTimeout(function() {

      var link = document.createElement('a');
      link.href = 'pdf/CV_SOLON_DYLAN.pdf';
      link.download = 'pdf/CV_SOLON_DYLAN.pdf';

      document.body.appendChild(link);

      link.click();
      document.body.removeChild(link);
  }, 1000);
}