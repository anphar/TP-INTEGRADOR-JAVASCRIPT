const precio = 200;
let estudiante = 0.8;
let trainee = 0.5;
let junior= 0.15;

let totalPagar;

let cantidad = document.querySelector(".cantidad");

let resumen = document.querySelector("#resumen");
resumen.addEventListener("click", descuento);

let total = document.querySelector("#borrar");
total.addEventListener("click", borrarTotal);

function descuento(evento) {
    evento.preventDefault();

    if (Number(cantidad.value)) {
        let categoria = document.querySelector(".categoria");
        
        switch (categoria.value) {
            case "general": {
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
        alert("Completar los campos en rojo");    
    }    
}

function borrarTotal() {

    document.querySelector(".total").textContent = "Total a pagar:";

    let form = document.querySelector(".ticketsForm");
    for (i = 0; i < 4; i++) {
        document.querySelector(".total" + form[i].className);
    }
    alert("Se borraran los datos")
}