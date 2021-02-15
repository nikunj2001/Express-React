const express= require('express');
const app= express();
const PORT = process.env.PORT || 3000;
const path = require('path');
const mainRouter = require('./routes/index');
const productRouter = require('./routes/products')
// const apiKeyMiddleware = require('./middlewares/apiKey')

// app.use(apiKeyMiddleware)
app.set('view engine','ejs');
app.use(express.static('public'))
app.use(express.json())
// app.use(express.urlencoded({extended:false}));
app.use(productRouter)
app.use(mainRouter)

app.listen(PORT,()=>{
    console.log("Running on port "+PORT);
})
