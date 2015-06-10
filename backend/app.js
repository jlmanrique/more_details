var express = require('express');
var app = express();

app.use(require('./routers/users'));

app.listen(3000);