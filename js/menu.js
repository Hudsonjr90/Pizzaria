// MENU

// Variables
var divMenu = document.querySelector('.divMenu');
let estadoM = document.querySelector('.navs');
estadoM = false;

var padreNav = document.querySelector('.padreNav');
const botonMenu = document.querySelector('#controlA');

//template menu
const templateMenu = `
<div class="menu">
  <div>
    <a href="#"><ion-icon name="home-outline"></ion-icon>Início</a>
  </div>
  <div>
    <a href="#cardápio"><ion-icon name="book-outline"></ion-icon>Cardápio</a>
  </div>
  <div>
    <a href="#História"><ion-icon name="construct-outline"></ion-icon>História</a>
  </div>
  <div>
    <a href="#loja"><ion-icon name="navigate-outline"></ion-icon>Loja</a>
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
  const mosMe = new TemplateM();
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
