const navToggle = $("#navToggle");
const nav = $("#nav");

navToggle.on("click", function(event){
    event.preventDefault();

    nav.toggleClass("show");

});
// });


// Icons for mobile-menu

const burgerIcon = document.querySelector('.burger__icon')

burgerIcon.addEventListener('click', function(){
    const burgerIconActive = burgerIcon.classList.toggle('active')
})


// Tabs

const choiceTab = document.querySelectorAll('[data-tab]')
const choiceCat = document.querySelectorAll('[data-cat]')
const choiceAll = document.querySelector('[data-all]')
const setListener = (element, type, handler) => {
    if(!element){
        return
    }
    element.addEventListener(type, handler)
    return() => {
        element.addEventListener(type, handler)
    }
}


choiceTab.forEach(function(item){
    item.addEventListener('click', function(){
        
        const idTab = this.dataset.tab
        const idCat = document.querySelectorAll('#' + idTab);

        
        choiceCat.forEach(function(item){
            item.classList.add('hide')
        })

        idCat.forEach(function(item){
            item.classList.remove('hide')
        })
    })
})

const removeEvent = setListener(choiceAll, 'click', function(){
    choiceCat.forEach(function(item){
        item.classList.remove('hide')
    })
})

setListener(choiceAll, 'click', ()=>{
    removeEvent()
})

// if(choiceAll){
//     console.log('button seen')
// }else{
//     console.log('button not seen')
// }


// try{
//     checkchoiceAll.addEventListener('click', function(){
//         console.log('result');
//     });
// } catch(error){
//     console.log(error);
//     }