
// Fiz buzz = 100 numeros

// 3 6 9 12 ...Fizz
// 5 10 15 20 ... Buzz
// 15 30 45 ... FIZZBUZZ!

// for (let i = 0; i <= 100; i++) {
//     console.log(i)
// }

for (let i = 1; i <= 100; i++) {

    // se evalua primero siempre el mayor
    if(i % 15 === 0){
        console.log(`FIZZBUZZ ${i}`)
    }else if(i % 3 === 0){
        console.log(`Fizz ${i}`)
    }else if(i % 5 === 0){
        console.log(`buzz ${i}`)
     
    }
    
}