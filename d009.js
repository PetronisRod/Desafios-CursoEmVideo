function interagir(){
    let nome = prompt('Qual o nome do funcionário?')
    let salario = Number(prompt(`Qual o salário de ${nome}?`))
    let reajuste = Number(prompt(`O salário de ${nome} vai ser reajustado em qual porcentagem?`))
    let aumento = salario*reajuste/100
    let salfinal = salario+aumento

    let res = document.querySelector('#res')
    res.innerHTML = (`O salário atual era R$${salario}. <br>
    Com um reajuste de ${reajuste}%, o salário vai aumentar R$${aumento} no próximo mês. <br>
    E a partir daí, ${nome} vai passar a ganhar R$${salfinal}.`)
}