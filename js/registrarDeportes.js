var elBotonRegistrar = document.querySelector('#btnRegistrar');
var aIdTiendas = [];
var aNombreTiendas = [];
var nCantidadJugadores = [];
var bAireLibre = [];

if(localStorage.getItem("ids_deportes") !=null){
  aIdTiendas =JSON.parse(localStorage.getItem("ids_deportes"));
}
if(localStorage.getItem("nombres_deportes") !=null){
  aNombreTiendas =JSON.parse(localStorage.getItem("nombres_deportes"));
}
if(localStorage.getItem("cantidad_jugadores") !=null){
  nCantidadJugadores =JSON.parse(localStorage.getItem("cantidad_jugadores"));
}
if(localStorage.getItem("aire_libre") !=null){
  bAireLibre =JSON.parse(localStorage.getItem("aire_libre"));
}

elBotonRegistrar.addEventListener('click',validar);
llenarTabla();

function validar(){
  var elTxtId = document.querySelector('#txtId');
  var elTxtNombre = document.querySelector('#txtNombre');
  var eltxtCantJug = document.querySelector('#txtCantJug');
  var elboolAireLibre = document.querySelector('#boolAireLibre');
  var nId = Number(elTxtId.value);
  var sNombre = elTxtNombre.value;
  var nCantJug = Number(eltxtCantJug.value);
  var bAireLibre = elboolAireLibre.checked;
  var bError = false;

  if(nId == 0){
    elTxtId.classList.add('error');
    bError = true;
  }else{
    elTxtId.classList.remove('error');
  }
  if(sNombre == ''){
    elTxtNombre.classList.add('error');
    bError = true;
  }else{
    elTxtNombre.classList.remove('error');
  }
  if(nCantJug == 0){
    bError = true;
    eltxtCantJug.classList.add('error');
  }else{
    eltxtCantJug.classList.remove('error');
  }
  if(bError == false){
    registrar(nId, sNombre, nCantJug,bAireLibre);
    limpiarInputs();
  }
}

function registrar(pnId, psNombre, pnCantJug,pbAireLibre,psDireccion){
  aIdTiendas.push(pnId);
  aNombreTiendas.push(psNombre);
  nCantidadJugadores.push(pnCantJug);
  bAireLibre.push(pbAireLibre);
  localStorage.setItem('ids_deportes',JSON.stringify(aIdTiendas));
  localStorage.setItem('nombres_deportes',JSON.stringify(aNombreTiendas));
  localStorage.setItem('cantidad_jugadores',JSON.stringify(nCantidadJugadores));
  localStorage.setItem('aire_libre',JSON.stringify(bAireLibre));
  
  llenarTabla();
}

function llenarTabla(){
   var tbody =document.querySelector('#tblDeportes tbody');

   var aId =JSON.parse (localStorage.getItem('ids_deportes'));
   var aNombres =JSON.parse (localStorage.getItem('nombres_deportes'));
   var nCantidadJugadores =JSON.parse (localStorage.getItem('cantidad_jugadores'));
   var bAireLibre =JSON.parse (localStorage.getItem('aire_libre'));
   tbody.innerHTML ='';

   var nTamannoArreglos =aId.length;

   for(var i = 0; i < nTamannoArreglos; i++){
     var fila = document.createElement('tr');

     var celdaId = document.createElement('td');
     var nodoTextoId =document.createTextNode(aId[i]);

     celdaId.appendChild(nodoTextoId);
     fila.appendChild(celdaId);

     var celdaNombre = document.createElement('td');
     var nodoTextoNombre =document.createTextNode(aNombres[i]);
     celdaNombre.appendChild(nodoTextoNombre);
     fila.appendChild(celdaNombre);

     var celdaLatitud = document.createElement('td');
     var nodoTextoLatitud =document.createTextNode(nCantidadJugadores[i]);
     celdaLatitud.appendChild(nodoTextoLatitud);
     fila.appendChild(celdaLatitud);

     var celdaLongitud = document.createElement('td');
     var textDisplay;
     if (bAireLibre[i]) {
      textDisplay = 'si';
     } else{
      textDisplay = 'no';
     }
     var nodoTextoLongitud =document.createTextNode(textDisplay);
     celdaLongitud.appendChild(nodoTextoLongitud);
     fila.appendChild(celdaLongitud);

     tbody.appendChild(fila);
   }
}

function limpiarInputs(){
  var elTxtId = document.querySelector('#txtId');
  var elTxtNombre = document.querySelector('#txtNombre');
  var eltxtCantJug = document.querySelector('#txtCantJug');
  document.getElementById('boolAireLibre').checked = false;
  elTxtId.value = '';
  elTxtNombre.value = '';
  eltxtCantJug.value = '';
}

