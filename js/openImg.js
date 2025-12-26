
function openZoom() {
  document.getElementById("image-zoom").style.display = "block";
  let image = document.querySelector(".product-detail-image img");
  document.getElementById("zoom").src = image.src;
}

function closeZoom() {
  document.getElementById("image-zoom").style.display = "none";
}