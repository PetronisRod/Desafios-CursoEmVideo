function interagir(){
    
    let produto = prompt("Que produto você está comprando?");
    let custo = Number(prompt(`Quanto custa ${produto} que você está comprandos?`))
    
    let pgto = Number(prompt(`Qual foi o valor que você deu para pagar ${produto}?`))
    let troco = pgto-custo

    if (pgto<custo){
        alert(`Você pagou R$ ${pgto} e o produto custa R$ ${custo}. \n Tente Novamente pagando ao menos o valor do produto!`)
    } else{    
    alert(`Você comprou ${produto} que custou R$ ${custo}.\n Você Deu R$ ${pgto} em dinheiro e vai receber R$ ${troco} de troco.\n
    Volte Sempre!`)    }
}
