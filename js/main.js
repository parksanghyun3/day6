$(document).ready(function(){
  AOS.init();
  var $horeizonBox = $(".box");
  var $box = $(".box").length;
  var tl = gsap.timeline();

  gsap.to(".wall-paper", { 
    scale: .9,
    duration: 3,
    scrollTrigger: {
      trigger: "#section1",
      scrub: 1,
      start: "top 10%",
      end: "bottom top",
      toggleClass: "filter",
    },
  });


  gsap.to(".box-wrapper", { 
    x: "-100%",
    scrollTrigger: {
      trigger: "#section2",
      pin: true,
      scrub: 1,
      start: "top top",
      end: "+=" + innerWidth * 3,
    },
  });

  gsap.to("#section2 .sec-tit", { 
    left: "65%",
    scrollTrigger: {
      trigger: "#section2",
      pin: true,
      scrub: 1,
      start: "top top",
      end: "+=" + innerWidth * 3,
    },
  });

  $(".box").each(function() {  
    var spin = gsap.to($(this).find(".record"), {
      rotate: 360,
      duration: 2,
      repeat: -1,
      ease: "linear",
    });

    spin.pause();
    $(this).on("mouseover", function() {
      gsap.to($(this).find(".record"), {
        left: "70%",
      }),
      gsap.to($(this).find(".hide-album-tit"),{
        bottom: "-13%"
      })
      spin.play();
    });
    $(this).on("mouseleave", function() {
      gsap.to($(this).find(".record"), {
        left: "50%",
      }),
      gsap.to($(this).find(".hide-album-tit"),{
        bottom: "0%"
      })
      spin.pause();
    });
  });

  tl.to("body", { 
    backgroundColor:"#000",
    scrollTrigger: {
      trigger: "#section3",
      start: "top 30%",
      end: "top 30%",
      scrub:1,
      toggleActions: "play none reverse none",
    },
  })
  .to($(".trans-text"), {
    opacity: 1,
    scrollTrigger: {
      trigger: "#section3",
      start: "top 30%",
      end: "top 30%",
      scrub:1,
      toggleActions: "play none reverse none",
    },
  })
  .to($(".trans-text-wrap:even"), { 
    xPercent : 10,
    scrollTrigger: {
      trigger: "#section3",
      start: "top 30%",
      end: "bottom top",
      scrub:1,
      toggleActions: "play none reverse none",
    },
  })
  .to($(".trans-text-wrap:odd"), { 
    xPercent : -10,
    scrollTrigger: {
      trigger: "#section3",
      start: "top 30%",
      end: "bottom top",
      scrub:1,
      toggleActions: "play none reverse none",
    },
  });
  
  //eq()값 하나씩 말고 변경해야될 부분
  var introWrapH = $(".intro-wrap").innerHeight();
  var tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: "#section4",
      start: "top top",
      end: "+=" + introWrapH * 8,
      scrub: 1,
      pin: true,
      // markers: true,
    },
  });

  tl2.to($(".intro-wrap").eq(1), {
    top:0,
  })
  .to($(".intro-wrap").eq(2), {
    top:0,
  })
  .to($(".intro-wrap").eq(3), {
    top:0,
  });

  gsap.to("#section5 .inner p", {
    fontSize: "400px",
    scrollTrigger: {
      trigger: "#section5",
      start: "top top",
      end: "bottom top",
      scrub: 1,
      pin: true,
      // markers: true,
    },
  });



});