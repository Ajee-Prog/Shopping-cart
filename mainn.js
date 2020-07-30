carouselSlide.addEventListener('transitionend', ()=>{
    //if(carouselImages[counter].id==='lastClone')
    {
    carouselSlide.style.transition= "none";
    counter = carouselImages.length - 2;
    carouselSlide.style.transform = 'translateX('+(-size*counter)+'px)';
    }
    if(carouselImages[counter].id==='firstClone'){
        carouselSlide.style.transition= "none";
        counter = carouselImages.length - counter;
        carouselSlide.style.transform = 'translateX('+(-size*counter)+'px)';
}
}
);