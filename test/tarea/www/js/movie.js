var time="8s";
new Rect(10,10,100,100)
.addTo(stage)
.attr('fillColor', 'green')
.animate(`${time}`,{
    x: 1000,
})

new Rect(1000,110,100,100)
.addTo(stage)
.attr('fillColor','blue')
.animate("8s",{
    x:-2
})

new Rect(1000,10,100,100)
.addTo(stage)
.attr('fillColor','orange')
.animate(`${time}`,{
    x:-2,
    y:600
})