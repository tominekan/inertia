let isOpen = false; // defaults to closed

// Toggle Menu Open or Close
function toggleMenu() {
    isOpen = !isOpen;
    if (isOpen) {
        showMenu();
    } else {
        hideMenu();
    }
}

// Show menu
// Change Icon to X
function showMenu() {
    let mobile_menu = document.getElementById("mobile_menu");
    document.body.style.overflow = "hidden";
    mobile_menu.style.visibility = "visible";

    let mobile_image = document.getElementById("mobile-inertia-logo");
    mobile_image.style.visibility = "hidden";

    // Change Menu to Close Buttton
    let menu = document.getElementById("hamburger_menu");
    menu.src = "assets/CloseMenu.png"
}

function hideMenu() {
    let mobile_menu = document.getElementById("mobile_menu");
    mobile_menu.style.visibility = "hidden";
    document.body.style.overflow = "visible";

    let mobile_image = document.getElementById("mobile-inertia-logo");
    mobile_image.style.visibility = "visible";

    // Change Close Button to Menu
    let menu = document.getElementById("hamburger_menu");
    menu.src = "assets/HamburgerMenu.png"
}
