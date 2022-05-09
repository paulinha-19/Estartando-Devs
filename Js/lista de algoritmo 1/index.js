// 1 - Faça um algoritmo que leia o nome e a idade de uma pessoa e ao final escreva o nome da pessoa, sua idade e se ela é maior de idade ou não.
const nome1 = "Paula"
let idade1 = 13;

(idade1 >= 18) ?
    console.log(`${nome1} é maior de idade pois tem ${idade1} anos.`) :
    console.log(`${nome1} não é maior de idade pois tem ${idade1} anos.`);

    
// 2 - Faça um algoritmo que leia o nome e o salário de um funcionário. O funcionário terá um aumento de 18%, caso seu novo salário seja acima de R$3.000,00, ele deverá declarar imposto. Ao fim do algoritmo diga ao usuário seu nome, seu novo salário e se ele deverá ou não declarar imposto.
const nome2 = "José";
let salario = 3001
let aumento = 0;
let novoSalario = 0

salario > 3000 ? (
    aumento = (18 / 100) * salario,
    novoSalario = salario + aumento,
    console.log(`O funcionário ${nome2} tem o salário no valor de R$${novoSalario} reais e precisa declarar imposto. Antes seu salário era R$${salario} reais e teve um aumento de 18% que equivale a R$${aumento} reais`)
) : (
    console.log(`O funcionário ${nome2} tem o salário no valor de R$${salario} reais e não precisa declarar imposto.`)
)


// 3 - Faça um algoritmo que leia o nome e as três notas de uma disciplina de um aluno e ao final escreva o nome do aluno, sua média e se ele foi aprovado, sabendo-se que a média para aprovação é igual ou superior a 8.
let aluno = "Ricardo"
let notas = [5, 8, 9];
let somaNotas = 0;
let media = 0;

for (let i in notas) {
    let totalNotas = notas.length;
    somaNotas += notas[i]
    media = somaNotas / totalNotas;
}
media >= 8 ?
    console.log(`O aluno ${aluno} teve média ${media.toFixed(3)} e foi aprovado.`) :
    console.log(`O aluno ${aluno} teve média ${media.toFixed(3)} e não foi aprovado.`);



