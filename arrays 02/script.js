let numeros = [1,2, 3];
numeros.push(4,5); 
console.log(numeros);

let numerais = [1, 2];
numeros.unshift(0);
console.log(numerais);

let nomes = ["Carlos", "Ana", "Bruno"];
nomes.sort();
console.log(nomes);

let notas = [85, 92, 78];
notas.sort((a, b) => a - b);
notas.sort((a, b) => b - a);
console.log(notas);

let sequencia = [1, 2, 3];
sequencia.reverse();
console.log(sequencia);