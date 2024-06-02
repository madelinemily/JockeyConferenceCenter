// slider
const images = document.querySelectorAll(".image");

images.forEach(image => {
    image.addEventListener("click", () => {
        removeClass();
        image.classList.add("active");
    });
});

function removeClass(){
    images.forEach(image => {
        image.classList.remove("active");
    });
};


window.addEventListener('scroll', expand);

function expand(){
    var expands = document.querySelectorAll('.expand');

    for(var i = 0; i < expands.length; i++){
        var height = window.innerHeight;
        var expandTop = expands[i].getBoundingClientRect().top;
        var expandPoint = 100;

        if(expandTop < height - expandPoint){
            expands[i].classList.add('active');
        }
        else{
            expands[i].classList.remove('active');
        }
    }
}




