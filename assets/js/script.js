//Header
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu')
    })
}

const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(element => element.addEventListener('click', linkAction))

//skill anime
const skillsContent = document.querySelectorAll('.skills_content')
const skillsHeader = document.querySelectorAll('.skills_header')
const skillsPercentages = document.querySelectorAll('.skills_percentage')
function toggleSkills(){
    let itemClass = this.parentNode.className

    for (let i = 0; i < skillsContent.length; i++) {
        skillsPercentages.forEach((bar)=>{
            bar.style.animation = ''
        })
        skillsContent[i].className = 'skills_content skills_close';
    }
    if(itemClass === 'skills_content skills_close'){
        this.parentNode.className =  'skills_content skills_open'
        skillsPercentages.forEach((bar)=>{
            if(bar.parentNode.parentNode.parentNode.parentNode.className==='skills_content skills_open')
                bar.style.animation = 'percentage 3s ease-in-out forwards'
            else{
                bar.style.animation = ''
            }
        })
    }
}
skillsHeader.forEach((element)=>{
    element.addEventListener('click',toggleSkills);
})


//swipe
let swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
});


//mail
const send = document.querySelector('#send')

send.addEventListener('click',()=>{
    const fromName = document.querySelector('#contact_name').value
    const fromMail = document.querySelector('#contact_mail').value
    const fromMessage = document.querySelector('#contact_message').value
    console.log(fromMessage)
})
// Email.send({
//     Host : "smtp.yourisp.com",
//     Username : "username",
//     Password : "password",
//     To : 'them@website.com',
//     From : "you@isp.com",
//     Subject : "This is the subject",
//     Body : "And this is the body"
// }).then(
//   message => alert(message)
// );