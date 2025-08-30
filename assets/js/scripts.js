const toggleTheme = document.getElementById("toggleTheme");
const rootHtml = document.documentElement;

function changeTheme() {
	const currentTheme = rootHtml.getAttribute("data-theme");

	rootHtml.setAttribute("data-theme", currentTheme === "dark" ? "light" : "dark");

	toggleTheme.classList.toggle("bi-sun");
	toggleTheme.classList.toggle("bi-moon");

}

toggleTheme.addEventListener("click", changeTheme);

const menuLinks = document.querySelectorAll(".menu_link");

menuLinks.forEach(item => {
	item.addEventListener("click", () => {
		menuLinks.forEach(i => i.classList.remove("active"));
		item.classList.add("active");
	})
})
