var voting = artifacts.require("./Voting.sol");

module.exports = function(deployer) {
  deployer.deploy(voting, ['Tham', 'Hew', 'Tong', 'Liam', 'Adrianus', 'Sanaam'].map(x => web3.utils.asciiToHex(x)));
};