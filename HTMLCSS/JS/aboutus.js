console.log(localStorage.getItem("email"));
console.log(localStorage.getItem("name"));
userName = document.getElementById("name");
document.getElementById("name").innerHTML = localStorage.getItem("name");
console.log("url", URLSearchParams.prototype.get);
const urlparams = new URLSearchParams(location.search);
console.log(urlparams.entries);
