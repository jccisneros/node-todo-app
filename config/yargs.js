const description = {
  demand: true,
  alias: "d",
  desc: "Description of task",
};

const isCompleted = {
  alias: "c",
  default: true,
  desc: "Completed or pending task",
};

module.exports.argv = require("yargs")
  .command("create", "Create a task to do", {
    description,
  })
  .command("delete", "Delete a task", {
    description,
  })
  .command("update", "Update the description of a task to do", {
    description,
    isCompleted,
  })
  .help().argv;
