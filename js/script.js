const accordionHeading = document.querySelectorAll('.acc__heading');
const accordionContent = document.querySelectorAll('.acc__content');

accordionHeading.forEach((item)=>{
    item.addEventListener('click',(e)=>{
        console.log( e.target.innerText);
        e.target.classList.toggle('header-fw-bold');
        e.target.classList.toggle('active-arrow');
        e.target.nextElementSibling.classList.toggle('active');
     
    });
});