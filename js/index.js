// Variables
var divMenu = document.querySelector('.divMenu');
var estadoM = document.querySelector('.navs');
estadoM = false;

var padreNav = document.querySelector('.padreNav');
var botonMenu = document.querySelector('#controlA');

//template menu
var templateMenu = `
<div class="menu">
  <div>
    <a href=""><ion-icon name="home-outline"></ion-icon>Início</a>
  </div>
  <div>
    <a href="#cardápio1"><ion-icon name="book-outline"></ion-icon>Tradicionais</a>
  </div>
  <div>
    <a href="#cardápio2"><ion-icon name="book-outline"></ion-icon>Especiais</a>
  </div>
  <div>
    <a href="#cardápio3"><ion-icon name="book-outline"></ion-icon>Doces</a>
  </div>
  <div>
    <a href="#cardápio4"><ion-icon name="book-outline"></ion-icon>Calzones</a>
  </div>
  <div>
    <a href="#História"><ion-icon name="construct-outline"></ion-icon>História</a>
  </div>
  <div>
    <a href="#loja"><ion-icon name="checkmark-done-outline"></ion-icon>Pedidos</a>
  </div>
  
</div>
`;

// Event listeners
botonMenu.addEventListener('click', abrirMenu );

// Clases
class TemplateM {
  mostrarMenu(tipo){
    if(tipo === 'abrirMenu'){
      padreNav.innerHTML = templateMenu;
    }
    if(tipo === 'cerrarMenu'){
      padreNav.innerHTML = '';
    }
  }
}
// Function

//abrir menu
function abrirMenu() {
  var mosMe = new TemplateM();
    switch(estadoM) {
        case false:
            mosMe.mostrarMenu('abrirMenu');
            estadoM = true;
            break;
        case true:
            estadoM = false;
            mosMe.mostrarMenu('cerrarMenu');
        break;
    }
}

window.onload =  load;
var divCarga = document.querySelector('.divCarga');

var divPizzas = document.querySelector('.divPizzas');

function load () {

    if(window.onload == true) {
        divCarga.style.top = '0px';

    }if(window.onload == true) {
        divCarga.style.top = '-100000px';
        
    }
}

setTimeout(function() {
    divCarga.style.top = '-100000px';
},3000);

