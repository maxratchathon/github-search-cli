import inquirer from "inquirer";
import mongoose from "mongoose";
import { connectDB, disconnectDB } from "../db/connectDB.js";
import Todos from "../schema/TodoSchema.js";
import ora from "ora";
import chalk from "chalk";

async function input() {
  const answers = await inquirer.prompt([
    {
      name: "name",
      message: "input the name of task:",
      type: "input",
    },
    {
      name: "detail",
      message: "input the detail of task: ",
      type: "input",
    },
  ]);
  return answers;
}
const output = await input();
console.log(output);
