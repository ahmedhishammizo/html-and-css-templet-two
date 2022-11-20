var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    grabCursor: true,
    loop: true,
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    },
});
const number=document.querySelectorAll(".number")
const speed = 800;
number.forEach(element => {
    incNumber(element)
});
function incNumber(elem){
    let text =+ elem.innerText;
    const value = elem.getAttribute("data-target");
    const inc = Math.floor (value/speed);
    if(text<value){
        elem.innerText = inc + text;
        setTimeout(() =>{
            incNumber(elem)
        },20);
    }else{
        elem.innerText=value;
    }
}
// Get Element From Dom
const btns = document.querySelectorAll('.buttons button');
const imgs = document.querySelectorAll('.images img');
// Add a click event to all buttons
for(let i = 1; i < btns.length; i++){
btns[i].addEventListener('click' , filterImg);
}
// Set active buttons on click
function setActiveBtn(e){
    // Remove active class from all buttons
    btns.forEach(btn =>{
        btn.classList.remove('btn-clicked');
    });
    // Add active calss to clicked button
    e.target.classList.add('btn-clicked')
}
// Filter Images
function filterImg(e){
    // Run the active button function
    setActiveBtn(e);
    // Loop through all images
    imgs.forEach(img => {
        // Expand all images
        img.classList.remove('img-shrink');
        img.classList.add('img-expand');
        // Get data from data attributes
        // Get image type data
        const imgType = parseInt(img.dataset.img);
        // Get button type data
        const btnType = parseInt(e.target.dataset.btn);
        /*
        If the image type and the type of the 
        clicked buttons are Not the same
        */
        if(imgType !== btnType){
            // Hide the image
            img.classList.remove('img-expand');
            img.classList.add('img-shrink');
        }
    });
}
// Set click event for the 'All' button
btns[0].addEventListener('click', (e) => {
    // Run the active button functhion
    setActiveBtn(e);
    // Loop through all images
    imgs.forEach(img =>{
        // Expand all images
        img.classList.remove('img-shrink');
        img.classList.add('img-expanded');
    });
});