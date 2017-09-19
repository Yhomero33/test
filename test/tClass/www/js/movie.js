var rectPath = new Rect(0,0,150,150)
.attr({
    fillColor: 'red',
    strokeColor: 'green',//StrokeColor: Color del borde (se dibuja una linea al rededor de la figura que esten dibujando)
    strokeWidth: 5,
    x: 150,
    y: 150
});

stage.addChild(rectPath);//esta propiedad se esta agregando a nuestro canvas
rectPath.animate('2s',{
    rotation: Math.PI*2
},{
    easing: 'elasticInOut'//El tipo de animación que se va a utilizar
})