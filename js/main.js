jQuery(document).ready(function(){
    "use strict";
    $('#slider-carousel').caroufredsel.js({
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
    

