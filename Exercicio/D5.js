//[ ] Escreva um programa onde, você chame uma função mandando
//dois argumentos, 2 números, e a função responde qual número é maior

const calculate = (number1, number2) => {
    if(number1>number2){
        console.log(`O numero ${number1} e maior que o ${number2}`)
    }else{
        console.log(`O numero ${number2} e maior que o ${number1}`)
    }
}

calculate(5,6)

