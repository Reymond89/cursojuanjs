
// Do While

let i = 1; // inicio

do{

if(i % 15 === 0){
    console.log(`FIZZBUZZ ${i}`)
}else if(i % 3 === 0){
    console.log(`Fizz ${i}`)
}else if(i % 5 === 0){
    console.log(`buzz ${i}`)
 
}

i++; // incremento
}while(i < 100) // condicion