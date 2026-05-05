const sidebar = document.getElementById("sidebar");
const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");
const overlay = document.getElementById("overlay");

openBtn.onclick = () => {
  sidebar.style.left = "0";
  overlay.style.display = "block";
};

closeBtn.onclick = () => {
  sidebar.style.left = "-250px";
  overlay.style.display = "none";
};

overlay.onclick = () => {
  sidebar.style.left = "-250px";
  overlay.style.display = "none";
};