const CronJob = require('cron').CronJob;

const io       = require("socket.io-client");
const ioClient = io.connect("http://localhost:3000");

const sendMessage = require('../services/sendMessage');

let data = {
  name: 'p1',
  on:   0,
  out:  0
}

let message = {
  ref:      '1',
  event:    'counter',
  event_id: 'data',
  name:     'p1'
};

let job  = new CronJob('*/05 * * * * *', () => {
  let random = Math.round(Math.random());
  random ? data.on++ : data.out++;  

  let messageToSend = JSON.stringify(message)

  ioClient.emit('counter', messageToSend);

}, null, true, 'America/Bogota');

ioClient.on('counter-server', (incomingMessage) => {
  let response = sendMessage(incomingMessage, message, data);

  if (response) { 
    ioClient.emit('counter-server-page', incomingMessage); 
  }
});