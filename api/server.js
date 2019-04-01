"use strict";

const dotenv            = require('dotenv');
const express           = require('express');
const bodyParser        = require('body-parser');
const morgan            = require('morgan');
const path              = require('path');
const Web3              = require('web3');  
const SOWContractV1ABI    = require("../sow-contracts/build/contracts/SOWContractV1.json");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8090;
const ETHEREUM_NETWORK_URL = process.env.ETHEREUM_NETWORK_URL || "";
const SOW_CONTRACT_ADDRESS = process.env.SOW_CONTRACT_ADDRESS || "";
const GAS_LIMIT = process.env.GAS_LIMIT || 700000;
const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000';
const TEST_ADDRESS_1 = '0x5eA363486FA2Ea59679fF7A0cb230fab0f6aA2f4'
const TEST_ADDRESS_2 = '0x8514C373509315aA62647b65723E2Ce12ED1Cc0D'
const TEST_ADDRESS_3 = '0xB8876bB02003B665283d05440afd764A0821764f'


app.use(morgan('tiny'));
app.use(bodyParser.urlencoded({ extended:true}));
app.use(bodyParser.json());

app.get('/api/sow', async (req, res) =>{ 

    const provider = new Web3.providers.HttpProvider(ETHEREUM_NETWORK_URL) ;
    const web3 = new Web3(provider);  
    const contract = new web3.eth.Contract(SOWContractV1ABI.abi, '', 
    { gasPrice: '12345678', 
    from: TEST_ADDRESS_1 });

    const instance = await contract.deploy({
        data: SOWContractV1ABI.byteCode,
        arguments: [] //Constructor params
    }).send({
        from: TEST_ADDRESS_1,
        gas: GAS_LIMIT
        // gasPrice: 0
    });

    const result = await instance.
    console.log(instance);
      //Create Contract proxy class

    /*
        let SOWContractV1 = await new web3.eth.Contract(SOWContractV1ABI.abi, {
        gas:GAS_LIMIT               
    });
        const myContract = new web3.eth.Contract([...], '0xde0B295669a9FD93d5F28D9Ec85E40f4cb697BAe', {
            from: '0x1234567890123456789012345678901234567891', // default from address
            gasPrice: '20000000000' // default gas price in wei, 20 gwei in this case
        });
    */
    

   /*
   let success = await new Promise((resolve, reject) => {
    SOWContractV1.deploy({
        data: SOWContractV1ABI.bytecode       
    })
    .send({
        from: '0x5eA363486FA2Ea59679fF7A0cb230fab0f6aA2f4',
        gas: 1500000,
        gasPrice: '30000000000000'
    }, (error, transactionHash) => { 
        console.log(success);
        console.log(transactionHash); 
       
    })
    .on('error', (error) => { 
        reject(error);
        console.log(error);
     })
    
    .on('receipt', (receipt) => {
        
       console.log(receipt.contractAddress) // contains the new contract address
    })
    .on('confirmation', (confirmationNumber, receipt) => { 
        console.log('confirmed')
        
     })
    .then((newContractInstance) => {
        console.log(newContractInstance.options.address) // instance with the new contract address
        resolve(newContractInstance);
    });

   }); 

    console.log(success);
    */

 
    /*
        let date = (new Date()).getTime();
        let birthDateInUnixTimestamp = date / 1000;
        await BirthDate.methods.set(birthDateInUnixTimestamp).send(opts);

        let birthDateInUnixTimestamp = await BirthDate.methods.get().call();
        let date = new Date(birthDateInUnixTimestamp * 1000);

    */
       
});


app.get('/test', (req, res) => res.send('Hello World!'));

app.post('/api/world', (req , res) =>{
    console.log('hello from wrold')
    res.send("Good");
} );



app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}!`)
});

