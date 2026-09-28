// import { sum, sub, mult } from "./Maths.js";
// import division from "./Maths.js";

// console.log(division);
import chalk from "chalk";

console.log(chalk.red("Hello world!"));

console.log(
  chalk.green(
    "I am a green line " +
      chalk.blue.underline.bold("with a blue substring") +
      " that becomes green again!",
  ),
);
