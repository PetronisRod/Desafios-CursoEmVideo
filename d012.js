function interagir(){
    let anterior = Number(prompt('Qual era o preço do produto?'))
    let atual = Number(prompt('Qual é o preço atual do produto?'))
    let res = document.querySelector('#res')
    
    let diferença = atual-anterior
    if (diferença<0){
        diferença = diferença* -1
    } 
  
    let porcentagem = (diferença/anterior)*100
        
    
    if (anterior < atual){
        res.innerHTML = (`Hoje o produto está mais caro em R$${diferença} em relação ao preço anterior.<br>
        Uma variação de ${porcentagem}% <strong>a mais</strong>.`)
    } else if (anterior > atual){
        res.innerHTML = (`Hoje o produto está mais barato em R$${diferença} em relação ao preço anterior.<br>
        Uma variação de ${porcentagem}% a menos.`)
    } else{
        res.innerHTML = (`Hoje o produto está com o mesmo preço.<br>
        O preço não subiu em relação ao preço anterior.<br>`)
    }

}