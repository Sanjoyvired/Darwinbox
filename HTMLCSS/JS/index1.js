watchmore = document.getElementById("watchmore");
photo = document.getElementById("photo");
watchmore.onclick = function () {
  onclickFunction();
};
function onclickFunction() {
  console.log("In the function");
  photo.InnerHtml = "hero";
  watchmore.className = "btn btn-secondary";
  photo.style.color = "black";
}
