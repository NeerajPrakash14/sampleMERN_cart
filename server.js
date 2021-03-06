const express = require('express');

const bodyParser= require('body-parser');



const app = express();

app.use(bodyParser.json());

app.use('/api/models', require('./routes/api/models.js'));



const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on PORT:${port}`));


