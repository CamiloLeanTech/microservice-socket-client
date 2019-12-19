const request = require('request');

module.exports = function(options) {
  return new Promise((resolve, reject) => {
    request(options, (err, res, body) => {
      err ? console.log(err) : null;
      resolve({ err, body: body || [], options });
    })
  });
}