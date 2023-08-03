//---------------- This is for Off-Canvas Menu------------------------ 
const hamburgerMenuBtn = document.querySelector("#hamburger-menu");
const accordion = document.querySelector("#main-accordion");
const overlay = document.querySelector(".overlay");
const offCanvasCloseArrow = document.querySelector("#backArrow");

hamburgerMenuBtn.addEventListener("click", function () {
    accordion.classList.toggle("open");
    overlay.classList.toggle("open");
});
overlay.addEventListener("click", function() {
    accordion.classList.remove("open");
    overlay.classList.remove("open");
  });
  offCanvasCloseArrow.addEventListener("click", function() {
    accordion.classList.remove("open");
    overlay.classList.remove("open");
  });


// -----------------This is for accordion toggeling-----------------------
document.addEventListener("DOMContentLoaded", function () {
    var accordionHeaders = document.querySelectorAll(".accordion-header");

    accordionHeaders.forEach(function (header) {
        header.addEventListener("click", function () {
            var accordionItem = this.parentElement;
            var accordionContent = accordionItem.querySelector(".accordion-content");
            accordionContent.style.display =
                accordionContent.style.display === "block" ? "none" : "block";
        });
    });
});







//------------------------This is for Section-7 Accordion---------------------
const accordion2 = document.getElementsByClassName('contentBx');
for (i = 0; i < accordion2.length; i++) {
    accordion2[i].addEventListener('click', function () {
        this.classList.toggle('active')
    });
}

// --------------------------Filter Price Range-----------------------
var lowerSlider = document.querySelector('#lower');
var  upperSlider = document.querySelector('#upper');

document.querySelector('#two').value=upperSlider.value;
document.querySelector('#one').value=lowerSlider.value;

var  lowerVal = parseInt(lowerSlider.value);
var upperVal = parseInt(upperSlider.value);

upperSlider.oninput = function () {
    lowerVal = parseInt(lowerSlider.value);
    upperVal = parseInt(upperSlider.value);

    if (upperVal < lowerVal + 4) {
        lowerSlider.value = upperVal - 4;
        if (lowerVal == lowerSlider.min) {
        upperSlider.value = 4;
        }
    }
    document.querySelector('#two').value=this.value
};

lowerSlider.oninput = function () {
    lowerVal = parseInt(lowerSlider.value);
    upperVal = parseInt(upperSlider.value);
    if (lowerVal > upperVal - 4) {
        upperSlider.value = lowerVal + 4;
        if (upperVal == upperSlider.max) {
            lowerSlider.value = parseInt(upperSlider.max) - 4;
        }
    }
    document.querySelector('#one').value=this.value
}; 
// --------------------------Filter Price Range----------------------- 



// -----------------This is for Sub Category toggeling Start-----------------------
const accordion3 = document.querySelectorAll(".hrline");
for (i = 0; i < accordion3.length; i++) {
    accordion3[i].addEventListener('click', function () {
        this.classList.toggle('active2')
    });
}
// -----------------This is for Sub Category toggeling End-----------------------