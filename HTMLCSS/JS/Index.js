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

  //First check if there is userida and password exists in the local storage
  //Validation of the userid and password
  //if succesful then redirect to home page else redirect to login page

  localStorage.setItem("email", "sanjoy.paul@herovired.com");
  localStorage.setItem("name", "Sanjoy");

  var url = new urlparams("aboutus.html");
  console.log("URL", url);
  url.searchParams.set("param1", "1");

  window.open(url, "_blank");
}
