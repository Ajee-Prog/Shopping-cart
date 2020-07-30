/*jQuery(document).ready(function(){
    "use strict";
    $('#slider-carousel').caroufredsel({
        responsive: true,
        width: '100%',
        circular: true,
        scroll: {
            item: 1,
            duration: 500,
            pauseOnOver:true
        },
        auto: true,
        items: {
            visible: {
                min: 1,
                max: 1
            },
            height: "variable"
        },
        pagination: {
            container:".sliderpager",
            pageAnchorBuilder: false
        }
    });
});
   // var button = document.getElementById('button').addEventListener('click', function(){document.write('How u doing Today')})
    //var sub = document.getElementById('submit');
    let z = function(){
        //document.write('Hello')
        //sub.textContent('Hello');
        document.querySelector('#imain').style.backgroundColor = '#f4f4';
    }
    //document.getElementById('zz').textContent= 'welcome buz';
    
*/
//const carouselSlider;
const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

//Buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');
//Counter     16/07/2020
let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = 'translateX('+(-size * counter)+'px)';
//Button Listener
nextBtn.addEventListener('click', ()=>{
    //if(counter>= carouselImages.length) return;
    carouselSlide.style.transition= "transform 0.4s ease-in-out";
    counter++;
    carouselSlide.style.transform = 'translateX('+(-size*counter)+'px)';
});

prevBtn.addEventListener('click', ()=>{
    //if(counter<= 0) return;
    carouselSlide.style.transition= "transform 0.4s ease-in-out";
    counter--;
    carouselSlide.style.transform = 'translateX('+(-size*counter)+'px)';
});
;
/*let firstClone;
let lastClone;
let transitionend;*/

carouselSlide.addEventListener('transitionend', ()=>{
    if(carouselImages[counter].id==='lastClone'){
    carouselSlide.style.transition= "none";
    counter = carouselImages.length - 2;
    carouselSlide.style.transform = 'translateX('+(-size*counter)+'px)';
    }
    if(carouselImages[counter].id==='firstClone'){
        carouselSlide.style.transition= "none";
        counter = carouselImages.length - counter;
        carouselSlide.style.transform = 'translateX('+(-size*counter)+'px)';
    }
});
