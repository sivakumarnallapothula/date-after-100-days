const sk = require("express");
const b = require("date-fns/addDays");
const a = sk();
a.get("/", (request, response) => {
  const ab = new Date();
  const ok = b(new Date(ab.getFullYear(), ab.getMonth(), ab.getDate()), 100);
  response.send(`${ok.getDate()}/${ok.getMonth() + 1}/${ok.getFullYear()}`);
});
module.exports = a;
