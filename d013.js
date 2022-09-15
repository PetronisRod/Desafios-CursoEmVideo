let nome = prompt('Qual o nome do aluno?')

function interagir(){
    
    let n1 = Number(prompt(`Qual a 1a nota do ${nome}?`))
    let n2 = Number(prompt(`Qual a 2a nota do ${nome}?`))
    let n3 = Number(prompt(`Qual a 3a nota do ${nome}?`))
    let media = (n1+n2+n3)/3
    let res = document.querySelector('#res')
    
    if (media>=7){
        document.querySelector('#res').style.backgroundColor="green"
        res.innerHTML = (`Parabéns! <br>
        O aluno ${nome} foi aprovado com média ${media}.`)
    } else if (media<7 && media>=5){
        document.querySelector('#res').style.backgroundColor="gold"
        res.innerHTML = (`O aluno ${nome} está de recuperação com média ${media}`)
    } else {
        document.querySelector('#res').style.backgroundColor="red"
        res.innerHTML = (`O aluno ${nome} foi reprovado com média ${media}`)
    }
}