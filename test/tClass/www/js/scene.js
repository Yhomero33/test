let numStars = 7;
let width = 500;//La animación solo se renderiza en este 500x500
let height = 500;

let stars = (function(star){
    let stars = []; //simplemente así se genera un arreglo
    for(let i=0; i<numStars; i++){
        let h = i *300 / numStars;//seprando (segmentando) las estrellas y las esta escalando
        stars[i] = star.clone().attr({
            fillColor: 'hsl('+h+', 100%, 50%)',//hsl(hexa...liner) //función hsl//Asigna valor a la figura
            x: width/2,
            y: height/2
        });
    }
    return stars;
})(new Star(width/2, height/2, 1, 5));//(pos en x, pos en y, un Vertice, por número de vertices(picos))
stage.length (14);//la cantidad de layers que tendra la escena.
let i=0;
stage.on(0, function(){
    let star = stars[i];
    star.attr({
        scaleX: 1,
        scaleY: 1,
        opacity: 1
    }).addTo(stage).animate(14 * numStars, {
        scaleX: width * 3,
        scaleY: height * 3,
        opacity: 0
    }, {isTimeLineBound: false});
    i = (i+1)%numStars;
    stage.removeChild(star[i]);
})