const toggleTheme = document.getElementById("toggleTheme");
const rootHtml = document.documentElement;

function changeTheme() {
	const currentTheme = rootHtml.getAttribute("data-theme");

	rootHtml.setAttribute("data-theme", currentTheme === "dark" ? "light" : "dark");

	toggleTheme.classList.toggle("bi-sun");
	toggleTheme.classList.toggle("bi-moon");

}

toggleTheme.addEventListener("click", changeTheme);

