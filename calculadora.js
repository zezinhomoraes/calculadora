let message = prompt("Olá mundo?")

if(message == "sim"){
    const body = document.querySelector("main")
    body.innerHTML="OLÁ MUNDO!"
}else if(message == "não"){
    alert("to nem ai")
}