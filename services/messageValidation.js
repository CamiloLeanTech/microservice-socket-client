const request = require('../libraries/tools/request');

module.exports = {
  validate(incomingMessage, message) {
    let parseMessage = JSON.parse(incomingMessage);
    
    let condition = getCondition(parseMessage, message);

    if ( condition ) {
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
    uri: '',
    baseURL: 'http://localhost/3000',
    method: 'POST',
    headers: {}
  }
}
