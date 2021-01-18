const { argv } = require("./config/yargs");
const colors = require("colors");
const { create, readDB, updateDB, deleteDB } = require("./ToDO/toDo");

let command = argv._[0];

switch (command) {
  case 'create':
    create(argv.d);    
    break;

  case 'listing':
    let list = readDB();
    console.log("====TO DO LiSt====\n".green);
    list.map((list) => {
      console.log(
        `Task: ${list.description}`.yellow.bold,
        list.isCompleted === true ? "\nCompleted\n".green : "\nPending\n".red
      );      
    });
    console.log("==================".green);
    break;

  case 'update':
    updateDB(argv.d, argv.c);    
    break;

  case 'delete':
    deleteDB(argv.d);    
    break;

  default:
    console.log("Invalid Command!!".red);
    break;
}
