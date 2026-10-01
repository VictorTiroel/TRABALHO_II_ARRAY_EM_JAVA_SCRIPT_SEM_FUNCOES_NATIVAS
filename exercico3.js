const MeuArray = require("./MeuArray");

let exercicio3 = new MeuArray();

exercicio3.adicionar("joao");
exercicio3.adicionar("joao");
exercicio3.adicionar("pedro");
exercicio3.adicionar("augusto");
exercicio3.adicionar("luiz");
exercicio3.adicionar("pedro");
exercicio3.adicionar("carlos");
exercicio3.adicionar("carlos");
console.log(exercicio3.encontrarDuplicados());
exercicio3.inserirNaPosicao(2, "carlos");
exercicio3.toString();
exercicio3.removerNoIndice(0);
exercicio3.toString();
exercicio3.removerPorValor("joao");
exercicio3.toString();