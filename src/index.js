const app = require("./config/server");

require('./app/routes/person')(app);


//starting server

app.listen(app.get('port'), app.get('ip'));