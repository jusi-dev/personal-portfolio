var scrollPosActive = false;

const hamburger = document.querySelector(".hamburger");
const mainnav = document.querySelector(".main-nav");
const navelem = document.querySelectorAll(".nav-elem");
const navBar = document.querySelector(".sticky");
const burgerWrapper = document.querySelector("burger-wrapper");
const aElements = document.querySelectorAll('ul a.nav-elem');
const downArrow = document.querySelector('.arrow-down');
const allAElements = document.querySelectorAll('ul a');
const skillSection = document.querySelector('#skill-section');

const startPart = document.querySelector("#start");
const mePart = document.querySelector("#me");
const workPart = document.querySelector("#work");
const contactPart = document.querySelector("#contact");
const meUl = document.querySelector(".me-ul");
const workUl = document.querySelector(".work-ul");
const contactUl = document.querySelector(".contact-ul");

const aboutMe = document.querySelector(".about-me");

const impressumFooter = document.querySelector(".footer-list-a");
const closePopupBtn = document.querySelector(".close-btn");
const popupWindow = document.getElementById("popup-1");

const lightModeBtn = document.querySelector("#lightmode-btn");
const darkModeBtn = document.querySelector("#darkmode-btn");
const purple = document.querySelectorAll(".purple");
const stickyClass = document.querySelector(".sticky");
const aElement = document.querySelectorAll("a");
const burgerBar = document.querySelectorAll(".bar");
const iconRow1 = document.querySelectorAll(".iconRow-1");
const iconRow2 = document.querySelectorAll(".iconRow-2");
const iconRow3 = document.querySelectorAll(".iconRow-3");


var height = window.innerHeight;
var bottom = height + window.scrollY;

var lightModeActive = false;

/*                                    */
        /* TOGGLE LIGHTMODE */
/*                                    */

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

  burgerBar.forEach(elem => {
    elem.classList.add("burgerLightMode")
  })
  
  purple.forEach(purple => {
    purple.style.color = '#8d34ff';
  });

  aElement.forEach(elem => {
    elem.classList.add("lightModeText");
  })
});

/*                                    */
        /* TOGGLE DARKMODE */
/*                                    */

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

/*                                    */
        /* IMPRESSUM MODAL */
/*                                    */

impressumFooter.addEventListener("click", () => {
  popupWindow.classList.toggle("active");
});

closePopupBtn.addEventListener("click", () => {
  popupWindow.classList.toggle("active");
});

/*                                    */
        /* BURGER MENU */
/*                                    */

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mainnav.classList.toggle("active");
});

document.querySelectorAll(".nav-elem").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    mainnav.classList.remove("active");
}));

/*
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
*/

/*                                    */
        /* SCROLL COLOR NAV */
/*                                    */

// Add the background color to the nav bar after scrolling
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

/*                                    */
        /* OBSERVER */
/*                                    */

// Observer for observing things lol
const observer = new IntersectionObserver((entries) => {
  // Check if element is intersecting with the viewport
  for (const entry of entries) {
    if (entry.isIntersecting) {
      if (entry.target === mePart) {
        if (lightModeActive === true) {
          meUl.style.color = '#9043f6';
          workUl.style.color = '#333333';
          contactUl.style.color = '#333333';
        } else if (lightModeActive === false) {
          meUl.style.color = '#9043f6';
          workUl.style.color = 'white';
          contactUl.style.color = 'white';
        }
        
      } else if (entry.target === workPart) {
        if (lightModeActive === true) {
          workUl.style.color = '#9043f6';
          meUl.style.color = '#333333';
          contactUl.style.color = '#333333';
        } else if (lightModeActive === false) {
          workUl.style.color = '#9043f6';
          contactUl.style.color = 'white';
          meUl.style.color = 'white';
        }
      } else if (entry.target === contactPart) {
        if (lightModeActive === true) {
          contactUl.style.color = '#9043f6';
          workUl.style.color = '#333333';
          meUl.style.color = '#333333';
        } else if (lightModeActive === false) {
          contactUl.style.color = '#9043f6';
          meUl.style.color = 'white';
          workUl.style.color = 'white';
        }
        
      } else if (entry.target === startPart) {
        if (lightModeActive === true) {
          meUl.style.color = '#333333';
          workUl.style.color = '#333333';
          contactUl.style.color = '#333333';
        } else if (lightModeActive === false) {
          contactUl.style.color = 'white';
          meUl.style.color = 'white';
          workUl.style.color = 'white';
        }
      }
    }
  }
}, {
  rootMargin: '-50%'
});

const iconObserver = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate__fadeInUp');
    }
  }
}, {
  rootMargin: '1%'
});

const animationObserver = new IntersectionObserver((entries) => {
  // Check if element is intersecting with the viewport
  for (const entry of entries) {
    if (entry.isIntersecting) {
      if (entry.target === mePart) {
        entry.target.classList.add('animate__fadeIn')
        mePart.style.visibility = 'visible';
      }
    }
  }
}, {
  rootMargin: '-40%'
});


observer.observe(startPart);
observer.observe(mePart);
observer.observe(workPart);
observer.observe(contactPart);

console.log("Test")
iconRow1.forEach(element => iconObserver.observe(element));
iconRow2.forEach(element => iconObserver.observe(element));
iconRow3.forEach(element => iconObserver.observe(element));

animationObserver.observe(mePart);