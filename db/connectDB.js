import dotenv from "dotenv";
import mongoose from "mongoose";
import ora from "ora";
import chalk from "chalk";

dotenv.config();

export async function connectDB() {
  try {
    const spinner = ora("connecting to database...").start();
    await mongoose.connect(process.env.MONGODB_URI);
    spinner.stop();
    console.log(chalk.greenBright("connected into database successfully"));
  } catch (error) {
    console.log(chalk.redBright("error occur", error));
    process.exit(1);
  }
}

export async function disconnectDB() {
  try {
    await mongoose.disconnect();
    console.log(chalk.greenBright("disconnected from database"));
  } catch (error) {
    console.log(chalk.redBright("error occur", error));
    process.exit(1);
  }
}
