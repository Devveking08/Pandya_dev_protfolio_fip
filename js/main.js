(function() {
    document.addEventListener("DOMContentLoaded", function () {
      var profilePic = document.querySelector(".circular-profile-pic");
  
      gsap.to(profilePic, {
        x: 30, 
        opacity: 0.9, 
        duration: 0.5, 
        ease: "power1.out", 
        paused: true, 
      });
  
      profilePic.addEventListener("mouseenter", function () {
        gsap.to(profilePic, {
          x: 0, 
          opacity: 1, 
          duration: 0.5,
          ease: "power1.out",
        });
      });
  
      profilePic.addEventListener("mouseleave", function () {
        gsap.to(profilePic, {
          x: 20, 
          opacity: 0.8,
          duration: 0.5,
          ease: "power1.out",
        });
      });
    });
  
    document.addEventListener("DOMContentLoaded", function() {
      var hamburger = document.querySelector(".hamburger");
      var mobileNav = document.querySelector(".mobile-nav");
  
      hamburger.addEventListener("click", function() {
        mobileNav.classList.toggle("show");
      });
    });
  })();
  
