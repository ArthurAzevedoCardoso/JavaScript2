//[ ] Escreva um programa onde, você chame uma função, e ela diga que ano estamos!

const calculate = () =>{
    
    let hoje = new Date ();

    return console.log(hoje.getDate().toString(),"/",String(hoje.getMonth() + 1),
    "/",hoje.getFullYear())
}


calculate()