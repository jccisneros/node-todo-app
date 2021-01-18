const fs = require("fs");
const colors = require("colors");

let toDoTask = [];

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

const readDB = () => {
  try {
    list = require("../db/data.json");
    return list;
  } catch (error) {
    list = `Don´t Have Task!!`.red;
    return list;
  }
};

const updateDB = (description, isCompleted) => {
  uploadDB();

  let index = toDoTask.findIndex((task) => task.description === description);

  if (isCompleted === "true") {
    isCompleted = true;
  } else if (isCompleted === "false") {
    isCompleted = false;
  }

  if (typeof isCompleted === "boolean" && index >= 0) {
    toDoTask[index].isCompleted = isCompleted;
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

module.exports = {
  create,
  readDB,
  updateDB,
  deleteDB
};
