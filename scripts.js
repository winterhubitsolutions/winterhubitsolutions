// Open and close sidebar functionality
function openSidebar() {
    document.getElementById("sidebar").classList.add("open");
}

function closeSidebar() {
    document.getElementById("sidebar").classList.remove("open");
}

// Close sidebar when clicking outside of it
document.addEventListener("click", (event) => {
    const sidebar = document.getElementById("sidebar");
    const openButton = document.querySelector(".open-btn");

    // Check if the click was outside of the sidebar or the open button
    if (!sidebar.contains(event.target) && !openButton.contains(event.target)) {
        sidebar.classList.remove("open");
    }
});

// Theme toggle button functionality
document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.createElement("button");
    toggleButton.classList.add("theme-toggle");
    toggleButton.setAttribute("aria-label", "Switch to dark theme");
    toggleButton.setAttribute("aria-expanded", "false");
    toggleButton.textContent = "🌙"; // Initial icon for light theme

    document.body.appendChild(toggleButton);

    // Load the saved theme from localStorage, if it exists
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        document.documentElement.setAttribute("data-theme", savedTheme);
        toggleButton.textContent = savedTheme === "dark" ? "☀️" : "🌙"; // Set initial icon based on saved theme
        toggleButton.setAttribute("aria-label", `Switch to ${savedTheme === "dark" ? "light" : "dark"} theme`);
    }

    // Event listener for theme toggle button
    toggleButton.addEventListener("click", () => {
        let currentTheme = document.documentElement.getAttribute("data-theme");
        let newTheme = currentTheme === "dark" ? "light" : "dark";

        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);

        // Update button icon and aria-label
        toggleButton.textContent = newTheme === "dark" ? "☀️" : "🌙";
        toggleButton.setAttribute("aria-label", `Switch to ${newTheme === "dark" ? "light" : "dark"} theme`);
        toggleButton.setAttribute("aria-expanded", newTheme === "dark");
    });
});
