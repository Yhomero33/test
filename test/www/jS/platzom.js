
/**
 * 1. Si la palabra termina en "ar", se le quitan los ultimos dos caracteres
 * 2. Si la palabra inicia con z, se le añade "pe"al final de la palabra
 * 3. Si la palabra traducida tiene 10 ó más letras, se debe partir a la mitad 
 * y unir con un guion.
 * 4. Si la palabra original es un palindromo, ninguna de las reglas anteriores funcionan
 * y se devuelve la palabra intercalando entre mayusculas y minusculas. 
*/

function platzom(str){//dif. etre param. y argu. param. lo que acepta la funcion, argum. lo que lleva cuando se manda llamar
    let translation = str;
    if(str.toLowerCase().endsWith('ar')){
        translation = str.slice(0,-2);
    }

    if(str.toLowerCase().startsWith('z')){
        translation += 'pe';
    }

    /** My first try
    if(translation.length>=10){
    ini = Math.round(translation.length/2);
    fin = translation.length;
    ini2 = 0;
    fin2  = ini;
    subCadena = translation.substring(ini,fin);
    subCadena2 = translation.substring(ini2,fin2);
    subCadena3 = subCadena2+"-"+subCadena;
    subCadena3 = translation;
    }*/

    /**Codigo del heber modificado por el profe
    let i = str.length;
    let minus = str.toLowerCase();
    if(minus.length >=10){
        partir = str.slice(i/2));
        translation = str.slice(0, -(i/2))+'-',partir);
    }*/

    //Solucion del profe
    let length  = translation. length;
    if(length >= 10){
        const fHalf = translation.slice(0, Math.round(length/2));
        const sHalf = translation.slice(Math.round(length/2));
        translation = `${fHalf}-${sHalf}`;
    }
    //const reverse = (str)=> // const reverse = function(){} CANVAS ANONimos, cuando esta posicionado en esa area
    const reverse = (str) => str.split('').reverse().join('');
    function minMay(str){
        const l = str.length;
        let translation = "";
        let capitalize = true;
        for(let i =0; i<length; i++){
            const char = str.charAt(i);//regreso el valor de cada uno de los elementos del arreglo
            translation += capitalize ? char.toUpperCase() : char.toLowerCase();//? operador ternario, : condicional 
        }
    }

    if(str = reverse(str)){
        return minMay(str);

    }
    
    return translation;
}

console.log(platzom("cortarmuchomuchoasim"));
//console.log(platzom("Zipo"));
console.log(translation);

//de tarea hacer la regla 3