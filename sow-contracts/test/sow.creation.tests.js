const SOWStorage = artifacts.require("SOWStorage");
const SOWContractV1 = artifacts.require("SOWContractV1");
const SOWProxy = artifacts.require("SOWProxy");
const SOWFactory = artifacts.require("SOWFactory");


contract("SOW Proxy contract tests", async (accounts) => {
    let sowProxy, sowStorage, sowContractV1, sowFactory;
    const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000';

    beforeEach(async () => {
        sowContractV1 = await SOWContractV1.new()
        sowStorage = await SOWStorage.new();       
        sowProxy = await SOWProxy.new(sowStorage.address, accounts[0]);       
        sowFactory = await SOWFactory.new();  
        await sowProxy.upgradeTo(sowContractV1.address);
        sowProxy = _.extend(sowProxy, await SOWContractV1.at(sowProxy.address));       
    });

    it("should set contract name", async () => {
        let success = sowProxy.setName("testContract");
        console.log(success)
       // console.log(success);
    });
    
    it('Should set Proposer Address', async () => {
        const proposer = accounts[4];
        const acceptor = accounts[5];
        const worker = accounts[3];
        const owner = accounts[2];
        let success = await sowProxy.setProposerAddress(proposer, { from: accounts[2] });
       // console.log(success);      
    });  
    
    it("should create two new contracts from factory", async () => {
        const proposer = accounts[4];
        let sowProxyAddressTxnRecpt = await sowFactory.createSOW(accounts[0], { from: accounts[1] });
        let resultC2 = await sowFactory.createSOW(accounts[1], { from: accounts[1] });
        let resultC3 = await sowFactory.createSOW(accounts[2], { from: accounts[1] });
        let resultC4 = await sowFactory.createSOW(accounts[3], { from: accounts[1] });
        console.log(sowProxyAddressTxnRecpt);
        console.log(sowProxyAddressTxnRecpt.logs[0].args);
         const sowProxyAddress = sowProxyAddressTxnRecpt.logs[0].args.proxyAddress;
         const c1 = await SOWContractV1.at(sowProxyAddress);
         let success = await c1.setProposerAddress(proposer, { from: accounts[2] });
         console.log("success", success);
        let result = await sowFactory.getContractCount();
        console.log("result", result.toNumber());
    })

    it("should create two new contracts from test", async () => {
        const proposer = accounts[4];       
        let c1 = await SOWContractV1.new();
        let c2 = await SOWContractV1.new();
        console.log(c1.address);
        console.log(c2.address);
        //let success = await c1.setProposerAddress(proposer, { from: accounts[2] });
        // Get instance pointing to address obtained from event
        ///const contract3 = await SOWContractV1.at(contract3Address);
    });

    it('should create a new contract and set some stuff', async () => {    

        const proposer = accounts[4];
        const acceptor = accounts[5];
        const worker = accounts[6];
        const owner = accounts[2];
        let success = sowProxy.setName("testContract");
        success = await sowProxy.setProposerAddress(proposer); 
         
        let date = (new Date()).getTime();
        let startDate = date % 1000;
        success = await sowProxy.setStartDate(startDate);
        let endDate = date % 1000;
        success = await sowProxy.setEndDate(endDate);
        //console.log(success.logs[0]);
        success = await sowProxy.setRate(150);
        //console.log(success.logs[0]);
        console.log('here');
        //success = await sowProxy.setWorkerAddress(worker);
        console.log('here 2'); 
        //success = await sowProxy.setWorkerAddress(worker);             
        success = await sowProxy.setAcceptorAddress(acceptor);
        //console.log(success.logs[0]);
        console.log('here 3'); 
    });

    it('should migrate logic contract', async ()=> {
        const owner = accounts[3];
        let proxyAddress, storageAddress, logicAddress;
        let sowProxyAddressTxnRecpt = await sowFactory.createSOW(owner);  
        let result =  sowProxyAddressTxnRecpt.logs[0].args;
        console.log(result);
        proxyAddress = result.proxyAddress;
        storageAddress = result.storageAddress;
        logicAddress = result.logicAddress;  
        //console.log('owner', owner, result._owner);  
        
        const currentLogic = await SOWContractV1.at(proxyAddress);
        const currentProxy = await SOWProxy.at(proxyAddress);
        //console.log("currnetProxy",currnetProxy);
        let success = await currentLogic.setRate(150);
        console.log(success);

        const nextLogicAddr  = await SOWContractV1.new();
        console.log(nextLogicAddr.address);
        let migration = await currentProxy.upgradeBy(nextLogicAddr.address,owner);
        console.log("migration", migration);
        const nextLogic = await SOWContractV1.at(proxyAddress);
        let rate = await nextLogic.getRate();
        console.log("rate", rate.toNumber());               
    });

    it.skip('should work from a deployed factory contract', async () => {
        //const deployedSOWFactoryAddr = "0x93fb819a1184348c4DABcb6C107FD7082cDdBf5d";
        const deployedSOWFactory = await SOWFactory.at(deployedSOWFactoryAddr); 
        const owner = accounts[3];
        let proxyAddress, storageAddress, logicAddress;
        let sowProxyAddressTxnRecpt = await sowFactory.createSOW(owner);  
        let result =  sowProxyAddressTxnRecpt.logs[0].args;
        console.log(result);
    });

    it.only('should work from a ropsten deployed factory contract', async () => {
       
        const deployedSOWFactoryAddr = "";
        const deployedSOWFactory = await SOWFactory.at(deployedSOWFactoryAddr); 
        const owner = accounts[3];
        let proxyAddress, storageAddress, logicAddress;
        let sowProxyAddressTxnRecpt = await sowFactory.createSOW(owner);  
        let result =  sowProxyAddressTxnRecpt.logs[0].args;
        console.log(result);
    });
});