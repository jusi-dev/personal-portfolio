const hamburger = document.querySelector(".hamburger");
const mainnav = document.querySelector(".main-nav");
const navelem = document.querySelector(".nav-elem");
const navBar = document.querySelector(".sticky");
const burgerWrapper = document.querySelector("burger-wrapper");
const aElements = document.querySelectorAll('ul a.nav-elem');
const downArrow = document.querySelector('.arrow-down');

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mainnav.classList.toggle("active");
})

document.querySelectorAll(".nav-elem").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    mainnav.classList.remove("active");
}))

downArrow.addEventListener("click", () => {
    document.body.style.overflowY = "scroll";
})

// loop through all the selected `a` elements
aElements.forEach(aElement => {
  // attach a `click` event listener to the `a` element
  aElement.addEventListener('click', event => {
    // select all `a` elements inside the `ul` again
    const allAElements = document.querySelectorAll('ul a');

    // loop through all the selected `a` elements
    allAElements.forEach(a => {
      // if the current `a` element is not the clicked `a` element
      if (a !== event.target) {
        // reset the `color` of the `a` element to its default value
        a.style.color = '';
      }
    });

    // change the `color` of the clicked `a` element
    event.target.style.color = '#9043f6';
  });
});


// listen for the scroll event
window.addEventListener('scroll', function() {
    // get the current scroll position
    var scrollPos = window.scrollY;
  
    // add a class to the body element to change the background color
    if (scrollPos > 300) {
      navBar.classList.add('scrolled');
    } else {
      navBar.classList.remove('scrolled');
    }
  });