const cantidad = document.querySelector(".cantidad");
const nombre = document.querySelector("#nombre");
const apellido = document.querySelector("#apellido");
const email = document.querySelector("#email");


let precio = 200;
const estudiante = 0.2;
const trainee = 0.5;
const junior= 0.85;

const resumen = document.querySelector("#resumen");
resumen.addEventListener("click", descuento);

const total = document.querySelector("#borrar");
total.addEventListener("click", borrarTotal)

function descuento(evento) {
    evento.preventDefault();

    if (Number(cantidad.value)) {
        const categoria = document.querySelector(".categoria");
        
        switch (categoria.value) {
            case "0": {
                precio *= cantidad.value;
                break;
            }
            case "estudiante": {
                precio *= cantidad.value * estudiante;
                break;
            }
            case "trainee": {
                precio *= cantidad.value * trainee;
                break;
            }
            case "junior": {
                precio *= cantidad.value * junior;
                break;
            }
        }

        document.querySelector("#total").innerHTML = `Total a pagar: $${precio}`;
       
    } else {
        document.querySelector(".cantidad").style.border = "2px solid red";
        cantidad.value = "";
        cantidad.placeholder = "Ingrese una cantidad";       
    }

    document.querySelector("#nombre").style.border = "2px solid red";
    nombre.value = "";

    document.querySelector("#apellido").style.border = "2px solid red";
    apellido.value = "";

    document.querySelector("#email").style.border = "2px solid red";
    email.value = "";

    alert("Completar los campos en rojo");

    borrarTotal(evento)
}

function borrarTotal() {

    document.querySelector(".total").textContent = "Total a pagar:"

    const form = document.querySelector(".ticketsForm");
    for (i = 0; i < 4; i++) {
        document.querySelector(".total" + form[i].className).style.border = "1px solid var(--gray-300)";
    }
}