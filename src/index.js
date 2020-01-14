const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

// MongoDB (Não-relacional)
mongoose.connect('mongodb+srv://elton:110483@cluster0-4ymsx.mongodb.net/omni10?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(express.json());
app.use(routes);

app.listen(3333);


