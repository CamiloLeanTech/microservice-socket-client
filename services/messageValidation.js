const request = require('../libraries/tools/request');

module.exports = {
  validate(incomingMessage, message) {
    let parseMessage = JSON.parse(incomingMessage);
    
    let condition = getCondition(parseMessage, message);

    if ( condition ) {
      let options = getOptions();
      console.log(options);
      let response = request(getOptions());

      if (response.err) { return {}}

      return incomingMessage;
    }
  }
}

function getCondition(parseMessage, message) {
  return parseMessage.ref      === message.ref      &&
         parseMessage.event    === message.event    &&   
         parseMessage.event_id === message.event_id &&   
         parseMessage.name     === message.name;
}

function getOptions() {
  return {
    uri: 'http://localhost:3000/saveMessage',
    method: 'POST',
    headers: {}
  }
}
