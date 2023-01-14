setTimeout(cambiamensaje, 2300)

function cambiamensaje() {
    document.getElementById("mensaje-cargando").innerText = "Enviado!"
}

setTimeout(function() {
    alert("Recibiste un abracito")
}, 2400);

