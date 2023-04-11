var swiper = new Swiper(".bg-slider", {
  loop: true,
  spaceBetween: 0,
  slidesPerView: 1,
  thumbs: {
    swiper: swiper,
  },
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});


// /*=============== SHOW MENU ===============*/
// const navMenu = document.getElementById('nav-menu'),
//       navToggle = document.getElementById('nav-toggle'),
//       navClose = document.getElementById('nav-close')

// /*===== MENU SHOW =====*/
// /* Validate if constant exists */
// if(navToggle){
//     navToggle.addEventListener('click', () =>{
//         navMenu.classList.add('show-menu')
//     })
// }

// /*===== MENU HIDDEN =====*/
// /* Validate if constant exists */
// if(navClose){
//     navClose.addEventListener('click', () =>{
//         navMenu.classList.remove('show-menu')
//     })
// }

// /*=============== REMOVE MENU MOBILE ===============*/
// const navLink = document.querySelectorAll('.nav__link')

// const linkAction = () =>{
//     const navMenu = document.getElementById('nav-menu')
//     // When we click on each nav__link, we remove the show-menu class
//     navMenu.classList.remove('show-menu')
// }
// navLink.forEach(n => n.addEventListener('click', linkAction))

// /*=============== CHANGE BACKGROUND HEADER ===============*/
// const scrollHeader = () =>{
//     const header = document.getElementById('header')
//     // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
//     this.scrollY >= 0 ? header.classList.add('scroll-header') 
//                        : header.classList.remove('scroll-header')
// }
// window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL UP ====================*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 200) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)




/*===================== DISABLE RIGHT CLICK =================*/
      // document.addEventListener('contextmenu', event=> event.preventDefault()); 
      // document.onkeydown = function(e) { 
      // if(event.keyCode == 123) { 
      // return false; 
      // } 
      // if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)){ 
      // return false; 
      // } 
      // if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)){ 
      // return false; 
      // } 
      // if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)){ 
      // return false; 
      // } 
      // }


/*========== CUSTOMIZE SELECT ==========*/
// const wrapper = document.querySelector(".wrapper"),
//   selectBtn = wrapper.querySelector(".select-btn"),
//   options = wrapper.querySelector(".options");

// let categories = [
//   "Flora & Fauna",
//   "History & Cuture",
//   "NEUST Memorabilla & Archive"
// ];

// function addCategory(selectedCategory) {
//   options.innerHTML = "";
//   categories.forEach(category => {
//     let isSelected = category == selectedCategory ? "selected" : "";
//     let li = `<li onclick="updateName(this)" class="${isSelected}">${category}</li>`;
//     options.insertAdjacentHTML("beforeend", li);
//   });
// }
// addCategory();

// function updateName(selectedLi) {
//   addCategory(selectedLi.innerText);
//   wrapper.classList.remove("active");
//   selectBtn.firstElementChild.innerText = selectedLi.innerText;
// }

// selectBtn.addEventListener("click", () => wrapper.classList.toggle("active"));

//DASHBOARD SIDEBAR
const body = document.querySelector("body"),
      // modeToggle = body.querySelector(".mode-toggle");
      sidebar = body.querySelector("nav");
      sidebarToggle = body.querySelector(".sidebar-toggle");

// let getMode = localStorage.getItem("mode");
// if(getMode && getMode ==="dark"){
//     body.classList.toggle("dark");
// }

// let getStatus = localStorage.getItem("status");
// if(getStatus && getStatus ==="close"){
//     sidebar.classList.toggle("close");
// }

// modeToggle.addEventListener("click", () =>{
//     body.classList.toggle("dark");
//     if(body.classList.contains("dark")){
//         localStorage.setItem("mode", "dark");
//     }else{
//         localStorage.setItem("mode", "light");
//     }
// });

sidebarToggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
    if(sidebar.classList.contains("close")){
        localStorage.setItem("status", "close");
    }else{
        localStorage.setItem("status", "open");
    }
})