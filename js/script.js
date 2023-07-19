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

  