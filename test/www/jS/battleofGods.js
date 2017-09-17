let vidaGoku = 100, vidaSuperman = 100;
const MIN_POWER = 5, MAX_POWER = 12;

let round = 0;
const calcularGolpe = ()=> Math.round(Math.random() * (MAX_POWER - MIN_POWER) + MIN_POWER)
const ambosSiguenVivos = () => vidaGoku>0 && vidaSuperman>0;//el and permite que las condiciones se tengan que cumplir si o si
const gokuSigueVivo = () => vidaGoku > 0;
const ambosMuertos = () => vidaGoku === 0 && vidaSuperman === 0;// triple igual compara el tipo y el elemento, usarlo de preferencia
//!== , para tambien usarlo así 
while(ambosSiguenVivos()){
    round ++;
    console.log(`Round ${round}`);

    const golpeGoku = calcularGolpe();
    const golpeSuperman = calcularGolpe();

    if(golpeGoku > golpeSuperman){
        console.log(`Goku ataca a Superman con un golpe de ${golpeGoku}`);
        vidaSuperman -= golpeGoku;
        console.log(`Superman queda en ${vidaSuperman} de vida`);
    }else{
        console.log(`Superman ataca a Goku con un golde de ${golpeSuperman}`);
        vidaGoku -= golpeSuperman;
        console.log(`Goku queda en ${vidaGoku} de vida`);
    }
}

if(gokuSigueVivo()){
    console.log(`Goku gano la pelea. Su vida es de: ${vidaGoku}`);
}else{
    console.log(`Superman gano la pelea. Su Vida es de: ${vidaSuperman}`);
}

/**
 * generar 3 condiciones si puede pasa o no, pg, si es menor de edad no pasa, si es mayor d eedad pasa , 
 * si es menor de edad pero va con un adulto si pasa
 * */ */