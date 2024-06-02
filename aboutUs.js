const images = document.querySelectorAll(".image");

images.forEach(image => {
    image.addEventListener("click", () => {
        removeActive();
        image.classList.add("active");
    });
});

function removeActive(){
    images.forEach(image => {
        image.classList.remove("active");
    });
};

const slideText = document.querySelector(".slide-text").children;
    const textLength = slideText.length;
    let idx = 0;

    function changeText(){
        for(let i = 0; i < textLength; i++){
            slideText[i].classList.remove("slide-text-words");
        }
        slideText[idx].classList.add("slide-text-words");
        if(idx == textLength-1){
            idx = 0;
        }
        else{
            idx++;
        }

        setTimeout(changeText, 3000);
    }

    window.onload = changeText

