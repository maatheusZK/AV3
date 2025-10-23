let listaDeAfazeres = ["Comprar pão", "Estudar JavaScript", "Lavar louça"];

console.log("Lista inicial:", listaDeAfazeres);
console.log("Primeiro item:", listaDeAfazeres[0]);
console.log("Total de itens:", listaDeAfazeres.length);

listaDeAfazeres.push("Fazer exercícios");
listaDeAfazeres.unshift("Agendar médico");

console.log("Após adições:", listaDeAfazeres);

let afazerRemovidoFinal = listaDeAfazeres.pop();
console.log("Afazer removido do final:", afazerRemovidoFinal);

let afazerRemovidoInicio = listaDeAfazeres.shift();
console.log("Afazer removido do início:", afazerRemovidoInicio);

console.log("Após remoções:", listaDeAfazeres);

let listaOrganizada = [...listaDeAfazeres];

listaOrganizada.sort();
console.log("Lista organizada (ordem alfabética):", listaOrganizada);

listaOrganizada.reverse();
console.log("Lista organizada invertida:", listaOrganizada);

console.log("Lista original permanece:", listaDeAfazeres);
