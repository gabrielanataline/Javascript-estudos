let nums = []

for (let i=1; i<=6; i++){
    const n = parseInt(prompt(`Digite o ${i} valor:`))
    nums.push(n); //vai adc cada valor no array
}

const pares =[] 
const impares = []

for (let numero of nums){

    if(numero%2==0){
        pares.push(numero);
    } else {
        impares.push(numero);
    }
} 
alert(`Nós temos ${pares.length} valores pares: ${pares.join(', ')} `) //join, pega cada valor e unir
alert(`Nós temos ${impares.length} valores ímpares: ${impares.join(', ')} `)

