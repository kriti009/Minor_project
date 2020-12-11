var artifacts = require('truffle-artifactor');
const SmartHome = artifacts.require("SmartHome");

module.exports = function(deployer) {
  deployer.deploy(SmartHome);
};
