const WETH9 = artifacts.require('./WETH9')
const UniswapV2Router02 = artifacts.require('./UniswapV2Router02')
require('dotenv').config()

module.exports = async function(deployer) {
  await deployer.deploy(WETH9)
  await deployer.deploy(UniswapV2Router02, process.env.FACTORY_ADDRESS, WETH9.address)
}
