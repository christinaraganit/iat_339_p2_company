
var element = document.getElementById("buttons");
element.classList.add("show-button");

var btna = document.getElementById("btn-michael");
var btnb = document.getElementById("btn-christina");
var michael = document.getElementById("michael-bio");
var christina = document.getElementById("christina-bio");

btnb.addEventListener("click", () => {
  michael.classList.add("hide");
  christina.classList.remove("hide");
});

btna.addEventListener("click", () => {
  christina.classList.add("hide");
  michael.classList.remove("hide");
});


    // Add active class to the current button (highlight it)
    var header = document.getElementById("buttons");
    var btns = header.getElementsByClassName("button-name");
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
      });
    }