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
    classes: ["Warrior", "Jedi", "Padawan"],
    leader_trend: true,
    power: 6,
    allied: true
}

// Primeira Tarefa - Retornar o Nome

function returnName() {
    console.log(figure.name)
}
returnName();

// Segunda Tarefa - Retornar a Classe 

function verifyClass() {
    if ([] == 0) {
        console.log(figure.classes[0])
    } else if ([] > 0){
        console.log(figure.classes)
    }
}
verifyClass();

// Terceira Tarefa - Retornar o Poder Real 