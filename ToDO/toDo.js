const fs = require("fs");
const colors = require("colors");

let toDoTask = [];

const validationIsCompleteted = (isCompleted) => {
  if (isCompleted === "true") {
    return isCompleted = true;
  } else if (isCompleted === "false") {
    return isCompleted = false;
  }
}

const saveDB = () => {
  let data = JSON.stringify(toDoTask);
  fs.writeFile("db/data.json", data, (err) => {
    if (err) throw new Error("Don´t Updated!!", err);    
  });
};

const uploadDB = () => {
  try {
    toDoTask = require("../db/data.json");
  } catch (error) {
    toDoTask = [];
  }
};

const create = (description) => {
  uploadDB();
  let toDo = {
    description,
    isCompleted: false,
  };
  toDoTask.push(toDo);
  saveDB();
  return console.log('Task Created!!'.green);
};



const updateDB = (description, isCompleted) => {
  uploadDB();

  let index = toDoTask.findIndex((task) => task.description === description);  

  if (typeof validationIsCompleteted(isCompleted) === "boolean" && index >= 0) {
    toDoTask[index].isCompleted = validationIsCompleteted(isCompleted);
    saveDB();
    return console.log("Task Updated!!".green);;
  } else{
    return console.error("Invalid Value!!".red);
  }
  
};

const deleteDB = ( description ) => {
  uploadDB();

  let newList = toDoTask.filter( task => task.description !== description )  

  if ( toDoTask.length !== newList.length ) {
    toDoTask = newList;
    saveDB();
    return console.log('Task Deleted!!'.red);
  } else {
    return console.error('Task Not Found!!'.yellow);
  }

}

const readDB = (isCompleted = 'all') => {
  toDoTask = require("../db/data.json");
  if(isCompleted = 'all'){
    list = toDoTask;
    return list;
  }else if (!validationIsCompleteted(isCompleted)) {
    let list = toDoTask.filter( task => !task.isCompleted)    
    return list
  }else if (validationIsCompleteted(isCompleted)){    
    let list = toDoTask.filter( task => task.isCompleted)    
    return list
  }
  
};

module.exports = {
  create,
  readDB,
  updateDB,
  deleteDB
};
