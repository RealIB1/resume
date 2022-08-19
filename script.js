const btn = document.querySelector(".btn-toggle");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

const currentTheme = localStorage.getItem("theme");

if (currentTheme == "dark") {
  document.body.classList.toggle("dark-theme");
    btn.innerHTML = `<img src="./icons/sun.png">`;
} else if (currentTheme == "light") {
    btn.innerHTML = `<img src="./icons/crescent-moon.png">`;
  document.body.classList.toggle("light-theme");
}

btn.addEventListener("click", function () {
  if (prefersDarkScheme.matches) {
    document.body.classList.toggle("light-theme");
    var theme = document.body.classList.contains("light-theme")
      ? "light"
      : "dark";
      btn.innerHTML = theme === "light" ? `<img src="./icons/crescent-moon.png">` : `<img src="./icons/sun.png">`;
      btn.style.transition = "i 5s ease-in";


  } else {
    document.body.classList.toggle("dark-theme");
    var theme = document.body.classList.contains("dark-theme")
      ? "dark"
      : "light";
      btn.innerHTML = theme === "dark" ? `<img src="./icons/crescent-moon.png">` : `<img src="./icons/sun.png">`;
      btn.style.boxShadow = "inset 0 0 5px #222, 0 0 5px #222";
  }
  localStorage.setItem("theme", theme);
});