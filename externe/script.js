const sidebar = document.getElementById("sidebar");
const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");
const overlay = document.getElementById("overlay");

function openSidebar() {
  sidebar.style.left = "0";
  overlay.style.display = "block";
}

function closeSidebar() {
  // Récupère la largeur réelle de la sidebar pour la refermer correctement
  const width = sidebar.offsetWidth;
  sidebar.style.left = "-" + width + "px";
  overlay.style.display = "none";
}

openBtn.onclick = openSidebar;
closeBtn.onclick = closeSidebar;
overlay.onclick = closeSidebar;
