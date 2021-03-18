const conf = require('../config/config');

module.exports = {
  questions_round1: [
    {
      name: 'revoke_url',
      type: 'input',
      message: 'What is the revoke url?',
      when: (answers) => {
        return conf.get('revoke_url') === undefined;
      },
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
      when: (answers) => {
        return conf.get('client_id') === undefined;
      },
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
      when: (answers) => {
        return conf.get('client_secret') === undefined;
      },
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
