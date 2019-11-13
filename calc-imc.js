const nome = 'Guilherme';
const peso = 61;
const altura = 1.61;

const imc = peso / (altura * altura)

if (imc >= 30){
    console.log('Guilherme, você está com sobrepeso;')
}
else {
    console.log('Guilherme, você não está com sobrepeso;')
}