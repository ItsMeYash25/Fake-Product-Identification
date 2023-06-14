var Web3 = require('web3');
const providers = new Web3.providers.HttpProvider('http://127.0.0.1:9545')
var web3 = new Web3(providers);
const product = require("../../frontend/src/abis/product.json")

async function createInstance(){
    const networkId=  await web3.eth.net.getId();
    const {address}= product.networks[networkId];
    const instance = await new web3.eth.Contract(
		product.abi,
		address
	);

    return {instance};
}


module.exports = {createInstance};
