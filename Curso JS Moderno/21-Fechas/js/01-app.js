const diaHoy = new Date();

let valor;

valor = diaHoy;

// obetener
// valor = diaHoy.getFullYear();
// valor = diaHoy.getHours();
// valor = diaHoy.getMonth();
// valor = diaHoy.getTime();
valor.toDateString();

//enviar para agregar la fecha 2020 en este caso

valor = diaHoy.setFullYear(2020);


// obtener la fecha enviada 
console.log(diaHoy.getFullYear());
// console.log(valor)