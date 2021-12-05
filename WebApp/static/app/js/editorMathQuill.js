//Da formato al problema escrito, aunque en un principio no hay nada, *se podria borrar
var problemSpan = document.getElementById('problem');
MQ.StaticMath(problemSpan);

//campo para escribir el problema, define el campo mathquill editable
var answerSpan = document.getElementById('answer');
var answerMathField = MQ.MathField(answerSpan, {
    handlers: {
        edit: function () {
            var enteredMath = answerMathField.latex(); // Get entered math in LaTeX format

            //escribe por consola el texto escrito en formato LaTeX, es para probar, *se puede borrar
            //console.log(enteredMath);
            //antigua funcion 
            //function escribe(id_of_input){
            //document.getElementById("answer").innerHTML =enteredMath;
            //jQuery para añdir la pregunta en latex a un input
            //$("#id_texto").val('\\(' + enteredMath +'\\)');
            //var input_id = '#'+id_of_input;
            //$(input_id).val($(input_id).val() + enteredMath);}


            //boton escribe el problema editado en pantalla
            function escribe(id_of_input) {
                document.getElementById("problem").innerHTML = enteredMath;

                var input_id = '#' + id_of_input;
                $(input_id).val($(input_id).val() + (' \\(' + enteredMath + '\\)'));
            }
            document.getElementById("boton-escribir").onclick = function () {
                escribe("id_texto");
                //cambia el formato de latex para visualizarlo en mathquill
                var problemSpan = document.getElementById('problem');
                MQ.StaticMath(problemSpan);

            }

        }
    }

});

/* //posible función para previsualizar la pregunta escrita
function previsualizar(){
    preguntaCreada = $("#id_texto").val();
    console.log(preguntaCreada);
    document.getElementById("previzualizacion-pregunta").innerHTML= preguntaCreada;
}
document.getElementById("ver-pregunta").onclick = function(){
    previsualizar();
}

*/


//DESPLEGABLE

$('#demo').show();

$('#btn1').click(function () {
    $('.collapse').hide();
    $('#demo').show();
    // css propias
    $("#btn1").css('background', '#3D56B2');
    $("#btn1").css('border-style', 'solid');
    $("#btn1").css('border-color', '#14279B #14279B #3D56B2');


    //css inpropias
    $("#btn2").css('background', 'transparent');
    $("#btn2").css('border', 'none');

});
$('#btn2').click(function () {
    $('.collapse').hide();
    $('#demo1').show();

    //css propias
    $("#btn2").css('background', '#3D56B2');
    $("#btn2").css('border-style', 'solid');
    $("#btn2").css('border-color', '#14279B #14279B #3D56B2');

    //css inpropias
    $("#btn1").css('background', 'transparent');
    $("#btn1").css('border', 'none');

});





//BOTONES

// raiz cuadrada
var raizCuadrada = document.getElementById('raizCuadrada');
MQ.StaticMath(raizCuadrada);

function botonRaizCuadrada() {
    answerMathField.cmd('\\sqrt');
    answerMathField.focus() // centra el cursor en la ultima función escrita
}
document.getElementById("raizCuadrada").onclick = function () {
    botonRaizCuadrada();
}

// elevar al cuadrado
var xAlCuadrado = document.getElementById('xAlCuadrado');
MQ.StaticMath(xAlCuadrado);

function botonxAlCuadrado() {
    answerMathField.write('^{2}');
    answerMathField.focus()
}
document.getElementById("xAlCuadrado").onclick = function () {
    botonxAlCuadrado();
}

//elevar

var elevar = document.getElementById('elevar');
MQ.StaticMath(elevar);

function botonelevar() {
    answerMathField.cmd('^');
    answerMathField.focus()
}
document.getElementById("elevar").onclick = function () {
    botonelevar();
}

//raiz n
var raizN = document.getElementById('raizN');


function botonraizN() {
    answerMathField.cmd('\\nthroot');
    answerMathField.focus()
}
document.getElementById("raizN").onclick = function () {
    botonraizN();
}


