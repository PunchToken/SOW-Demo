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
        let resultC1 = await sowFactory.createSOW(accounts[0], { from: accounts[0] });
        let resultC2 = await sowFactory.createSOW(accounts[2], { from: accounts[2] });
        let log = resultC1.logs[0];        
        let c1 = await SOWContractV1.at(log.args.created);
        let c2 = await SOWContractV1.at(resultC2.logs[0].args.created);
        console.log(c1.address);
        console.log(c2.address);
        //let success = await c1.setProposerAddress(proposer, { from: accounts[2] });
        // Get instance pointing to address obtained from event
        ///const contract3 = await SOWContractV1.at(contract3Address);
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

    it.only('shuld create a new contract and set some stuff', async () => {    

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
        //console.log('here 2'); 
        //success = await sowProxy.setWorkerAddress(worker);             
        success = await sowProxy.setAcceptorAddress(acceptor);
        //console.log(success.logs[0]);
        console.log('here 3'); 
    })
});