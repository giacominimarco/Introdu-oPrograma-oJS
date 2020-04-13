
const usuarios = [
    { nome: "Carlos", tecnologias: ["HTML", "CSS"] },
    { nome: "Jasmine", tecnologias: ["JavaScript", "CSS"] },
    { nome: "Tuane", tecnologias: ["HTML", "Node.js"] }
];

let saida = '';

for (let usuario of usuarios) {
    saida += `${usuario.nome} trabalha com ${usuario.tecnologias}\n`;
}

function checaSeUsuarioUsaCSS() {
    // let newArray = []
    let teste = Boolean = false
    for (let usuario of usuarios) {
        if (usuario.tecnologias.indexOf('CSS') > -1) {
            // newArray.push(usuarios[i])
            teste = true
        }
    }
    return console.log(teste);
}

checaSeUsuarioUsaCSS(usuarios)

for (let usuario of usuarios) {

    if (usuario.tecnologias.indexOf('CSS') > -1) {
        console.log(`O usuário ${usuario.nome} trabalha com CSS`);
    }
}