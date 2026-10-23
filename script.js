const boot = document.getElementById("boot-screen");
window.addEventListener("load", () => {
  setTimeout(() => boot.classList.add("hide"), 2100);
});

const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".tab-panel");
tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    panels.forEach(p => p.classList.add("hidden"));
    tab.classList.add("active");
    document.getElementById(tab.dataset.tab).classList.remove("hidden");
  });
});

const gallery = [
  ["./assets/group-1.jpg", "SOCC // BUILDING THE COMMUNITY"],
  ["./assets/group-2.jpg", "IET // STUDENTS & ORGANIZERS"],
  ["./assets/group-3.jpg", "SIH 2026 // ORGANIZING TEAM"],
  ["./assets/group-4.jpg", "IET // COMMUNITY IN ACTION"]
];
const galleryImage = document.getElementById("gallery-image");
const galleryCaption = document.getElementById("gallery-caption");
const galleryButtons = document.querySelectorAll(".gallery-controls button");

function showImage(index){
  galleryImage.src = gallery[index][0];
  galleryCaption.textContent = gallery[index][1];
  galleryButtons.forEach((b,i)=>b.classList.toggle("active", i===index));
}
galleryButtons.forEach(btn => btn.addEventListener("click", () => showImage(Number(btn.dataset.index))));
showImage(0);

const posterToggle = document.getElementById("toggle-poster-btn");
const posterContainer = document.getElementById("poster-container");
if (posterToggle && posterContainer) {
  posterToggle.addEventListener("click", () => {
    const isHidden = posterContainer.classList.toggle("hidden");
    posterToggle.textContent = isHidden ? "[ VIEW TIMELINE POSTER ]" : "[ HIDE TIMELINE POSTER ]";
  });

  document.querySelectorAll('a[href="#poster-container"]').forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      posterContainer.classList.remove("hidden");
      posterToggle.textContent = "[ HIDE TIMELINE POSTER ]";
      posterContainer.scrollIntoView({ behavior: "smooth", block: "nearest" });
    });
  });
}
const catalystToggle = document.getElementById("toggle-catalyst-doc-btn");
const catalystDoc = document.getElementById("catalyst-doc-container");
if (catalystToggle && catalystDoc) {
  catalystToggle.addEventListener("click", () => {
    const isHidden = catalystDoc.classList.toggle("hidden");
    catalystToggle.textContent = isHidden ? "[ VIEW OFFICIAL CIRCULAR ]" : "[ HIDE OFFICIAL CIRCULAR ]";
  });
}
