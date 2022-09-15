function interagir(){
    let produto = prompt('Qual é o produto que você está comprando?')
    let preço = parseFloat(prompt(`Qual o preço do ${produto}?`))
    let desconto = preço *0.10

    let res = document.querySelector('#res')
    res.innerHTML = (`O Preço original era ${preço}.<br>
    Você acaba de ganhar R$${desconto} de desconto (-10%).<br>
    No fim, você vai pagar R$${preço-desconto} no item ${produto}`)

}