var cabeca = document.getElementById('pecaCabeca')
var tronco = document.getElementById('pecaTronco')
var perna =  document.getElementById('pecaPerna')


trocar = (event) => {
var imgNew = event.target.src
var parte = event.target.parentElement.id
console.log(parte)
console.log(imgNew)
if(parte == "galeriaCabeca"){
    cabeca.src = imgNew
}
if(parte == "galeriaTronco"){
    tronco.src = imgNew
}
if(parte == "galeriaPerna"){
    perna.src = imgNew
}
}












aplicar = () =>{
    var img = document.getElementById('coletor').value
    console.log(img)
    var parte = document.getElementById('parte').value
    console.log(parte)
    if(parte == "cabeca"){
        cabeca.src = img
        var peca = document.getElementById('galeriaCabeca')
        peca.innerHTML += `<img src="${img}" class="peca" onclick="trocar(event)"></img>`
    }
    if(parte == "tronco"){
        tronco.src = img
        var peca = document.getElementById('galeriaTronco')
        peca.innerHTML += `<img src="${img}" class="peca" onclick="trocar(event)"></img>`
    }
    if(parte == "perna"){
        perna.src = img
        var peca = document.getElementById('galeriaPerna')
        peca.innerHTML += `<img src="${img}" class="peca" onclick="trocar(event)"></img>`
    }
}