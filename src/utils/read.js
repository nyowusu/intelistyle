const readline = require("readline");
const fs = require("fs");

const inputFile = fs.createReadStream("../data/garment_items.jl", {
  encoding: "utf8",
});

fs.open("../data/data.json", "w", (err) => {
  if (err) console.log({ err });
});

fs.appendFile("../data/data.json", "[\n", (err) => {
  if (err) console.log({ err });
});

const rl = readline.createInterface({
  input: inputFile,
});

console.log("data processing start ...");
rl.on("line", (answer) => {
  fs.appendFile("../data/data.json", `${answer},\n`, (err) => {
    if (err) console.log({ write: err });
  });
});

rl.on("close", () => {
  inputFile.close();
  fs.appendFile("../data/data.json", "]\n", (err) => {
    if (err) console.log({ err });
  });
  console.log(
    "Yeeeeey! The data processing Completed as completed successfully"
  );
});
