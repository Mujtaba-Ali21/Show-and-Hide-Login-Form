var x = document.getElementById("sec-2");
var y = document.getElementById("sec-1");
function showSignUp() {
  if (x.style.display = "none") {
    x.style.display = "block";
    y.style.display = "none"
  } else {
    x.style.display = "none";
  }
}

function showLogin() {
    
  if (y.style.display = "none") {
    y.style.display = "block";
    x.style.display = "none"
  } else {
    y.style.display = "block";
  }
}
