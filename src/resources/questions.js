const conf = require('../config/config');

module.exports = {
  questions_round1: [
    {
      name: 'revoke_url',
      type: 'input',
      message: 'What is the revoke url?',
      validate: (value) => {
        if (value.length) {
          return true;
        } else {
          return 'Please provide a valid revoke url';
        }
      }
    },
    {
      name: 'client_id',
      type: 'input',
      message: 'What is the client id?',
      validate: (value) => {
        if (value.length) {
          return true;
        } else {
          return 'Please provide a valid client id';
        }
      }
    },
    {
      name: 'client_secret',
      type: 'password',
      message: 'What is the client secret?',
      validate: (value) => {
        if (value.length) {
          return true;
        } else {
          return 'Please provide a valid secret';
        }
      }
    }
  ]
};
