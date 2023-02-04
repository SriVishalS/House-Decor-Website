var myVar;
function myFunction() {
  myVar = setTimeout(showPage, 2000);
}

function showPage() {
  document.querySelector(".loaderWrapper").style.display = "none";
}
