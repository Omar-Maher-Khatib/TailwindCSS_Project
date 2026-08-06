const toggleTheme = document.querySelector("#theme-toggle");
const html = document.documentElement;

function applyTheme(theme) {
    if (theme === "dark") {
        html.classList.add("dark");
    } else {
        html.classList.remove("dark");
    }
}

toggleTheme.addEventListener("click", () => {  
    const newTheme = html.classList.contains("dark") ? "light" : "dark";
    localStorage.setItem("theme", newTheme);
    applyTheme(newTheme);
})

const savedTheme = localStorage.getItem("theme");

applyTheme(savedTheme || "light");