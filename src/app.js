#!/usr/bin/env node

const clear = require('clear');
const chalk = require('chalk');
const figlet = require('figlet');
const inquirer = require('inquirer');

const axios = require('axios').default;

const conf = require('./config/config');

const questions = require('./resources/questions');

const argv = require('yargs')
  .usage('Usage: $0 <command> [options]')
  .help('h')
  .alias('h', 'help')
  .command('configure', 'Configure AuthHer0')
  .example('$0 configure')
  .alias('t', 'token')
  .nargs('t', 1)
  .describe('t', 'Refresh Token').argv;

if (argv._[0] === 'configure') {
  clear();
  console.log(
    chalk.yellow(figlet.textSync('AuthHer0', { horizontalLayout: 'full' })),
    chalk.green('\nGet ready')
  );
  inquirer.prompt(questions.questions_round1).then((answers) => {
    console.log(answers);
  });
}

if (argv.token) {
  const domain = conf.get('revoke_url');
  const id = conf.get('client_id');
  const secret = conf.get('client_secret');

  if (domain === undefined || id === undefined || secret === undefined) {
    console.log(chalk.red('Please run "authher0 configure"'));
  } else {
    axios({
      url: domain,
      method: 'POST',
      data: {
        token: argv.token,
        client_id: id,
        client_secret: secret
      }
    })
      .then((response) => {
        if (response.status === 200) {
          console.log(chalk.green('Everything looks good!'));
        } else {
          console.log(chalk.red('Something went wrong :('));
        }
      })
      .catch(() => {
        console.log(chalk.red('Something went wrong :('));
      });
  }
}