//fraccion
var fraccion = document.getElementById('fraccion');
MQ.StaticMath(fraccion);

function botonfraccion() {
    answerMathField.write('\\frac{}{}');
    answerMathField.focus()
}
document.getElementById("fraccion").onclick = function () {
    botonfraccion();
}


//logaritmo
var logaritmo = document.getElementById('logaritmo');
MQ.StaticMath(logaritmo);

function botonlogaritmo() {
    answerMathField.write('\\log_{}()');
    answerMathField.focus()
}
document.getElementById("logaritmo").onclick = function () {
    botonlogaritmo();
}

//limite
var limite = document.getElementById('limite_1');
MQ.StaticMath(limite);

function botonlimite() {
    answerMathField.write('\\lim_{\\to}');
    answerMathField.focus()
}
document.getElementById("limite_1").onclick = function () {
    botonlimite();
}

//pi
var pi = document.getElementById('pi');
MQ.StaticMath(pi);

function botonpi() {
    answerMathField.write('\\pi');
    answerMathField.focus()
}
document.getElementById("pi").onclick = function () {
    botonpi();
}

//theta
var theta = document.getElementById('theta');
MQ.StaticMath(theta);

function botontheta() {
    answerMathField.write('\\theta');
    answerMathField.focus()
}
document.getElementById("theta").onclick = function () {
    botontheta();
}

//infinito
var inf = document.getElementById('inf');
MQ.StaticMath(inf);

function botoninf() {
    answerMathField.write('\\infty');
    answerMathField.focus()
}
document.getElementById("inf").onclick = function () {
    botoninf();
}

//menos infinito
var negativoinf = document.getElementById('negativoinf');
MQ.StaticMath(inf);

function botonnegativoinf() {
    answerMathField.write('-\\infty');
    answerMathField.focus()
}
document.getElementById("negativoinf").onclick = function () {
    botonnegativoinf();
}

//numero de euler
var e = document.getElementById('e');
MQ.StaticMath(e);

function botone() {
    answerMathField.write('e');
    answerMathField.focus()
}
document.getElementById("e").onclick = function () {
    botone();
}

//numero de euler exp
var e_exp = document.getElementById('e_exp');
MQ.StaticMath(e_exp);

function boton_e_exp() {
    answerMathField.write('e\\^{}');
    answerMathField.focus()
}
document.getElementById("e_exp").onclick = function () {
    boton_e_exp();
}

//logaritmo natural
var logaritmo_natural = document.getElementById('logaritmo_natural');
MQ.StaticMath(logaritmo_natural);

function botonlogaritmo_natural() {
    answerMathField.write('\\ln ()');
    answerMathField.focus()
}
document.getElementById("logaritmo_natural").onclick = function () {
    botonlogaritmo_natural();
}

//logaritmo base10
var logaritmo_base10 = document.getElementById('logaritmo_base10');
MQ.StaticMath(logaritmo_base10);

function botonlogaritmo() {
    answerMathField.write('\\log_{10} ()');
    answerMathField.focus()
}
document.getElementById("logaritmo_base10").onclick = function () {
    botonlogaritmo();
}

//valor absoluto
var valor_absoluto = document.getElementById('valor_absoluto');
MQ.StaticMath(valor_absoluto);

function botonvalor_absoluto() {
    answerMathField.write('\\left|\\right|');
    answerMathField.focus()
}
document.getElementById("valor_absoluto").onclick = function () {
    botonvalor_absoluto();
}

//menor_igual
var menor_igual = document.getElementById('menor_igual');
MQ.StaticMath(menor_igual);

function botonmenor_igual() {
    answerMathField.write('\\leq');
    answerMathField.focus()
}
document.getElementById("menor_igual").onclick = function () {
    botonmenor_igual();
}

//mayor_igual
var mayor_igual = document.getElementById('mayor_igual');
MQ.StaticMath(mayor_igual);

function botonmayor_igual() {
    answerMathField.write('\\geq');
    answerMathField.focus()
}
document.getElementById("mayor_igual").onclick = function () {
    botonmayor_igual();
}

