// function show(param_div_id) {
//   var mainBio = document.getElementById("main-bio");
//   mainBio.style.opacity = 0; // Set opacity to 0 for fade-out effect

//   setTimeout(function () {
//     mainBio.innerHTML = document.getElementById(param_div_id).innerHTML;
//     mainBio.style.opacity = 1; // Set opacity to 1 for fade-in effect
//   }, 400); // Change content after 500 milliseconds (adjust as needed)
// }

// // Add active class to the current button (highlight it)
// var header = document.getElementById("dev-buttons");
// var btns = header.getElementsByClassName("button-name");
// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function () {
//     var current = document.getElementsByClassName("active");
//     current[0].className = current[0].className.replace(" active", "");
//     this.className += " active";
//   });
// }

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
