const request = require('../libraries/tools/request');

module.exports = (incomingMessage, message, data) => {
  let parseMessage = JSON.parse(incomingMessage);
  
  let condition = getCondition(parseMessage, message);
  if ( condition ) {
    let options = getOptions(data);
    let response = request(options);
    if (response.err) { return {} }

    return incomingMessage;
  } else {
    console.log('the message data does not correspond with the data');
  }
}

function getCondition(parseMessage, message) {
  return parseMessage.ref      === message.ref      &&
         parseMessage.event    === message.event    &&   
         parseMessage.event_id === message.event_id &&   
         parseMessage.name     === message.name;
}

function getOptions(body) {
  return {
    headers: {
      "Content-Type" : "application/json",
      "Accept"       : "application/json"
    },
    uri: 'http://localhost:3000/saveMessage',
    method: 'POST',
    body,
    json: true,
    jar: true
  }
}