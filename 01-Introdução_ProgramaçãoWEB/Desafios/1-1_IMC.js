//Cálculo de IMC:

const nome = "Carlos";
const peso = 84;
const altura = 1.88;

const imc = peso / (altura * altura);
console.log(`Seu IMC é: ${imc.toFixed(2)}`);

if (imc < 29.9) {
    console.log(`${nome} você não está acima do peso!\n`)
}else{
    console.log(`${nome} você está acima do peso!\n`)
}