pragma solidity ^0.4.23;


import "../logic/sow.v1.sol";
import "../proxy/sow.proxy.sol";
import "./sow.factory.data.sol";
import "../storage/sow.storage.sol";
import "./sow.factory.header.sol";
import "../ownable/ownable.sol";


contract SOWFactory is SOWFactoryData, SOWFactoryHeader {  


    function createSOW(address _owner)
        public
        returns (address)
    {       
        // todo require _owner to not be null
        address sowStorageAddr = new SOWStorage();
        SOWStorage sowStorage = SOWStorage(sowStorageAddr);
        
        address sowProxyAddr = new SOWProxy(sowStorage, _owner); 
        SOWProxy sowProxyInstance = SOWProxy(sowProxyAddr);
        
        address sowLogicAddr = new SOWContractV1();    
        sowProxyInstance.upgradeBy(sowLogicAddr, _owner);              
        emit SOWSuccessfullyCreated(sowStorageAddr,sowLogicAddr,sowProxyAddr, _owner, msg.sender);
        return sowProxyAddr; 
    }

    function getContractCount() 
    public
    constant
    returns(uint contractCount)
  {
    return _sowContracts.length;
  } 
  
}