//[ ] Escreva um programa onde, você chame uma função, e ela diga a hora exata!




const calculate = () =>{
    
    let data = new Date ();
    return console.log(data.getHours(),":",data.getMinutes() ,":" , data.getSeconds()) 
}
calculate()