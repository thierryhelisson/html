function calcula(){
var peso = Number(document.getElementById("peso").value)
var altura = Number(document.getElementById("altura").value)

var imc = peso / (altura^2)

if (peso = NaN){
    alert("Digite um numero valido")
}

if (imc < 18.5){
    resposta.innerHTML=`Seu imc é de: ${imc.toFixed(2)} - Voce esta abaixo do peso`
}
else if (imc < 25){
    resposta.innerHTML=`Seu imc é de: ${imc.toFixed(2)} - Voce esta no seu peso ideal`
}
else if (imc < 29.9){
    resposta.innerHTML=`seu imc é de: ${imc.toFixed(2)} - Levemente acima do peso`
}
else if(imc < 34.9){
    resposta.innerHTML=`seu imc é de: ${imc.toFixed(2)} Obesidade`
}
else if(imc < 39.9){
    resposta.innerHTML=`seu imc é de: ${imc.toFixed(2)} - Obesidade severa`
}
else{
    resposta.innerHTML=`seu imc é de: ${imc.toFixed(2)} - Obesidade morbida`
}
}