const inverter = (string) => {
    let newString = string.split("").reverse().join("").split(" ").reverse().join(" ");
    return newString
}

const contarNumeroVogais = (word) => {
    let vowels = ["a", "e", "i", "o", "u"];
    //1ª FORMA
    // let numberOfVowels = 0;
    // for (let value = 0; value <= word.length - 1; value++) {
    //     if (vowels.includes(word[value].toLowerCase()))
    //         numberOfVowels++;
    // }
    // console.log(`Número de vogais que existe na string -> ${word}: ${numberOfVowels} vogais.`);

    //2ª forma
    let foundVowels = word.split('').filter(value => vowels.includes(value.toLocaleLowerCase())).join('');
    let totalVowels = 0;
    totalVowels = foundVowels.length;
    console.log(`String: ${word}. Vogais encontradas: ${foundVowels}. Total de vogais: ${totalVowels}`);
    return totalVowels;
}
// Extra: Criar a função (fazerRelatorio) que recebe uma string e retorna um objeto com a própria string, o inverso da string e quantas vogais ela tem “salve” => { palavra: “salve”, palavraInverso: “evlas”, numeroVogais: 2 }
const fazerRelatorio = (string, funcaoInverter, funcaoVogais) => {
    let inverter = funcaoInverter;
    let vogais = funcaoVogais;
    const object = {
        palavra: string,
        palavraInverso: inverter,
        numeroVogais: vogais
    }
    console.log(object);
    return object
}
// Extra2: Se receber algo diferente de string da um console.log(“oh carai”) e retorna undefined
const noString = (string) => {
    if (typeof string === 'string') {
        console.log("oh carai");
        return undefined
    }
}

let string = "Desenvolvedor back end";
let vowels = "aEI Ukn";
console.log(`${string} =>`,inverter(string));
contarNumeroVogais(vowels);
fazerRelatorio(string, inverter(string), contarNumeroVogais(string));
console.log(noString(vowels));
