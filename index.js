require('./jobs/randomCounter');

const app = require('express')();
const port = process.env.PORT || 80;

app.listen(port, function(){
  console.log('listening on *:' + port);
});