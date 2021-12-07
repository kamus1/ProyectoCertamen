    //carrusel de preguntas
    var carrusel = document.getElementById("carrusel");
    carrusel.setAttribute("class", "carousel-item active ");

    var myCarousel = document.querySelector('#carouselExampleDark')
    var carousel = new bootstrap.Carousel(myCarousel, {
      interval: false,
      wrap: false
    })
    
    //tiempo
    if (!(document.getElementById("time") == null)) {
      var tim = document.getElementById("time").innerHTML.split(":");
      var segundos = parseInt(tim[0]) * 3600 + parseInt(tim[1]) * 60;
      var timer = setInterval(function () {

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