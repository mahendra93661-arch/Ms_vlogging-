// MS VLOGING

window.addEventListener("load", () => {
    console.log("Welcome To MS VLOGING");
});

const links = document.querySelectorAll("nav a");

links.forEach(link => {
    link.addEventListener("click", () => {
        links.forEach(l => l.classList.remove("active"));
        link.classList.add("active");
    });
});
