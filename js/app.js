var inputs = document.querySelectorAll('div.form__group input[type="text"]');

const inputMethods = {  
  inputAddListeners : function (){
    inputs.forEach(input => {
      input.addEventListener('click', () => {
        let label = input.nextElementSibling;
        label.className = 'slideUp';
      });    
      input.addEventListener('blur', () => {
        if(input.value == ""){
          let label = input.nextElementSibling;
          label.classList.add('slideDown');
        }
      });
    });
  }
}

const register = {
  init: function(){
    document.getElementById('btnRegister').addEventListener('click',this.validarCampos);
  },
  validarCampos: function(){
    inputs.forEach(input => {
      let error = input.nextElementSibling.nextElementSibling;
      if(input.value == ""){        
        error.innerHTML = `Este Campo no puede estar vacio`        
      }else{
        error.innerHTML = '';
      }
      input.addEventListener('focus', () => {
        error.innerHTML = '';
      });  

    });
  }
}

window.onload = function(){
  inputMethods.inputAddListeners();
  register.init();
};

/*window.onload = function(){
  document.getElementById('registrarEstudiante').addEventListener('click',validarCampos);
  document.getElementById('mostrarPromedio').addEventListener('click',mostrarPromedio);
  document.getElementById('mostrarNotaMayor').addEventListener('click',mostrarNotaMayor);
  document.getElementById('mostrarNotaMenor').addEventListener('click',mostrarNotaMenor);
};

var estudiantes = [];
var cont = 0;
var tr = '';

function validarCampos(){
  var codigoEstudiante = document.getElementById('codigoEstudiante').value;
  var nombreEstudiante = document.getElementById('nombreEstudiante').value;
  var notaEstudiante = document.getElementById('notaEstudiante').value;
  if(codigoEstudiante == "")
    alert('el campo "Código" es obligatorio');
  else if(nombreEstudiante == "")
    alert('el campo "Nombre" es obligatorio');
  else if(notaEstudiante == "")
    alert('el campo "Nota" es obligatorio');
  else
    registrarEstudiante(codigoEstudiante,nombreEstudiante,notaEstudiante);
}

function registrarEstudiante(codigoEstudiante,nombreEstudiante,notaEstudiante){
  var estudiante = {Codigo: codigoEstudiante, Nombre: nombreEstudiante, Nota: notaEstudiante};
  var estudianteJSON = JSON.stringify(estudiante)
  console.log(estudiante);
  estudiantes.push(estudiante);
  tableInsertEstudiante(estudianteJSON);
}

function tableInsertEstudiante(estudianteJSON){
  var data = JSON.parse(estudianteJSON);
  console.log(data);
  tr += '<tr>';
  tr += '<td>'+data.Codigo + '</td>';
  tr += '<td>'+data.Nombre + '</td>';
  tr += '<td>'+data.Nota + '</td>';
  tr += '</tr>';
  console.log(tr);
  document.getElementById('listEstudiantes').innerHTML = tr;
  document.getElementById('codigoEstudiante').value = '';
  document.getElementById('nombreEstudiante').value = '';
  document.getElementById('notaEstudiante').value = '';
}

function mostrarPromedio(){
  cont = estudiantes.length;
  if(cont > 0){
    var promedio = 0;
    for(var i=0; i<cont; i++){
        promedio += parseInt(estudiantes[i].Nota)
    }
    promedio = promedio/cont;
    alert('El promedio de las notas es: '+promedio)
  }else{
    alert('No hay estudiantes registrados')
  }
}

function mostrarNotaMayor(){
  cont = estudiantes.length;
  if(cont > 0){
    var notas = [];
    for(var i=0; i<cont; i++){
      notas.push(parseInt(estudiantes[i].Nota));
    }
    var max = Math.max(...notas);
    alert('La mayor nota es: '+max)
  }else{
    alert('No hay estudiantes registrados');
  }
}

function mostrarNotaMenor(){
  cont = estudiantes.length;
  if(cont > 0){
    var notas = [];
    for(var i=0; i<cont; i++){
      notas.push(parseInt(estudiantes[i].Nota));
    }
    var min = Math.min(...notas);
    alert('La menor nota es: '+min)
  }else{
    alert('No hay estudiantes registrados');
  }
}*/
