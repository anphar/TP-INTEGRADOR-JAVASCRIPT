const precio = 200;
let estudiante = 0.8;
let trainee = 0.5;
let junior= 0.15;

let totalPagar;

let cantidad = document.querySelector(".cantidad");
let nombre = document.querySelector("#nombre");
let apellido = document.querySelector("#apellido");
let email = document.querySelector("#email");


let resumen = document.querySelector("#resumen");
resumen.addEventListener("click", descuento);

let total = document.querySelector("#borrar");
total.addEventListener("click", borrarTotal);

function descuento(evento) {
    evento.preventDefault();

    if (Number(cantidad.value)) {
        let categoria = document.querySelector(".categoria");
        
        switch (categoria.value) {
            case "0": {
                totalPagar = precio * cantidad.value;
                break;
            }
            case "estudiante": {
                totalPagar = precio * cantidad.value * estudiante;
                break;
            }
            case "trainee": {
                totalPagar = precio * cantidad.value * trainee;
                break;
            }
            case "junior": {
                totalPagar = precio * cantidad.value * junior;
                break;
            }
        }

        document.querySelector(".total").innerHTML = `Total a pagar: $${totalPagar}`;
       
    } else {
        document.querySelector(".cantidad").style.border = "2px solid red";
        cantidad.value = "";
        cantidad.placeholder = "Ingrese una cantidad";     
    }
    
}

function borrarTotal() {

    document.querySelector(".total").textContent = "Total a pagar:";

    let form = document.querySelector(".ticketsForm");
    for (i = 0; i < 4; i++) {
        document.querySelector(".total" + form[i].className);
    }
}

function validar () {
    
    document.querySelector("#nombre").style.border = "2px solid red";
    nombre.value = "";

    document.querySelector("#apellido").style.border = "2px solid red";
    apellido.value = "";

    document.querySelector("#email").style.border = "2px solid red";
    email.value = "";


    alert("Completar los campos en rojo");

    borrarTotal(evento);
}