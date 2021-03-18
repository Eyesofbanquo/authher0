const ConfigStore = require('configstore');
const pkg = require('../../package.json');

const conf = new ConfigStore(pkg.name);

module.exports = conf;
