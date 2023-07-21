var currentDegrees;
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

    let mobile_text = document.getElementById("mobile-inertia-logo");
    mobile_text.style.opacity = 0;
    console.log("Opacity = " + mobile_text.style.opacity);

    // Change Menu to Close Buttton
    let menu = document.getElementById("hamburger_menu");
    menu.src = "assets/CloseMenu.png";
}

function hideMenu() {
    let mobile_menu = document.getElementById("mobile_menu");
    mobile_menu.style.visibility = "hidden";
    document.body.style.overflow = "visible";

    let mobile_text = document.getElementById("mobile-inertia-logo");
    mobile_text.style.opacity = 100;
    console.log(mobile_text.style.opacity + " = the opacity");

    // Change Close Button to Menu
    let menu = document.getElementById("hamburger_menu");
    menu.src = "assets/HamburgerMenu.png";
}

//When you hover over the logo it animates out
function animateLogo() {
    var chars = ["A", "I", "T", "R", "E"]
    let logo = document.getElementById("logo");
    for (var i = 0; i < 5; i++) {
        //Create a closure to protect the value of i
        (function(i){
            window.setTimeout(function(){
                logo.innerHTML = logo.innerHTML + chars[i];
            }, 200 - i*35);
        
          }(i));
    }
}

//Undoes the animation when the user stops hovering over the logo
function removeLogoAnimation() {
    let logo = document.getElementById("logo");
    (function(i){
        window.setTimeout(function(){
            logo.innerHTML = logo.innerHTML;
        }, 200 - i*35);
    
      }(i));
    // logo.innerHTML = "IN";
}

//Rotates the gradient that is behind the momentum word on the homepage
function rotateGradient() {
    var s = document.querySelector(':root');
    var input = 90;
    for (var i = 0; i < 360; i++) {
        (function(i){
            window.setTimeout(function(){
                input++;
                s.style.setProperty('--rotation', input + "deg");
                currentDegrees = input;
            }, 100 + i*10);
          }(i));
    }
}

//Un-rotates the gradient that is behind the momentum word on the homepage
function deRotateGradient() {
    var s = document.querySelector(':root');
    var input = currentDegrees - 90;
    for (var i = 0; i < input; i++) {
        (function(i){
            window.setTimeout(function(){
                currentDegrees--;
                s.style.setProperty('--rotation', currentDegrees + "deg");
            }, 50 + i*10);
          }(i));
    }
}
/*Consider either applying to whole block of text
or make the whole block/just "momentum" have a graident 
that moves so it looks like its speeding up*/