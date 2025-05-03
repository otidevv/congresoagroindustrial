

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const mm = gsap.matchMedia();

let smoother;

mm.add("(min-width: 1024px)", () => {

  //ScrollSmoother
  ScrollSmoother.create({
    smooth: 2,
    effects: true,
    normalizeScroll: false,
    ignoreMobileResize: true
  });


  var tl = gsap.timeline({ defaults: { duration: 1, ease: "power1.out" } });

  tl.fromTo(
    ".video",
    { scale: 2, y: "-50%" },
    { scale: 1, y: "0%", },
    "<"
  )
  tl.fromTo(
    ".startimage",
    { scale: 1.4, y: "0%" },
    { scale: 1, y: "0%", },
    "<"
  )
    .fromTo(
      ".start-content .image img",
      { scale: 1.6, y: "-20%" },
      { scale: 1, y: "0%", },
      "<"
    )
    .fromTo(
      ".start-content .caption",
      { autoAlpha: 0, y: "-30rem" },
      { autoAlpha: 1, y: "0%", delay: .5 },
      "<"
    )

  //Arrow Down Animation
  var tl = new TimelineMax({ repeat: -1, yoyo: true });
  tl.fromTo(".arrow-down svg", 1, { y: -10 }, { ease: Power0.easeNone, y: 10 });

  //Fadeup
  const fadeupAnimated = gsap.utils.toArray('.fadeUp');
  fadeupAnimated.forEach((box, i) => {
    const anim = gsap.fromTo(box, { autoAlpha: 0, y: 150 }, { duration: .7, autoAlpha: 1, y: 0 });
    ScrollTrigger.create({
      trigger: box,
      animation: anim,
      toggleActions: 'play none none none',
      once: true
    });
  });

  function scroll() {
    const statsImage = document.querySelectorAll('.stats-image');
    const statsbg = document.querySelectorAll('.stats-bg');

    statsImage.forEach((img) => {
      gsap.fromTo(img, {
        rotate: -50,
        willChange: "transform",

      }, {
        // ease: 'none',
        scale: 1,
        rotate: 0,

        scrollTrigger: {
          trigger: img,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
          willChange: "transform",
        }
      });
    });

    statsbg.forEach((img) => {
      gsap.fromTo(img, {
        yPercent: -80,
        willChange: "transform",

      }, {
        // ease: 'none',
        yPercent: 0,
        scrollTrigger: {
          trigger: 'stats',
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
          // markers: true,
          willChange: "transform",
        }
      });
    });
  }

  scroll();
});


function getSamePageAnchor(link) {
  if (
    link.protocol !== window.location.protocol ||
    link.host !== window.location.host ||
    link.pathname !== window.location.pathname ||
    link.search !== window.location.search
  ) {
    return false;
  }

  return link.hash;
}

// Anchor
function scrollToHash(hash, e) {
  const elem = hash ? document.querySelector(hash) : false;
  if (elem) {
    if (e) e.preventDefault();
    gsap.to(window, { scrollTo: elem });
  }
}

// Click event listener for anchor tags
document.querySelectorAll('.anchor').forEach(a => {
  a.addEventListener('click', e => {
    const samePageAnchor = getSamePageAnchor(a);

    if (samePageAnchor) {
      scrollToHash(samePageAnchor, e);
    }
  });
});

// Check if there's a hash in the URL and scroll to it on page load
if (window.location.hash) {
  scrollToHash(window.location.hash);
}

