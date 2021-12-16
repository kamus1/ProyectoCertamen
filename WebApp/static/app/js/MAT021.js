function contar_chekbox() {
    var contador = 0;
    for(var i = 1; i < 16; i++) {
        if(document.getElementById("cBox" + i).checked){
            contador++;
        };
    }
    return contador;
}


function id(length) {
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    var id = "";
    for (var x = 0; x < length; x++) {
        var i = Math.floor(Math.random() * chars.length);
        id += chars.charAt(i);
    }
    id = "/certame/?id="+id;
    var formulario = document.getElementById("formulario")
    //la action del formulario se pone en el id
    formulario.setAttribute("action", id);
}

function validacion(){
    var validado = true;
    var num_preguntras = document.getElementById("num_preg").value;
    
    var num_temas = contar_chekbox();
    if(num_temas > num_preguntras){
        alert("El número de temas seleccionados es mayor que el número de preguntas");
        var validado = false;
    }

    if(num_temas == 0){
        alert("Debe seleccionar al menos un tema");
        var validado = false;
    };
    
    if(validado == true){
        id(5);
    }

    return validado;
};

function showtime() {
    var tiempo = document.getElementById("timeSelec");

    var element = document.getElementById("time");
    var check = document.getElementById("cboxTime");
    if (check.checked) {
        element.style.display = "block";
        tiempo.setAttribute("value", "00:00");
    } else {
        element.style.display = "none";
        tiempo.setAttribute("value", "");
    }
}
