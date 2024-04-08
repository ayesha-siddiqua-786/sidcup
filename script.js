var blur=document.querySelector("#cursor-blur")
var crsr=document.querySelector("#cursor")
document.addEventListener("mousemove",function(dets){
    crsr.style.top=dets.y+"px",
    crsr.style.left=dets.x+"px"
    blur.style.left=dets.x-150+"px",
    blur.style.top=dets.y-150+"px"
})
gsap.to("#nav",{
    backgroundColor: "#000",
    duration: 0.5,
    height:"110px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
//        markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }
})

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
//        markers:true,
        start:"top -25%",
        end:"top -70%",
        scrub:2,
    }
})
var h3all = document.querySelectorAll("#nav h3")
h3all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale=3
        crsr.style.border="1px solid #fff"
        crsr.style.backgroundColor="transparent"
    })
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale=1
        crsr.style.border="1px solid #95C11E"
        crsr.style.backgroundColor="#95C11E"
    })
})
gsap.from("#about-us img, #about-usmini" , {
    y:70,
    opacity:0,
    duration:0.5,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        start:"top 70%",
        end:"top 58%",
        scrub:2,
    }
})
gsap.from("#colon1",{
    y:-60,
    x:-60,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        scrub:1,
    }
})
gsap.from("#colon2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#colon2",
        scroller:"body",
        scrub:1,
    }
})
gsap.from("#page4 h2",{
    y:70,
    scrollTrigger:{
        trigger:"#page4 h2",
        scroller:"body",
        start:"top 70%",
        end:"top 68%",
        scrub:1,
    }
})