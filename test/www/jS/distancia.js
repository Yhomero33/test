let punto1 = {valX: 5, valY: 8}; 
let punto2 = {valX: 8, ValY: 5};

function distanciaObjetos(){

    //let sumCuadrados = Math.pow((punto2.posicionX-punto1.posicionX),2) + Math.pow((punto2.posicionY-punto1.posicionY),2);
    //let distancia = Math.sqrt(sumCuadrados);
    return Math.sqrt(Math.pow((punto2.valX - punto1.valX),2) + Math.pow((punto2.valY - punto1.valY),2));
    //distancia = Math.sqrt(sumC)
}
console.log(distanciaObjetos());

let corX = {x1:2, x2: 4};
let corY = {y1:6, y2: 8};

function distancia(){
    return Math.sqrt(Math.pow((corX.x2-corX.x1),2)+Math.pow((corY.y2-corY.y1),2));
}
console.log(`Distancia: ${distancia()}`);

//----------------------
let puntoX = {x1:2, x2: 4};
let puntoY = {y1:6, y2: 8};

function distancia(){
    return Math.sqrt(Math.pow((puntoX.x2-puntoX.x1),2)+Math.pow((puntoY.y2-puntoY.y1),2));
}
console.log(`Distancia: ${distancia()}`);