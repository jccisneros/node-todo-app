const { argv } = require('yargs');
const colors = require('colors');

let command = argv._[0];

switch (command) {
  case 'crear':
    console.log('Crea una tarea...'.green);
    
    break;
  case 'listar':
    console.log('Muestra las tareas...'.blue);
    
    break;
  case 'actualizar':
    console.log('Actualiza una tarea...'.blue);
    
    break;  

  default:
    console.log('Comando no reconocido'.red);
    break;
}