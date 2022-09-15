function interagir(){
    
    let metros = Number(prompt("Digite uma distancia em metros"))
    let km = metros/1000
    let hm = metros/100
    let dam = metros/10
    let decímetros = metros*10
    let cm = metros*100
    let mm = metros*1000
    
    let res = document.querySelector("#res")
    let res1 = document.querySelector("#res1")
    res.innerHTML = (`A distancia de ${metros} metros corresponde a ...`)
    res1.innerHTML = (`${km} Quilometros (Km) <br>
    ${hm} hectômetros (Hm)<br>
    ${dam} decâmetros (Dam)<br>
    ${decímetros} decímetros (dm)<br>
    ${cm} centímetros (cm)<br>
    ${mm} milímetros (mm)`)

}
