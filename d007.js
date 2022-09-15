let cotacao = Number(prompt('Antes de mais nada. Quanto está a cotação do Dólar agora?'))

function interagir(){
    
    let real = Number(prompt('Quantos R$ você tem na carteira?'))
    let dolar = real/cotacao

    let res = document.querySelector("#res")
    res.innerHTML = (`Considerando a cotação de hoje em R$${cotacao}\n
    Tendo na carteira R$${real}, você teria US$${dolar}.`)
}