// // // import { sum, sub, mult } from "./Maths.js";
// // // import division from "./Maths.js";

// // // console.log(division);
// // import chalk from "chalk";

// // console.log(chalk.red("Hello world!"));

// // console.log(
// //   chalk.green(
// //     "I am a green line " +
// //       chalk.blue.underline.bold("with a blue substring") +
// //       " that becomes green again!",
// //   ),
// // );

// // import figlet from "figlet";

// // async function doStuff() {
// //   const text = await figlet.text("Hello World!!");
// //   console.log(text);
// // }

// // doStuff();

// import * as googleTTS from 'google-tts-api'; // ES6 or TypeScript

// // get audio URL
// const url = googleTTS.getAudioUrl('Hello to all users', {
//   lang: 'en',
//   slow: false,
//   host: 'https://translate.google.com',
// });
// console.log(url);

// import os from "node:os";

// // console.log(os.arch());
// // console.log(os.cpus());
// // console.log(os.platform())
// //console.log(os.uptime())
// // console.log(os.version())
// // console.log(os.userInfo())

import * as fs from "node:fs";

// Create a file and write a file
// fs.writeFileSync("./a.txt", "Hello from nodejs");
// Update a file
// fs.writeFileSync("./a.txt", "Hello from nodejs which is updated now");
// Read a file
// let data = fs.readFileSync("./a.txt", { encoding: "utf-8" });
// console.log(data);
// Delete a file
// fs.unlinkSync("./a.txt");

// Create write and update a file,
console.log("Start");
fs.writeFile("./abc/def/index.js", "Hello from async data ", function () {
  console.log("File is created ");
});
// Read File
// fs.readFile("./b.txt", "Utf-8", function (err, data) {
//   console.log(err, data);
// });
// Delete file
// fs.unlink("./b.txt", function (err) {
//   console.log(err);
// });
console.log("End");

// fs.mkdirSync("./abc/def")

