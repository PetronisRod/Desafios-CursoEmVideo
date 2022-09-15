function interacao(){
    let nome = prompt('Qual o seu nome?')
    let celcius = Number(prompt(`${nome} \nDigite uma temperatura em Celcius C°`))
    let kelvin = celcius + 273
    let Fahrenheit = celcius*1.8 +32

    let res = document.querySelector('#res')
    res.innerHTML = (`Oi ${nome}. A temperatura ${celcius} em C° é igual a ${kelvin} Kelvin \n e igual a ${Fahrenheit} em Fahrenheit`)
}
