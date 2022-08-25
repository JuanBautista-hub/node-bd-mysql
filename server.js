const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const response = require('./util/response');

let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(router)

app.use('/',function(req,res){response.success(req,res,"Respondiendo",200)});

app.listen(3000);