const toggleBtn = document.querySelector('.toggle');
const mobileNav = document.querySelector('.mobileNav');


toggleBtn.addEventListener('click', ()=> {
  mobileNav.classList.toggle('show');
})