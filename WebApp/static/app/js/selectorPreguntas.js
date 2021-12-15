    //carrusel de preguntas
    var carrusel = document.getElementById("carrusel");
    carrusel.setAttribute("class", "carousel-item active ");

    hora_termino = document.getElementById("hora_termin").innerHTML;
    //tiempo
    if (!(document.getElementById("time") == null)) {
      // var tim = document.getElementById("time").innerHTML.split(":");
      // var segundos = parseInt(tim[0]) * 3600 + parseInt(tim[1]) * 60;
      var timer = setInterval(function () {

        var tiempo = new Date();
        var hora = tiempo.getHours();
        var min = tiempo.getMinutes();
        var seg = tiempo.getSeconds();

        

        var segundos_actuales = hora * 3600 + min * 60 + seg;

        
        var hora_termino_split = hora_termino.split(":");
        var hora_t = parseInt(hora_termino_split[0], 10);
        var min_t =  parseInt(hora_termino_split[1], 10);
        var seg_t =  parseInt(hora_termino_split[2], 10);
        var segundos_termino = hora_t * 3600 + min_t * 60 + seg_t;

        var segundos = segundos_termino - segundos_actuales;

        if(segundos < 0){
          segundos = 86400 + segundos;
        }

        var min = (segundos - segundos % 60) / 60;
        var seg = segundos % 60;

        var hora = (min - min % 60) / 60;
        var min = min % 60;

        if (hora < 10) {
          hora = "0" + hora;
        }
        if (min < 10) {
          min = "0" + min;
        }
        if (seg < 10) {
          seg = "0" + seg;
        }
        var time = hora + ":" + min + ":" + seg;
        document.getElementById("time").innerHTML = time;

        if (segundos == 0) {
          clearInterval(timer);
          document.formulario.submit();
        }
        segundos--;
      }, 1000)
    }



    var myCarousel = document.querySelector('#carouselExampleDark')
    var carousel = new bootstrap.Carousel(myCarousel, {
      interval: false,
      wrap: false
    })