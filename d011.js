function interagir() {
    let ano = Number(prompt('Qual é o ano que você quer verificar?'))
    let res = document.querySelector('#res')
    
    if (ano % 4 == 0 && ano % 100 == 0 && ano % 400 == 0) {
        res.innerHTML = (`O ano ${ano} é um ano bissexto`)

    } else if (ano == null || ano <= 0) {
        res.innerHTML = ('Ano inválido')
    } else {
        res.innerHTML = (`O ano ${ano} não é um ano bissexto`)
    }
}