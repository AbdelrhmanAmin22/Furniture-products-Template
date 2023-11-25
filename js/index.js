// scroll
let myScroll = document.getElementById('scroll');

window.addEventListener("scroll", function() {
    if (window.scrollY > 250) {
        myScroll.style.display= 'flex';
    }
    else {
        myScroll.style.display= 'none';
    }
});
myScroll.addEventListener('click', function(){
    window.scrollTo( {
        top: 0,
        behavior : "smooth"
    }
    );
});

// mobile menu
let mobileView = document.getElementById('mobile-view');
let mobileBtn = document.getElementById('mobile-btn');
let closeBtn = document.getElementById('close-btn');

// hide-menu

mobileBtn.addEventListener('click', function(){
    mobileView.classList.toggle('hide-menu');
});
closeBtn.addEventListener('click', function(){
    mobileView.classList.add('hide-menu');
});

//active links 

let link1 = document.getElementById('link1');
let link2 = document.getElementById('link2');
let link3 = document.getElementById('link3');
let link4 = document.getElementById('link4');
let link5 = document.getElementById('link5');
link1.classList.add('active-link');

link1.addEventListener('click', function(){
    link1.classList.add('active-link');

    link2.classList.remove('active-link');
    link3.classList.remove('active-link');
    link4.classList.remove('active-link');
    link5.classList.remove('active-link');
});
link2.addEventListener('click', function(){
    link2.classList.add('active-link');

    link1.classList.remove('active-link');
    link3.classList.remove('active-link');
    link4.classList.remove('active-link');
    link5.classList.remove('active-link');
});
link3.addEventListener('click', function(){
    link3.classList.add('active-link');

    link1.classList.remove('active-link');
    link2.classList.remove('active-link');
    link4.classList.remove('active-link');
    link5.classList.remove('active-link');
});
link4.addEventListener('click', function(){
    link4.classList.add('active-link');

    link1.classList.remove('active-link');
    link2.classList.remove('active-link');
    link3.classList.remove('active-link');
    link5.classList.remove('active-link');
});
link5.addEventListener('click', function(){
    link5.classList.add('active-link');

    link1.classList.remove('active-link');
    link2.classList.remove('active-link');
    link3.classList.remove('active-link');
    link4.classList.remove('active-link');
});
let linkm1 = document.getElementById('linkm1');
let linkm2 = document.getElementById('linkm2');
let linkm3 = document.getElementById('linkm3');
let linkm4 = document.getElementById('linkm4');
let linkm5 = document.getElementById('linkm5');
linkm1.classList.add('active-link');

linkm1.addEventListener('click', function(){
    linkm1.classList.add('active-link');

    linkm2.classList.remove('active-link');
    linkm3.classList.remove('active-link');
    linkm4.classList.remove('active-link');
    linkm5.classList.remove('active-link');
});
linkm2.addEventListener('click', function(){
    linkm2.classList.add('active-link');

    linkm1.classList.remove('active-link');
    linkm3.classList.remove('active-link');
    linkm4.classList.remove('active-link');
    linkm5.classList.remove('active-link');
});
linkm3.addEventListener('click', function(){
    linkm3.classList.add('active-link');

    linkm1.classList.remove('active-link');
    linkm2.classList.remove('active-link');
    linkm4.classList.remove('active-link');
    linkm5.classList.remove('active-link');
});
linkm4.addEventListener('click', function(){
    linkm4.classList.add('active-link');

    linkm1.classList.remove('active-link');
    linkm2.classList.remove('active-link');
    linkm3.classList.remove('active-link');
    linkm5.classList.remove('active-link');
});
linkm5.addEventListener('click', function(){
    linkm5.classList.add('active-link');

    linkm1.classList.remove('active-link');
    linkm2.classList.remove('active-link');
    linkm3.classList.remove('active-link');
    linkm4.classList.remove('active-link');
});
// links mobile 
// header  
let haeder = document.getElementById('header'); 

window.addEventListener('scroll', function(){

    if(window.scrollY > 100){
        header.classList.add('fixedHeader');
    }
    else {
        header.classList.remove('fixedHeader');
    }
})