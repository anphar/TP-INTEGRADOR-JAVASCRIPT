const resumen = document.querySelector("#resumen");
resumen.addEventListener("click", precio);

const total = document.querySelector("#borrar");
total.addEventListener("click", borrarTotal)

function precio(evento) {
    evento.preventDefault();

    const cantidad = document.querySelector(".cantidad");

    if (Number(cantidad.value)) {
        const categoria = document.querySelector(".categoria");
        let precio = 200;

        switch (categoria.value) {
            case "0": {
                precio *= cantidad.value;
                break;
            }
            case "estudiante": {
                precio *= cantidad.value * 0.2;
                break;
            }
            case "trainee": {
                precio *= cantidad.value * 0.5;
                break;
            }
            case "junior": {
                precio *= cantidad.value * 0.85;
                break;
            }
        }

        document.querySelector("#total").innerHTML = `Total a pagar: $${precio}`;
       
    } else {
        document.querySelector(".cantidad").style.border = "2px solid red";
        cantidad.value = "";
        cantidad.placeholder = "Ingrese una cantidad";
    }

}

function borrarTotal() {

    document.querySelector(".total").textContent = "Total a pagar:"

    const form = document.querySelector(".ticketsForm");
    for (i = 0; i < 4; i++) {
        document.querySelector(".total" + form[i].className).style.border = "1px solid var(--gray-300)";
    }
}