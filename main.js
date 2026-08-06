const toggleTheme = document.querySelector("#theme-toggle");
const themeIcon = document.querySelector("#themeIcon");
const menuToggle = document.querySelector("[data-menu-toggle]");
const html = document.documentElement;

function applyTheme(theme) {
    if (theme === "dark") {
        html.classList.add("dark");
        themeIcon.innerHTML = `<img src="./assets/img/header/light.svg" alt="Sun" class="w-6 h-6 object-contain" />`
    } else {
        html.classList.remove("dark");
        themeIcon.innerHTML = `<img src="./assets/img/header/dark.svg" alt="Moon" class="w-6 h-6 object-contain" />`
    }
}

toggleTheme.addEventListener("click", () => {  
    const newTheme = html.classList.contains("dark") ? "light" : "dark";
    localStorage.setItem("theme", newTheme);
    applyTheme(newTheme);
})

menuToggle.addEventListener("click", () => {
    const menu = document.querySelector("[data-mobile-menu]");
    menu.classList.toggle("hidden");
})

const savedTheme = localStorage.getItem("theme");

applyTheme(savedTheme || "light");