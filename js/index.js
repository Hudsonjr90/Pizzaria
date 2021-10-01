// uniendo js
document.write('<script src="./js/menu.js"></script>');
document.write('<script src="./js/loader.js"></script>');

// ---Variables----
var btnOrdenar = document.querySelector('#ordernar');
var seccionOrdenar = document.querySelector('.seccionOrdenar');

var divReservaciones = document.querySelector('.div__reservacion');
var enviar = document.getElementById('enviar');

// Estilos----
var estilos = {
    error: 'red',
    correcto: 'green',
    botonQuitar: `<p id="quitar">X</p>`,
    heiOrdenar: '100vh'
};
var {error, correcto, botonQuitar, heiOrdenar} = estilos;

var templateOrdenar = `
<div class="padreQui" id="ordenar" >
    <div class="divQuitar">
        ${botonQuitar}
    </div>
    <div class="divOrdenar" >
        <h1>
            Fique Por Dentro
        </h1>
        <div>
            <label for="exampleInputEmail1">Nome</label>
            <input type="name" class="form-control" id="name" aria-describedby="emailHelp" placeholder="seu nome" >
            <small id="errorName" class="form-text">
            </small>

            <label for="">Email</label>
            <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="seu email" >
            <small id="errorEmail" class="form-text ">
            </small>
        </div>
        <div>
            <a class="boton1" id="validForm" href="#ss">
                Enviar
            </a>
        </div>
    </div>
</div>
`;

// ----Clases----

class Interfaz {
    imprimirMensaje(mensaje, tipo){
        
        var errorEmail = document.querySelector('#errorEmail');

        if(tipo === 'error'){
            errorEmail.innerHTML = `${mensaje}`;
            errorEmail.style.color = error;

        }else {
            errorEmail.innerHTML = `${mensaje}`;
            errorEmail.style.color = correcto;
        }
    }
}

// ----Event Listener----

eventListeners();

function eventListeners(){
    btnOrdenar.addEventListener('click', mostrarOrdenar);
}
// ----Funciones----

//mostrar ordenar
function mostrarOrdenar() {
    seccionOrdenar.innerHTML = templateOrdenar;
    seccionOrdenar.style.height = heiOrdenar;

    var btnValidar = document.querySelector('#validForm');

    //event validar form
    btnValidar.addEventListener('click', validarForm);

    var btnQuitar = document.querySelector('#quitar');
    btnQuitar.addEventListener('click', quitarOrdenar);
}

//validar formulario
function validarForm() {
    var inputName = document.querySelector('#name').value;
    var inputEmail = document.querySelector('#email').value;

  var ui = new Interfaz();

    if(inputName == '' || inputEmail == ''){
        ui.imprimirMensaje('Compvara los campos correctamente', 'error');
    }else {
        ui.imprimirMensaje('Compvarado', 'correcto');
        setTimeout(function(){
            quitarOrdenar();
        },1000);
    }
}

function quitarOrdenar() {
    seccionOrdenar.innerHTML = '';
}
