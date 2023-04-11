const diaHoy = new Date();

// console.log(diaHoy)

moment.locale('es');

console.log(moment().format('MMMM dddd Y h:mm:ss a'));

// moment().format('lll'); Apr 11, 2023 11:59 AM
console.log(moment().format('lll', diaHoy));

//moment().format('LLLL'); Tuesday, April 11, 2023 11:58 AM

console.log(moment().format('LLLL', diaHoy));

// personalizar fechas
console.log(moment().add(3, 'days').calendar());


