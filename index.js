const express = require("express")
const bodyparser = require("body-parser")
const app = express()
const route = require("./src/routes/routes")
const mongoose = require("mongoose")

app.use(bodyparser.json())


mongoose.connect("mongodb+srv://madhusmita_123:5fiVrKsOKBIGJsKe@cluster0.cpbhduk.mongodb.net/CompanyA-2",
  { useNewUrlParser: true }
)
  .then(() => console.log("MongoDb is connected"))
  .catch(err => console.log(err))
app.use('/', route)



app.listen(process.env.PORT || 3000, function () {
  console.log('Express app running on port' + (process.env.PORT || 3000))
});