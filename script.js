// ===== MS VLOGING V2 =====

// Loading Screen
window.addEventListener("load", function () {
  const loader = document.getElementById("loader");

  setTimeout(() => {
    if (loader) {
      loader.style.opacity = "0";
      loader.style.visibility = "hidden";
    }
  }, 1200);
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

// Gallery Animation
const images = document.querySelectorAll(".gallery img");

images.forEach(img => {
  img.addEventListener("mouseenter", () => {
    img.style.transform = "scale(1.08)";
  });

  img.addEventListener("mouseleave", () => {
    img.style.transform = "scale(1)";
  });
});

// Navbar Background
window.addEventListener("scroll", () => {

  const header = document.querySelector("header");

  if (window.scrollY > 50) {
    header.style.background = "rgba(0,0,0,.85)";
  } else {
    header.style.background = "rgba(0,0,0,.45)";
  }

});

console.log("MS VLOGING V2 Loaded Successfully 🚀");
// ===== Visitor Counter =====

let visitorCount = localStorage.getItem("visitorCount");

if (visitorCount === null) {
  visitorCount = 0;
}

visitorCount++;

localStorage.setItem("visitorCount", visitorCount);

const counter = document.getElementById("visitorCount");

if (counter) {
  counter.innerText = visitorCount;
}