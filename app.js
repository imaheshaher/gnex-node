const express = require('express')
const app = express()
const port = 5000
const mongoose = require("mongoose")
const {env} = require("./config/config")
const userRoute = require("./routes/userRoute")
const blogRoute = require("./routes/blogRoute")
const umiRoute = require("./routes/umiRoute")

const path = require('path')

const cors = require('cors')
var dir = path.join(__dirname,'/media')


app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/accounts",userRoute);
app.use("/blog",blogRoute);
app.use("/test",umiRoute);

app.use(express.static(dir))


mongoose.connect(env.mongoURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex: true,

},(error) => {
    if(error) {
        console.log(error)
    }
    else {
        console.log("database connected ..")
    }
})

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port port!`))