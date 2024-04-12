var colores = [];
var GetColores = document.querySelector('#color');
GetColores.addEventListener('keypress',(event)=>{
    if(event.keyCode == 13){
        colores.push(GetColores.value);
        GetColores.value='';
        llenaTabla();
    }
})
function llenaTabla(){
    var body = '';
    for (var i=0;i<colores.length;i++){
        var btnEditar = '<button id="btnEditar'+i+'" data-imdice="'+i+'" class= "btn btn-warning btnEditar">Editar</button>';
        var btnEliminar = '<button data-imdice="'+i+'" class= "btn btn-danger btnEl">Eliminar</button>';
        var input = '<input id="input'+i+'" class="form-control d-none" value = "'+colores[i]+'"></input>';
        var guardar = '<button class="btn btn-success btnGuar d-none" id = "boton'+i+'" data-indice="'+i+'">Guardar</button>';
        body += '<tr><td>'+(i+1)+'</td><td>'+input+'<div id="div'+i+'">'+colores[i]+'</div></td><td>'+btnEditar+''+guardar+'</td><td>'+btnEliminar+ '</td></t>';

    }
    document.querySelector('#datos').innerHTML = body;
    eventos();
}

function eventos(){
    var btnEliminar= document.querySelectorAll('.btnEl');
    btnEliminar.forEach(elem => elem.addEventListener('click',event =>{
        var indice = event.target.getAttribute('data-indice');
        Eliminar(indice);
    }));
    var btnEditar= document.querySelectorAll('.btnEditar');
    btnEditar.forEach(elem => elem.addEventListener('click',event =>{
        var indice = event.target.getAttribute('data-indice');
        show(indice);
    }));
    var btnGuardar= document.querySelectorAll('.btnGuar');
    btnGuardar.forEach(elem => elem.addEventListener('click',event =>{
        var indice = event.target.getAttribute('data-indice');
        actualizar(indice);
    }));
}

function Eliminar(indice){
    colores.splice(indice,1);
    llenaTabla();
}

function show(indice){
    var div = document.querySelector('#div'+indice);
    var campo = document.querySelector('#input'+indice);
    var botonEd = document.querySelector('#btnEditar'+indice);
    var botonG = document.querySelector('#boton'+indice);
    div.classList.add('d-none');
    campo.classList.remove('d-none');
    botonEd.classList.add('d-none');
    botonG.classList.remove('d-none');
}

function actualizar(indice){
    var nuevoColor = document.querySelector('#input'+indice).value;
    colores[indice] = nuevoColor;
    llenaTabla();
}