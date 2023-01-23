var image = [
  {
    src: "https://cdn.britannica.com/86/170586-050-AB7FEFAE/Taj-Mahal-Agra-India.jpg",
    alt: "Tajmahal",
  },
  {
    src: "https://cdn.britannica.com/20/189820-050-D650A54D/Red-Fort-Old-Delhi-India.jpg",
    alt: "redfort",
  },
];
imgColumn = document.getElementById("column");
imgRow = document.getElementById("row");
for (let i = 0; i < image.length; i++) {
  console.log(image[i].src);
  let newcolumn = document.createElement("div");
  newcolumn.classList.add("column");
  let htmlString = `<div class="card">
  <img
    src="${image[i].src}"
    height="300"
    width="300"
    style="border-radius: 50%; opacity: 0.8"
    alt="${image[i].alt}"
  />
  <p>${image[i].alt}</p>`;
  newcolumn.innerHTML = htmlString;
  imgRow.appendChild(newcolumn);
}
