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
 
    closeButtons.forEach(function(item){
        item.addEventListener('click', function() {
            el.style.display='none';
        });
    }); 


    // overlay.addEventListener('click', function() {
        
    // });
}); 














