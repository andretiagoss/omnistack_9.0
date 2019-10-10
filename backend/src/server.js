const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-wtix8.mongodb.net/semana09?retryWrites=true&w=majority',{
    //remove os avisos do mongoose
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(cors());

//configura o express para utilizar o formato json
app.use(express.json());

app.use(routes);

app.listen(3333);