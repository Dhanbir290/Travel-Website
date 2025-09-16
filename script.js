const bars = document.querySelector(".bars"), close = document.querySelector(".close"), menu = document.querySelector(".menu");

bars.addEventListener("click", () => {
  menu.classList.add("active");
  gsap.from(".menu", {
    duration: .5
  })

  gsap.from(".menu ul", {
    opacity: 0,
    x: -300
  })
})

close.addEventListener("click", () => {
  menu.classList.remove("active")
});

function animateContent(selector) {
  selector.forEach((selector) => {
    gsap.to(selector, {
      y: 30,
      duration: 0.3,
      opacity: 1,
      delay: 0.2,
      stagger: 0.2,
      ease: "power2.out",
    })
  }
  )
};

function scrollTriggerAnimation(
  triggerSelector, boxSelectors) {
  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: triggerSelector,
      start: "top 50%",
      end: "bottom 80%",
      scrub: 1,
    },
  });
  boxSelectors.forEach((boxSelector) => {
    timeline.to(boxSelector, {
      y: 0,
      duration: 1,
      opacity: 1,
    });
  })
};

function swipeAnimation(triggerSelector, boxSelectors) {
  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: triggerSelector,
      start: "top 50%",
      end: "top 80%",
      scrub: 1,
    },
  });

  boxSelectors.forEach((boxSelector) => {
    timeline.to(boxSelector, {
      x: 0,
      duration: 1,
      opacity: 1
    });
  })
};

function galleryAnimation(triggerSelector, boxSelectors) {
  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: triggerSelector,
      start: "top 100%",
      end: "bottom 100%",
      scrub: 1,

    },
  });

  boxSelectors.forEach((boxSelector) => {
    timeline.to(boxSelector, {
      y: 0,
      duration: 1,
      opacity: 1
    });
  })
};




animateContent([".home .content h5, .home .content h1, .home .content p, .home .content .search "]);


scrollTriggerAnimation(".travel", [".travel .box1", ".travel .box2", ".travel .box3"]);

swipeAnimation(".destinations", [".destinations .des-container .des-box .heading", ".destinations .des-container .des-box .content"])


galleryAnimation(".destinations .gallery", [".destinations .gallery .image-box1", ".destinations .gallery .image-box2", ".destinations .gallery .image-box3", ".destinations .gallery .image-box4", ".destinations .gallery .image-box5"])

galleryAnimation(".featured .fgallery", [".featured .fgallery .fbox1", ".featured .fgallery .fbox2", ".featured .fgallery .fbox3", ".featured .fgallery .fbox4"]);

scrollTriggerAnimation(".feedback .feedcontainer", [".feedback .feedcontainer .label", ".feedback .feedcontainer .heading", ".feedback .feedcontainer .paragraph"]);


galleryAnimation(".feedback .feedboxes", [".feedback .feedboxes .feedbox1", ".feedback .feedboxes .feedbox2", ".feedback .feedboxes .feedbox3", ".feedback .feedboxes .feedbox4", ".feedback .feedboxes .feedbox5", ".feedback .feedboxes .feedbox6"]);

scrollTriggerAnimation(".articles .acontainer", [".articles .label", ".articles .heading"]);

swipeAnimation(".articles .acontainer", [".articles .acontainer .lbox .image", ".articles .acontainer .lbox .author"]);

swipeAnimation(".articles .acontainer .rbox", [".articles .acontainer .rbox .rarticle1", ".articles .acontainer .rbox .rarticle2", ".articles .acontainer .rbox .rarticle3", ".articles .acontainer .rbox .rarticle4"]);







