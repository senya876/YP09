document.addEventListener('DOMContentLoaded', function() {
    var modalButtons = document.querySelectorAll('.call-btn--openmodal'),
        overlay = document.querySelector('.modal-overlay'),
        closeButtons = document.querySelectorAll('.popup-close'),
        el = document.querySelector('.popup-call');
 
    modalButtons.forEach(function(item){
        item.addEventListener('click', function(e) {

            e.preventDefault();

            el.style.display='block';
            overlay.classList.add('active');
       }); 
    }); 
 
    let a = closeButtons.forEach(function(item){
        item.addEventListener('click', function() {
            el.style.display='none';
        });
    }); 

    el.addEventListener('click',(e)=>{
        if(e.target.classList.contains('popup-call') || e.target.classList.contains('popup-close')){
            el.style.display='none';
        }
    })
}); 














