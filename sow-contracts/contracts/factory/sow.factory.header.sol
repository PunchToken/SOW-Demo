pragma solidity ^0.4.23;

contract SOWFactoryHeader {
   event SOWStorageCreated(address indexed storageAddress, address indexed _owner);
   event SOWProxyCreated(address indexed proxyAddress, address indexed _owner);
   event SOWLogicCreated(address indexed logicAddress, address indexed _owner);
   event SOWSuccessfullyCreated(address indexed storageAddress, address indexed logicAddress, address indexed proxyAddress, address  _owner, address  _sender);
}