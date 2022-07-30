enum Trabalho {
    Atriz,
    Padeiro
}

type Humano = {
    nome: string,
    idade: number,
    profissao: Trabalho
}

let pessoa1: Humano = {
    nome: 'Kezia',
    idade: 17,
    profissao: Trabalho.Atriz
};

let pessoa2: Humano = {
    nome: 'Italo',
    idade: 18,
    profissao: Trabalho.Padeiro
};

let pessoa3: Humano = {
    nome: 'Silia',
    idade: 58,
    profissao: Trabalho.Atriz
};

let pessoa4: Humano = {
    nome: "Messias",
    idade: 68,
    profissao: Trabalho.Padeiro
}
