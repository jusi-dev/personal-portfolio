const hamburger = document.querySelector(".hamburger");
const mainnav = document.querySelector(".main-nav");
const navelem = document.querySelector(".nav-elem");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mainnav.classList.toggle("active");
})

document.querySelectorAll(".nav-elem").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    mainnav.classList.remove("active");
    navelem.classList.toggle("active");
}))