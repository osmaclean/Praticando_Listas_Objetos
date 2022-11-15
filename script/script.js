// PRIMEIRA PARTE - MODELAGEM 


// 1º Objeto 

let objetoPessoa = {
    nome: "Lucas",
    anoDeNascimento: 1997,
    cpf: 46154821853,
    cidade: "São Paulo",
    estado: "São Paulo",
    logradouro: "Rua",
    curso: "Programação"
}

// 2º Objeto

let objetoEscola = {
    nome: "Colégio Soer",
    cnpj: 0707077000144,
    areaDeAtuacao: "Educação",
    cidade: "Rio de Janeiro",
    estado: "Rio de Janeiro",
    logradouro: "Avenida",
    curso: "Ensino Médio"
}

// 3º Objeto

let objetoCurso = {
    nome: "Curso de Inglês",
    duracaoEmAnos: 4,
    turma: 51,
    modulos: 9
}

// 4º Objeto 

let objetoEndereco = {
    cidade: "Fortaleza",
    estado: "Ceará",
    logradouro: "Prédio",
    cep: 60165121
}

// 5º Objeto 

let objetoTurma = {
    professores: ["Jair", "Adalberto", "Felipe", "Lucas", "Rogério", "Luiz"],
    alunos: ["Marcelo", "João", "Márcio", "Maurício"],
    dataInicio: Date.now(),
    dataPrevistaFormatura: 12062029
}

// SEGUNDA PARTE - MANIPULAÇÃO

// Dado o objeto 

const figure = {
    name: "Carl",
    classes: ["Warrior ",],
    leader_trend: true,
    power: 6,
    allied: true
}

// Primeira Tarefa - Retornar o Nome

function returnName() {
    console.log(figure.name);
}
returnName();

// Segunda Tarefa - Retornar a Classe 

function verifyClass() {
    let retorno = ""
    for (let i = 0; i < figure.classes.length; i++) {
        if ([] == 0) {
            retorno += figure.classes[i];
        } else if ([] !== 0) {
            retorno += figure.classes[i];
        }
    }
    return retorno;
}
console.log(verifyClass());

// Terceira Tarefa - Retornar o Poder Real 

function realPower() {
    if (figure.leader_trend == true) {
        console.log(Math.pow(figure.power, 2));
    } else {
        console.log(figure.power);
    }
}
realPower();

// Quarta Tarefa - A função deve adicionar um valor no objeto.

function inserNewClass() {
    let volta = ""
    for (let i = 0; i < figure.classes.length; i++) {
        if ([] < 3) {
            figure.classes[1] = "Barbarious"
            volta += figure.classes[i];
        }  else if ([] > 3) {
            volta += "Este personagem não pode estar em mais classes"
        }
    }
    return volta
}
console.log(inserNewClass());

















































































































