/*8-[ ] Escreva um programa onde, você cria uma função geradora de desconto.
A função aceita 4 parâmetros (Nome do cliente, valor total da compra, um booleano que diz se é a primeira compra do cliente ou não, um booleando que diz se o cliente vai pagar a vista ou não)
Os descontos funcionam da seguinte forma:
//Se é a primeira compra do cliente, pagar a vista, e a compra for maior que R$ 1000 => 30% de desconto
//Se é a primeira compra do cliente, pagar a vista, e a compra for menor que R$ 1000, e maior que R$ 500 => 25% de desconto
//Se é a primeira compra do cliente, pagar a vista e a compra for menor que R$ 500 => desconto de 20%
//Se é a primeira compra do cliente, NÃO pagar a vista, e a compra for maior que R$ 1000 => 20% de desconto 
//Se é a primeira compra do cliente, NÃO pagar a vista, e a compra for menor que R$ 1000, e maior que R$ 500 => 15% de desconto
//Se é a primeira compra do cliente, NÃO pagar a vista e a compra for menor que R$ 500 => desconto de 10%
//Se NÃO é a primeira compra do cliente, pagar a vista, e a compra for maior que R$ 1000 => 20% de desconto
//Se NÃO é a primeira compra do cliente, pagar a vista, e a compra for menor que R$ 1000, e maior que R$ 500 => 15% de desconto
//Se NÃO é a primeira compra do cliente, pagar a vista e a compra for menor que R$ 500 => desconto de 10%
Se NÃO é a primeira compra do cliente, NÃO pagar a vista, e a compra for maior que R$ 1000 => 10% de desconto 
Se NÃO é a primeira compra do cliente, NÃO pagar a vista, e a compra for menor que R$ 1000, e maior que R$ 500 => 5% de desconto
Se NÃO é a primeira compra do cliente, NÃO pagar a vista e a compra for menor que R$ 500 => SEM DESCONTO- A função deve imprimir na tela:
Se o cliente recebeu desconto, imprima na tela um agradecimento pela compra, o valor total sem desconto, o valor total com desconto e a porcentagem de desconto que ele recebeu.
Se o cliente não recebeu desconto, imprima na tela um agradecimento pela compra, o valor total da sua compra e um cupom de desconto. Esse cupom deve ser um valor aleatório entre 10 e 20% para a próxima compra.
*/
const number = Math.random*(20-10)+10

function store(Nome, ValorTotaldaCompra, PrimeiraCompra, PagamentoAVista) {
    console.log(`Obrigado pela sua compra ${Nome} seu valor compra foi de R$${ValorTotaldaCompra}`)
    if (PrimeiraCompra && PagamentoAVista) {
        if (ValorTotaldaCompra > 1000) {
            ValorTotaldaCompra = ValorTotaldaCompra - ValorTotaldaCompra * 0.3

            console.log("Parabens você teve um desconto de 30% no valor de sua compra ")
        }
        else if (ValorTotaldaCompra < 1000 && ValorTotaldaCompra > 500) {
            ValorTotaldaCompra = ValorTotaldaCompra - ValorTotaldaCompra * 0.25
            console.log("Parabens você teve um desconto de 25% no valor de sua compra ")
        }
        else {
            ValorTotaldaCompra = ValorTotaldaCompra - ValorTotaldaCompra * 0.2
            console.log("Parabens você teve um desconto de 20% no valor de sua compra ")
        }
        console.log(`A sua compra no total foi de R$${ValorTotaldaCompra}`)
    }


    if (PrimeiraCompra && !PagamentoAVista) {
        if (ValorTotaldaCompra > 1000) {
            ValorTotaldaCompra = ValorTotaldaCompra - ValorTotaldaCompra * 0.2

            console.log("Parabens você teve um desconto de 20% no valor de sua compra ")
        }
        else if (ValorTotaldaCompra < 1000 && ValorTotaldaCompra > 500) {
            ValorTotaldaCompra = ValorTotaldaCompra - ValorTotaldaCompra * 0.15
            console.log("Parabens você teve um desconto de 15% no valor de sua compra ")
        }
        else {
            ValorTotaldaCompra = ValorTotaldaCompra - ValorTotaldaCompra * 0.1
            console.log("Parabens você teve um desconto de 10% no valor de sua compra ")
        }
        console.log(`A sua compra no total foi de R$${ValorTotaldaCompra}`)
    }
    
    if (!PrimeiraCompra && PagamentoAVista) {
        if (ValorTotaldaCompra > 1000) {
            ValorTotaldaCompra = ValorTotaldaCompra - ValorTotaldaCompra * 0.2

            console.log("Parabens você teve um desconto de 20% no valor de sua compra ")
        }
        else if (ValorTotaldaCompra < 1000 && ValorTotaldaCompra > 500) {
            ValorTotaldaCompra = ValorTotaldaCompra - ValorTotaldaCompra * 0.15
            console.log("Parabens você teve um desconto de 15% no valor de sua compra ")
        }
        else {
            ValorTotaldaCompra = ValorTotaldaCompra - ValorTotaldaCompra * 0.1
            console.log("Parabens você teve um desconto de 10% no valor de sua compra ")
        }
        console.log(`A sua compra no total foi de R$${ValorTotaldaCompra}`)

    }
    if (!PrimeiraCompra && !PagamentoAVista) {
        
        
        if (ValorTotaldaCompra > 1000) {
            ValorTotaldaCompra = ValorTotaldaCompra - ValorTotaldaCompra * 0.1

            console.log("Parabens você teve um desconto de 20% no valor de sua compra ")
        }
        else if (ValorTotaldaCompra < 1000 && ValorTotaldaCompra > 500) {
            ValorTotaldaCompra = ValorTotaldaCompra - ValorTotaldaCompra * 0.05
            console.log("Parabens você teve um desconto de 15% no valor de sua compra ")
        }
        else {
            ValorTotaldaCompra
            console.log(`Parabens você ganhou um cupom de desconte de:`,(Math.random()*(20-10)+10).toFixed(0),`%`)
        }
        console.log(`A sua compra no total foi de R$${ValorTotaldaCompra}`)

    }
}

store(`Alice`, 100, false, true)



