function changeHelloName() {
    let name = prompt("Escribe tu nombre");
    document.getElementById("saludos").innerHTML = "Hola, " + name;
}