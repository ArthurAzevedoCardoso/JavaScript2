//6-[] A prefeitura de uma cidade fez uma pesquisa entre seus habitantes, 
//coletando dados sobre o salário e número de filhos.
//A prefeitura deseja saber:
//- média do salário da população; 
// - média do número de filhos; 
//- maior salário; 
//- O final da leitura de dados se dará com a entrada de um salário negativo. 
//- Faça isso usando uma função!

let people = [
    {
        numberOfChildren:2,
        salary:2000
    },
    {
        numberOfChildren:5,
        salary:3000
    },
    {
        numberOfChildren:1,
        salary:5000
    },
    {
        numberOfChildren:0,
        salary:2000
    },
    {
        numberOfChildren:2,
        salary:-2000
    },

]

function findAverageAmdHighestSalary(peopleInformation) {

    let i = 0
    let averageSalary = 0  //Media salaria 
    let averageChildren = 0 //Media de filhos
    let highestSalary = 0 //O salario mais alto 

    while(peopleInformation[i].salary > 0) // pega a posição do peopleInformatio for menor do que 0
    {
        averageSalary = averageSalary + peopleInformation[i].salary /* Ele armazena a varialvel de media de salario e SOMA com a posição que esta a informação */
        averageChildren = averageChildren + peopleInformation[i].numberOfChildren
        peopleInformation[i].salary > highestSalary ? highestSalary = peopleInformation[i].salary : highestSalary = highestSalary
        i++
    }

    console.log(`Média de salário R$${(averageSalary/i).toFixed(0)}`)
    console.log(`Média de filhos ${(averageChildren/i).toFixed(0)}`)
    console.log(`Maior Salário R$${highestSalary}`)
}

findAverageAmdHighestSalary(people)