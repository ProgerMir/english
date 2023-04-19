$(function() {


let filter = $("[data-filter]");
filter.on("click", function(event){
    event.preventDefault();

    let cat = $(this).data('filter');
    

    if(cat == 'all') {
        $("[data-cat]").removeClass('hide');
    } else {
        $("[data-cat]").each(function(){

            let workCat = $(this).data('cat');
    
            if(workCat != cat){
                $(this).addClass('hide');
            } else $(this).removeClass('hide');
    
    
        });
    }

});





const navToggle = $("#navToggle");
const nav = $("#nav");

navToggle.on("click", function(event){
    event.preventDefault();

    nav.toggleClass("show");

});
});


// Icons for mobile-menu

const burgerIcon = document.querySelector('.burger__icon')

burgerIcon.addEventListener('click', function(){
    const burgerIconActive = burgerIcon.classList.toggle('active')
})

// const burgerIconCross = burgerIcon.addEventListener('click', function() {
//     const burgerIconActive = burgerIcon.classList.add('burger__icon--active')
//     burgerIcon.setAttribute('src', './images/cross.svg');
//     if(burgerIconActive){
//         burgerIcon.setAttribute('src', './images/cross.svg')
//     }else{
//         burgerIcon.setAttribute('src', './images/burger.svg')
//     }
// } 

// )

