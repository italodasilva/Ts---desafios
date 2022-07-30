let funcionario = {
    codigo: 10,
    nome: 'João'
};


let funcionario2: {codigo: number, nome: string} = {
    codigo: 10,
    nome: 'joao'
}


interface Funcionario {  // Já conhece interfaces? https://blog.logrocket.com/types-vs-interfaces-in-typescript/
    codigo: number,
    nome: string
};

let funcionarioObj = {} as Funcionario;
funcionarioObj.codigo = 10;
funcionarioObj.nome = 'João';

let funcionarioObj2: Funcionario = {
    codigo: 10,
    nome: 'João'
}
