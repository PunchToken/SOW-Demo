pragma solidity ^0.4.23;


import "../logic/sow.v1.sol";
import "../proxy/sow.proxy.sol";
import "./sow.factory.data.sol";
import "../storage/sow.storage.sol";
import "./sow.factory.header.sol";

contract SOWFactory is SOWFactoryData, SOWFactoryHeader {
   
    function createSOW(address _owner)
        public
        returns (address)
    {       
        SOWStorage sowStorage = new SOWStorage();       
        SOWProxy sowProxy = new SOWProxy(sowStorage, msg.sender);
        //TimeSheetV1 timeSheet = new TimeSheetV1();   
        SOWContractV1 instance = new SOWContractV1();  
        emit ContractCreated(sowProxy, _owner, msg.sender);  
        sowProxy.upgradeTo(instance);       
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