const themeInput = document.querySelector("input#theme");

/**
 * Fallback for no :has() support.
 * @param {boolean | number} theme
 */
function setTheme(theme) {
	document.documentElement.className = theme ? "dark-theme" : "";
}

themeInput.onchange = () => {
	localStorage.setItem("darkTheme", Number(themeInput.checked));
	setTheme(themeInput.checked);
};

function main() {
	const darkTheme =
		localStorage.getItem("darkTheme") === null
			? window.matchMedia("(prefers-color-scheme: dark)").matches // default user theme
			: Number(localStorage.getItem("darkTheme"));

	themeInput.checked = darkTheme;
	setTheme(darkTheme);
}

document.onload = main();
