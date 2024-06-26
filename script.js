gsap.registerPlugin(ScrollTrigger);

const video = document.querySelector(".video-section")

ScrollTrigger.defaults({
  toggleActions:"play none none reverse"
})

  

const unblurAnimation = gsap.to(".image", {
  filter: "blur(0px)", // Set the filter to unblur the image
  duration: 0.01, // Animation duration
  ease: "power2.out" // Animation easing
});


/*zoom from first image to main menu*/
gsap.to('.img-container',{
  scale:68,
  ease:"ease",
  scrollTrigger:{
    trigger:'.video-section',
    scrub:0.1,
    start:"top top",
    end:"bottom",
    pin:true,
  }
})

/*title words go right*/
gsap.to('.right' ,{
  autoAlpha:0,
  x:500,
  duration:1.5,
  scrollTrigger:{
    start:1
  }
})

/*title words go left*/
gsap.to('.left' ,{
  autoAlpha:0,
  x:-500,
  duration:1.5,
  scrollTrigger:{
    start:1
  }
})


gsap.from('.txt-bottom',{
  autoAlpha:0,
  letterSpacing:-10,
  duration:2,
  scrollTrigger:{
    start:2
  }
})

const tl = gsap.timeline();


/*jumps from left to right side smoothly*/
tl.from('.left-side div',{
  y:150,
  opacity:0,
  stagger:{
    /*title caption before picture*/
    amount:0.4
  },
  /*delay on scroll*/
  delay:2
}).from('.right-side',{opacity:0,duration:2},1)
.to('.wrapper' ,{x:-window.innerWidth})


/*sets up horizontal and vertical scroll trigger*/
ScrollTrigger.create({
  animation:tl,
  trigger:'.wrapper',
  start:"top top",
  end:"+=600",
  scrub:0.05,
  pin:true,
  ease:"none",
  toggleActions: "play none none reverse",
})


/*image opacity function*/
gsap.utils.toArray('.col').forEach(image=>{
  gsap.fromTo(image,{
    opacity:.3,
    x:0
  },{
    opacity:1,
    x:-50,
    scrollTrigger:{
      trigger: image,
      start:"10%",
      stagger:{
        amount:.4
      }
    }
  })
})

const timeline = gsap.timeline();

/*bottom text animation at title page*/
timeline.from('.title span' ,{
  y:150,
  skewY:7,
  duration:3
}).from('.txt-bottom',{
  letterSpacing:-10,
  opacity:0,
  duration:3
})
