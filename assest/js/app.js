const loader = document.getElementById("preloader");
window.addEventListener("load", () => {
    loader.style.display = "none";
});

const toogleBtn = document.querySelector(".toogle_btn");
const toogleBtnIcon = document.querySelector(".toogle_btn i");
const dropdownMenu = document.querySelector(".dropdown_menu");

toogleBtn.onclick = function () {
    dropdownMenu.classList.toggle("open");
    const isOpen = dropdownMenu.classList.contains("open");

    toogleBtnIcon.classList = isOpen
        ? "fa-solid fa-xmark"
        : "fa-solid fa-ellipsis";
};

document.onclick = function (e) {
    if (!toogleBtn.contains(e.target)) {
        dropdownMenu.classList.remove("open");
        const isOpen = dropdownMenu.classList.contains("open");

        toogleBtnIcon.classList = isOpen
        ? "fa-solid fa-xmark"
        : "fa-solid fa-ellipsis";
    }
};

function changeTechStack(type) {
    for (let index = 0; index < 2; index++) {
        document.querySelectorAll(".ts-img")[index].classList.remove("activeImg");
        document.querySelectorAll(".ts")[index].classList.remove("active");
    }
    if (type === "languages") {
        document.querySelectorAll(".ts-img")[0].classList.add("activeImg");
        document.querySelectorAll(".ts")[0].classList.add("active");
    }
    if (type === "tools") {
        document.querySelectorAll(".ts-img")[1].classList.add("activeImg");
        document.querySelectorAll(".ts")[1].classList.add("active");
    }
}

var typed = new Typed(".text", {
    strings: [
        "Software Developer",
        "Freelancer",
        "Frontend Developer",
        "ML Developer",
    ],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
});
