const Dappster = artifacts.require('./Dappster.sol')

module.exports = function (deployer, network) {
  console.log('Deploying to: ', network)
  // We deploy the contract with the owner being the first address from accounts
  deployer.deploy(Dappster)
}
