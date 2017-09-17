/**
 * generar 3 condiciones si puede pasa o no, pg, si es menor de edad no pasa, si es mayor d eedad pasa , 
 * si es menor de edad pero va con un adulto si pasa
 * */

const edad_Min = 4, edad_Max=80, salaLlena=40, ageL=18;;
const edadCliente = () => Math.round(Math.random() * (edad_Max - edad_Min) + edad_Min);
let asientos=0;
const edadAcompañante = () => Math.round(Math.random() * (edad_Max - ageL) + edad_Min);

while(asientos<salaLlena){
   asientos ++;
   const cliente = edadCliente();
   const acompañante = edadAcompañante(); 

   if(cliente >= ageL){
       console.log(`Cliente de ${cliente} años PASA`);

   }else{

       if(cliente < ageL && acompañante >= ageL){
           asientos ++;
           console.log(`Cliente de ${cliente} años PASA con acompañante de ${acompañante} años`);
       }
       console.log(`Cliente de ${cliente} años NO PASA`);

   }

}
console.log(`Asientos ocupados: ${asientos}`);