//[ ] Escreva um programa onde, você chame uma função enviando um número 
//(aceitar somente valores entre 1 e 10) e escrever a tabuada de 1 a 10 do valor lido.



const calculate = (number1) =>{
    
    if (10>=number1 && 0<number1 ){
        for (let i = 1; i <=10; i++){
            let result = number1*i
           let mult = (i)

            
            console.log(`${number1}*${mult} = ${result} `)
    }
}else{
    console.log("Por favor coloque um numero de 1 ao 10")
}
}

calculate(0)