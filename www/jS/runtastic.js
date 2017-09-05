const nombre = "Adelaido";
const dias = [
    "Lunes",
    "Martes",
    "miercoles",
    "jueves",
    "viernes",
    "sabado",
    "domingo"
]//a los arreglos en JS se les puede meter lo que sea

function promedioCorrer(){
    const min=5, max=15;
 return Math.round(Math.random()*(max-min) + min);
}

let totalKms = 0;
const length = dias.length;
for(let i=0; i<length;i++){ //a esta linea y la anterior se le aplico "refactorización"
    const kms = promedioCorrer();
    //totalKms = totalKms + Kms;//se refactoriza en la linea siguiente
    totalKms += kms;
    console.log(`El dia ${dias[i]}, ${nombre} corrio ${kms} Kms`);
}
const promedioKms = totalKms / length;
console.log(`En promedio, ${nombre} corrio ${promedioKms} kms, en la semana.`);
console.log(`Kilometors corridos: ${totalKms}`);