//desigual
var desigual = document.getElementById('desigual');
MQ.StaticMath(desigual);

function botondesigual() {
    answerMathField.write('\\neq');
    answerMathField.focus()
}
document.getElementById("desigual").onclick = function () {
    botondesigual();
}



//integral definida
var integral_definida = document.getElementById('integral_definida');
MQ.StaticMath(integral_definida);

function botonintegral_definida() {
    answerMathField.write('\\int_{}');
    answerMathField.focus()
}
document.getElementById("integral_definida").onclick = function () {
    botonintegral_definida();
}

//derivada
var derivada = document.getElementById('derivada');
MQ.StaticMath(derivada);

function botonderivada() {
    answerMathField.write('\\frac{d}{d\\left(\\right)}\\left(\\right)');
    answerMathField.focus()
}
document.getElementById("derivada").onclick = function () {
    botonderivada();
}

//n_derivada
var n_derivada = document.getElementById('n_derivada');
MQ.StaticMath(n_derivada);

function botonn_derivada() {
    answerMathField.write('\\frac{d\\  ^{}}{d\\left(\\right)^{}}\\left(\\right)');
    answerMathField.focus()
}
document.getElementById("n_derivada").onclick = function () {
    botonn_derivada();
}

//derivada parcial
var derivada_parcial = document.getElementById('derivada_parcial');
MQ.StaticMath(derivada_parcial);

function botonderivada_parcial() {
    answerMathField.write('\\frac{\\partial}{\\partial\\left(\\right)}\\left(\\right)');
    answerMathField.focus()
}
document.getElementById("derivada_parcial").onclick = function () {
    botonderivada_parcial();
}

//derivada parcial n
var derivada_parcial_n = document.getElementById('derivada_parcial_n');
MQ.StaticMath(derivada_parcial_n);

function botonderivada_parcial_n() {
    answerMathField.write('\\frac{\\partial\\  ^{}}{\\partial\\left(\\right)^{}}\\left(\\right)');
    answerMathField.focus()
}
document.getElementById("derivada_parcial_n").onclick = function () {
    botonderivada_parcial_n();
}

//derivada parcial mixta
var derivada_parcial_mixta = document.getElementById('derivada_parcial_mixta');
MQ.StaticMath(derivada_parcial_mixta);

function botonderivada_parcial_mixta() {
    answerMathField.write('\\frac{\\partial\\  ^2}{\\partial\\left(\\right) \\ \\partial\\left(\\right)}\\left(\\right)');
    answerMathField.focus()
}
document.getElementById("derivada_parcial_mixta").onclick = function () {
    botonderivada_parcial_mixta();
}

//integral 
var integral = document.getElementById('integral');
MQ.StaticMath(integral);

function botonintegral() {
    answerMathField.write('\\[\\int\\]');
    answerMathField.focus()
}
document.getElementById("integral").onclick = function () {
    botonintegral();
}

//sumatoria 
var sumatoria = document.getElementById('sumatoria');
MQ.StaticMath(sumatoria);

function botonsumatoria() {
    answerMathField.write('\\sum_{}^{}');
    answerMathField.focus()
}
document.getElementById("sumatoria").onclick = function () {
    botonsumatoria();
}

//productoria 
var productoria = document.getElementById('productoria');
MQ.StaticMath(productoria);

function botonproductoria() {
    answerMathField.write('\\prod_{}^{}');
    answerMathField.focus()
}
document.getElementById("productoria").onclick = function () {
    botonproductoria();
}

//limite_2
var limite_2 = document.getElementById('limite_2');
MQ.StaticMath(limite_2);

function botonlimite_2() {
    answerMathField.write('\\lim_{\\to {}^-}');
    answerMathField.focus()
}
document.getElementById("limite_2").onclick = function () {
    botonlimite_2();
}

//limite_3
var limite_3 = document.getElementById('limite_3');
MQ.StaticMath(limite_3);

function botonlimite_3() {
    answerMathField.write('\\lim_{\\to {}^+}');
    answerMathField.focus()
}
document.getElementById("limite_3").onclick = function () {
    botonlimite_3();
}