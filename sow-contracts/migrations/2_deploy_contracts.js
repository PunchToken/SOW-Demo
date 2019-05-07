const SOWStorage = artifacts.require("SOWStorage");
const SOWContractV1 = artifacts.require("SOWContractV1");
const SOWProxy = artifacts.require("SOWProxy");
const SOWFactory = artifacts.require("SOWFactory");


async function deploy(deployer, network) {
    const factoryResult = await deployer.deploy(SOWFactory);
    //console.log(factoryResult);
}

module.exports = (deployer, network) => { 
	deployer.then(async () => {
		await deploy(deployer, network);
	});
}
