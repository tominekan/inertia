let detectorUp = false, detectorDown = false;
//Optional - Add in a function that detects when the user is above or below and adjusts
//the animation accordingly(makes the elements come in from the right direction)
//Consider making a function that will change the transform(transformX to transformY or just to change values)
//of the hidden class so that there aren't too many css classes being added at once
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show');
            console.warn(window.innerHeight);
            console.warn(window.innerWidth);
        }else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));