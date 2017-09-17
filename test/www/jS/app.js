
var base =5;
var altura = 7;
var area = altura * base;
console.log("El área de mi rectangulo es igual: "+ area);

var radio = 5;
var areaCirculo = Math.PI * Math.pow(radio,2);
console.log("El área de mi circulo es igual: "+areaCirculo);

var bt = 6;
var at = 8;
var areaTriangulo = (bt * at)/2;
console.log("El área de mi triangulo es igual: "+areaTriangulo);

var rE=5;
var volumen = (4 * Math.PI * Math.pow(rE,3))/3;
console.log("El volumen de mi esfera es igual: "+volumen);

var nombre = "Juan Peña";
function creaSaludo(){
    alert(nombre);
}
alert(nombre);

var nombre = "Juan Peña";
function creaSaludo(usuario){
    return "Hola "+usuario;
}
creaSaludo(nombre);

var nombre = "Juan Peña";
function saludo(){
console.log("Hola "+nombre+"!");
}
saludo();

//FORMA CORRECTA!

var nombre = "Juan Peña";
function saludo(n){
console.log("Hola "+n+"!");
}
saludo(nombre);


//nadie entendio y veremos la tarea

var nombre = "Alonso";
function saludar(){
if(true){
    var nombre = "Eric";
}
    console.log(`Hola $(nombre)`);//${} interpolar variables
}

function saludar10(){
    for(let i=0; i<10;i++){
        console.log(`Hola $(nombre)`);
    }
        console.log(`Hola $(i)`);
}
saludar();

function saludar10(){
    let i=0;//let se utiliza cuando el valor de la variable va a cambiar (constantemete)
    //si el valor no va cambiar se usa const 
    // var puede cambiar en cualquier momento, pero casi no se usa (dias contados de uso xD)
    for(i; i<10;i++){
        console.log(`Hola ${nombre}`);
    }
        console.log(`el valor de i es: ${i}`);
}
saludar10();

/*Tarea 
Entrar a JavaScript30.com
Apartir de esta semana hay que presentar las 5 primeras practicas de esa página (para aprende el lenguaje)
bonsai (darle una checadita)
*/



