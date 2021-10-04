const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// mongoose.connect("mongodb://localhost/budget", {
//   useNewUrlParser: true,
//   useCreateIndex: true,
//   useUnifiedTopology: true
// }).then(res=>{
//         console.log("DB Connected!")
// }).catch(err => {
//   console.log(Error, err.message);
// })

// routes
app.use(require("./routes/api.js"));

mongoose.connect("mongodb://localhost/budget", { 
  useNewUrlParser: true, 
  useUnifiedTopology: true,
}, (err, connection) => {
if(err) {
console.error(err)
return
}    

console.log('Connected to DB');
  app.listen({ port: PORT }, () => {
      console.log(`Server running at http://localhost:${PORT}`);
  })





// app.listen(PORT, () => {
//   console.log(`App running on port ${PORT}!`);
// });