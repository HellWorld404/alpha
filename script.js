burger = document.querySelector('.burger');
navbar = document.querySelector('.navbar');
navList = document.querySelector('.nav-list')
rightNav = document.querySelector('.right-nav');
navLinks = document.querySelectorAll('.nav-link');



burger.addEventListener('click', ()=>{
	rightNav.classList.toggle('v-class');
	navList.classList.toggle('v-class');
	navbar.classList.toggle('nav-h');
})


if(screen.width<1200){
	navLinks.forEach(link => {
    link.addEventListener('click', () => {
	rightNav.classList.add('v-class');
	navList.classList.add('v-class');
	navbar.classList.add('nav-h');
        
    })
})
}
