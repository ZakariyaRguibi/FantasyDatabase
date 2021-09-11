var fs = require("fs");
function txtToArray(path) {
  let text = fs.readFileSync(path, "utf8");
  return text.split("\n");
}

let first = txtToArray("data-txt/first_name.txt");
let last = txtToArray("data-txt/last-names.txt");

let obj = { "first-name": first, "last-name": last };
let data = JSON.stringify(obj);
fs.writeFile("names.json", data, (err) => {
  if (err) console.log(err);
});
