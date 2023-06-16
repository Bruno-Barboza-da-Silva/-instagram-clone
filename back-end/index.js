const express = require('express')
// const cors = require('cors')
const app = express();
// const contactRouter = require('./routes/contactUs.router')
// const sendRouter = require("./routes/send.router")
// const managerRouter = require("./routes/manager.router")
// const updateRouter = require("./routes/update.router")

app.use(express.json());
// app.use(cors())

// app.use("/contact-us", contactRouter);

// app.use("/send", sendRouter);

// app.use('/manager', managerRouter);

// app.use('/update', updateRouter);

// app.listen(5000, ()=>{
//     console.log("aplicação rodando na porta 5000")
// })



app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, ()=>{
    console.log("aplicação rodando na porta 3000")
})