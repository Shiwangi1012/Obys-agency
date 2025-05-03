function loadingAnimation(){
    var t1 = gsap.timeline()
t1.from(".line h1",{
    y:150,
    duration:0.6,
    delay:0.3,
    stagger:0.2
})
t1.from(".line1, .line h2",{
    opacity: 0,
    onStart:function(){
        var h5text = document.querySelector(".line1 h5")
        var grow = 0
        setInterval(function(){
            if (grow<100){
                h5text.innerHTML = grow++
            }
            else{
                grow= 100
                h5text.innerHTML = grow
            }
        },35)
    }
})
t1.to("#loader",{
    opacity:0,
    duration:0.2,
    delay:4
})

t1.from(".page1",{
    y:1200,
    opacity:0,
    duration:0.2
})
t1.to(".line",{
    display:"none"
})
t1.from(".nav",{
    opacity:0
})
t1.from(".hero h1, #hero3 h2",{
    y:150,
    stagger:0.2
})
}

document.addEventListener("mousemove",function(dets){
    gsap.to("#crsr",{
        left: dets.x,
        top: dets.y
    })
})


Shery.makeMagnet(".nav-part2 h5", {});

loadingAnimation()
