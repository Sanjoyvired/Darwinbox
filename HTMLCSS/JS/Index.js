watchmore = document.getElementById("watchmore");
showcase = document.getElementById("showcase");
console.log("Running js");
console.log("Running 44444");
watchmore.onclick = function () {
  clickfunction();
};
function clickfunction() {
  console.log("clickfunction watchmore");

  document.getElementById("photo").innerHTML = "hero";
  watchmore.className = "btn btn-secondary";
  document.getElementById("photo").style.color = "black";
  localStorage.setItem("name", "Sanjoy");
  window.open("aboutus.html?param1=1", "_blank");
}

login = document.getElementById("loginbutton");
login.onclick = function () {
  loginfunction();
};
