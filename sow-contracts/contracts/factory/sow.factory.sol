pragma solidity ^0.4.23;


import "../logic/sow.v1.sol";
import "../proxy/sow.proxy.sol";
import "./sow.factory.data.sol";
import "../storage/sow.storage.sol";

contract SOWFactory is SOWFactoryData {
    event ContractCreated(address indexed created);
    function createSOW(address _owner)
        public
        returns (address)
    {
        SOWStorage sowStorage = new SOWStorage();       
        SOWProxy sowProxy = new SOWProxy(sowStorage, _owner);   
        SOWContractV1 instance = new SOWContractV1();   
        //sowProxy.upgradeTo(instance); 
        emit ContractCreated(sowProxy);  
        _sowContracts.push(sowProxy);
        return sowProxy; 
    }

    function getContractCount() 
    public
    constant
    returns(uint contractCount)
  {
    return _sowContracts.length;
  }
}