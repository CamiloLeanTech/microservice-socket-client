const CronJob = require('cron').CronJob;

const io = require("socket.io-client");
const ioClient = io.connect("http://localhost:3000");

let job  = new CronJob('*/01 * * * * *', () => {
  let OnOrOut = Math.round(Math.random());

  if (OnOrOut) {  
    ioClient.emit('chat message', 'ESTO ES UNA FUCKING PRUEBA!!');  
  }
  
}, null, true, 'America/Bogota');
