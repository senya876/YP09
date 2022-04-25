function modal(){
    document.addEventListener('DOMContentLoaded', function() {
        var modalButtons = document.querySelectorAll('.call-btn--openmodal'),
            closeButtons = document.querySelectorAll('.popup-close'),
            el = document.querySelector('.popup-call');
    
        modalButtons.forEach(function(item){
            item.addEventListener('click', function(e) {
                e.preventDefault();
                el.style.display='block';
            }); 
        }); 
    
        closeButtons.forEach(function(item){
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

    document.addEventListener('DOMContentLoaded', function()  {
        var modalButtons = document.querySelectorAll('.sentence-btn'),
            closeButtons = document.querySelectorAll('.popup-close'),
            el = document.querySelector('.popup-discount');
    
        modalButtons.forEach(function(item){
            item.addEventListener('click', function(e) {
                e.preventDefault();
                el.style.display='block';   
            }); 
        }); 
    
        closeButtons.forEach(function(item){
            item.addEventListener('click', function() {
                el.style.display='none';
            });
        }); 

        el.addEventListener('click',(e)=>{
            if(e.target.classList.contains('popup-discount') || e.target.classList.contains('popup-close')){
                el.style.display='none';
            }
        })
    }); 

    document.addEventListener('DOMContentLoaded', function()  {
        var modalButtons = document.querySelectorAll('.check-btn'),
            closeButtons = document.querySelectorAll('.popup-close'),
            el = document.querySelector('.popup-discount');
    
        modalButtons.forEach(function(item){
            item.addEventListener('click', function(e) {
                e.preventDefault();
                el.style.display='block';   
            }); 
        }); 
    
        closeButtons.forEach(function(item){
            item.addEventListener('click', function() {
                el.style.display='none';
            });
        }); 

        el.addEventListener('click',(e)=>{
            if(e.target.classList.contains('popup-discount') || e.target.classList.contains('popup-close')){
                el.style.display='none';
            }
        })
    }); 
    document.addEventListener('DOMContentLoaded', function()  {
        var modalButtons = document.querySelectorAll('.consultation-btn'),
            closeButtons = document.querySelectorAll('.popup-close'),
            el = document.querySelector('.popup-consultation');
    
        modalButtons.forEach(function(item){
            item.addEventListener('click', function(e) {
                e.preventDefault();
                el.style.display='block';   
            }); 
        }); 
    
        closeButtons.forEach(function(item){
            item.addEventListener('click', function() {
                el.style.display='none';
            });
        }); 

        el.addEventListener('click',(e)=>{
            if(e.target.classList.contains('popup-consultation') || e.target.classList.contains('popup-close')){
                el.style.display='none';
            }
        })
    }); 
}    

export {modal}












