/**
 * Criar um programa que calcula a média
 * das turmas de students e enviar 
 * mensagem do cálculo da média.
*/

const classA = [
    {
        name: "Marco",
        grade: 10
    },
    {
        name: "Pedro",
        grade: 8
    },
    {
        name: "Fulano",
        grade: 2.0
    }

]
const classB = [
    {
        name: "Aluno1",
        grade: 6
    },
    {
        name: "Aluno2",
        grade: 3
    },
    {
        name: "Aluno3",
        grade: 5.0
    }

]

function calculateAverage(students) {
    let sum = 0;

    for (let i = 0; i < students.length; i++) {
        sum += students[i].grade
    }

    const average = sum / students.length
    return average
}

function sendMessage(turma, average) {
    if (average > 5) {
        console.log(`${turma} average: ${average.toFixed(2)}. Congrats`);
    } else {
        console.log(`${turma} average: ${average.toFixed(2)}. Is not good`);
    }
}

/**
 * MArcar um student como flunked se a grade 
 * form menor que 5. 
 * E tambem enviar uma mensagem.
 */

function markAsFlunked(student) {
    student.flunked = false;
    
    if (student.grade < 5) {
        student.flunked = true
    }
    // console.table(students)
}

function sendFlunkedMessage(student) {
    if (student.flunked) {
        console.log(`Students ${student.name} is flunked!`)
    }
}

function studentsReprovados(students) {
    for (let student of students) {
        markAsFlunked(student);
        sendFlunkedMessage(student);
    }
}
const average1 = calculateAverage(classA);
const average2 = calculateAverage(classB);

sendMessage(`Class A`, average1) //parametros da função
sendMessage(`Class B`, average2)

studentsReprovados(classA)
studentsReprovados(classB)