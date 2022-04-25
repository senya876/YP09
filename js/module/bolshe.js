function bolshe(){
    document.addEventListener('DOMContentLoaded', function() {
        var modalButtons = document.querySelectorAll('.add-sentence-btn'),
            modalbtn = document.querySelector('.add-sentence-btn'),
            el = document.querySelector('.nohidden'),
            ek = document.querySelector('.nothidden'),
            visible = document.querySelector('.visible');

        modalButtons.forEach(function(item){
            item.addEventListener('click', function(e) {
                e.preventDefault();
                el.classList.remove("hidden");
                ek.classList.remove("hidden");
                visible.classList.remove("visible-sm-block");
                modalbtn.classList.add("hidden");
            });
        });
    });
}  

export {bolshe}