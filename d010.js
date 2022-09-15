function interagir(){
    let a = Number(prompt('Qual é o valor de a?'))
    let b = Number(prompt('Qual é o valor de b?'))
    let c = Number(prompt('Qual é o valor de c?'))
    let delta = (b**2)-(4*a*c)

    let res = document.querySelector('#res')
    res.innerHTML = (`O calculo realizado será Δ = ${a}² - 4 x ${a} x ${c} <br>
    O Valor calculado foi Δ = ${delta}`)
}