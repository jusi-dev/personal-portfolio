var scrollPosActive = false;

const hamburger = document.querySelector(".hamburger");
const mainnav = document.querySelector(".main-nav");
const navelem = document.querySelectorAll(".nav-elem");
const navBar = document.querySelector(".sticky");
const burgerWrapper = document.querySelector("burger-wrapper");
const aElements = document.querySelectorAll('ul a.nav-elem');
const downArrow = document.querySelector('.arrow-down');
const allAElements = document.querySelectorAll('ul a');

const mePart = document.querySelector(".me");
const meUl = document.querySelector(".me-ul");

const impressumFooter = document.querySelector(".footer-list-a");
const closePopupBtn = document.querySelector(".close-btn");
const popupWindow = document.getElementById("popup-1");

const styleSheet = document.styleSheets[0];
const lightModeBtn = document.querySelector("#lightmode-btn");
const darkModeBtn = document.querySelector("#darkmode-btn");
const purple = document.querySelectorAll(".purple");
const stickyClass = document.querySelector(".sticky");
const aElement = document.querySelectorAll("a");


var height = window.innerHeight;
var bottom = height + window.scrollY;

var lightModeActive = false;

lightModeBtn.addEventListener("click", () => {
  lightModeActive = true;
  lightModeBtn.style.display = "none";
  darkModeBtn.style.display = "flex";
  
  if (scrollPosActive == true) {
    navBar.style.background = "white";
  } else {
    navBar.style.background = "none";
  };
  document.body.classList.add("lightMode");
  navelem.forEach(elem => {
    elem.classList.add("lightModeText");
  });
  
  purple.forEach(purple => {
    purple.style.color = '#8d34ff';
  });

  aElement.forEach(elem => {
    elem.classList.add("lightModeText");
  })
});

darkModeBtn.addEventListener("click", () => {
  lightModeActive = false;
  darkModeBtn.style.display = "none";
  lightModeBtn.style.display = "flex";

  if (scrollPosActive == true) {
    navBar.style.background = "#0E1313";
  } else {
    navBar.style.background = "none";
  };
  document.body.classList.remove("lightMode");
  navelem.forEach(elem => {
    elem.classList.remove("lightModeText");
  });
  
  purple.forEach(purple => {
    purple.style.color = '#8d34ff';
  });

  aElement.forEach(elem => {
    elem.classList.remove("lightModeText");
  })
})

impressumFooter.addEventListener("click", () => {
  popupWindow.classList.toggle("active");
});

closePopupBtn.addEventListener("click", () => {
  popupWindow.classList.toggle("active");
});

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mainnav.classList.toggle("active");
});

document.querySelectorAll(".nav-elem").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    mainnav.classList.remove("active");
}));

downArrow.addEventListener("click", () => {
    document.body.style.overflowY = "scroll";
    document.body.style.position = "static";
});

// Add an event listener that listens for the "scroll" event
/* window.addEventListener("scroll", function() {
  if (window.matchMedia("(min-width: 993px)").matches) {
    if (mePart.getBoundingClientRect().top <= 200) {
      meUl.style.color = "#9043f6";
    } else if (mePart.getBoundingClientRect().top <= bottom) {
      meUl.style.color = "white";
    }
  } else if (window.matchMedia("(max-width: 992px)").matches) {
    if (mePart.getBoundingClientRect().top <= 200) {
      meUl.style.color = "red";
    }
  } else if (window.matchMedia("(max-width: 768px)").matches) {
    if (mePart.getBoundingClientRect().top <= 200) {
      meUl.style.color = "red";
    }
  } else if (window.matchMedia("(max-width: 600px)").matches) {
    if (mePart.getBoundingClientRect().top <= 200) {
      meUl.style.color = "red";
    }
  }
}); */


// loop through all the selected `a` elements
aElements.forEach(aElement => {
  // attach a `click` event listener to the `a` element
  aElement.addEventListener('click', event => {

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
    var scrollPos = window.scrollY;
    // add a class to the body element to change the background color
    if (scrollPos > 300) {
      scrollPosActive = true;
      if (lightModeActive == true) {
        navBar.style.background = "white";
      } else {
        navBar.style.background = "#0E1313";
      }
    } else {
      scrollPosActive = false;
      /* navBar.classList.remove('scrolled'); */
      navBar.style.background = "none";
    }
  });