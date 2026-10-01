class MeuArray {
    #items = []
    #tamanho = 0;

    adicionar(elemento) {
        this.#items[this.#tamanho] = elemento;

        this.#tamanho++;
    }
    //push
    
    editar(indice, novoValor) {
        this.#items[indice] = novoValor;
    }
    //splice

    remover() {
        if (this.#tamanho === 0) {
            return undefined;
        }

        const ultimoItem = this.#items[this.#tamanho - 1];

        delete this.#items[this.#tamanho - 1];

        this.#tamanho--;

        return ultimoItem;
    }
    //pop

    obterElemento(indice) {
        if (indice < 0 || indice >= this.#tamanho) {
            return undefined;
        }
        return this.#items[indice];
    }

    obterIndice(valor) {
        let indice_encontrado = -1;
        for (let i = 0; i < this.#tamanho; i++) {
            if (this.#items[i] === valor) {
                indice_encontrado = i;
                break;
            }
        }
        return indice_encontrado;
    }

    tamanhoArray() {
        return this.#tamanho;
    }

    limpar() {
        this.#items = [];
        this.#tamanho = 0;
    }

    toString() {
        console.table(this.#items);
    }

// encontrar duplicados
    encontrarDuplicados() {
        const duplicados = [];

        for (let i = 0; i < this.#tamanho; i++) {
            for (let j = i + 1; j < this.#tamanho; j++) {
                if (this.#items[i] === this.#items[j]) {
                    let jaRegistrado = false;
                    for (let k = 0; k < duplicados.length; k++) {
                        if (duplicados[k].valor === this.#items[i]) {
                            duplicados[k].posicoes[duplicados[k].posicoes.length] = j;
                            jaRegistrado = true;
                            break;
                        }
                    }

                    if (!jaRegistrado) {
                        duplicados[duplicados.length] = {
                            valor: this.#items[i],
                            posicoes: [i, j]
                        };
                    }
                }
            }
        }

        return duplicados;
    }

// inserir em posição especifica
    inserirNaPosicao(indice, elemento) {
        if (indice < 0 || indice > this.#tamanho) {
            return false;
        }

        for (let i = this.#tamanho; i > indice; i--) {
            this.#items[i] = this.#items[i - 1];
        }

        this.#items[indice] = elemento;
        this.#tamanho++;

        return true;
    }

// remover pelo indice
    removerNoIndice(indice) {
        if (indice < 0 || indice >= this.#tamanho) {
            return undefined;
        }

        const itemRemovido = this.#items[indice];

        for (let i = indice; i < this.#tamanho - 1; i++) {
            this.#items[i] = this.#items[i + 1];
        }

        delete this.#items[this.#tamanho - 1];
        this.#tamanho--;

        return itemRemovido;
    }

// remover polo valor
    removerPorValor(valor) {
        const indice = this.obterIndice(valor);

        if (indice === -1) {
            return undefined;
        }

        return this.removerNoIndice(indice);
    }
}

module.exports = MeuArray;