

var t1 = gsap.timeline()
t1.from(".line h1",{
    y:150,
    duration:0.6,
    delay:0.3,
    stagger:0.2
})
t1.from(".line1,.line h2",{
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
    duration:0.4,
    delay:4
})