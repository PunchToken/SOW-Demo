pragma solidity ^0.4.23;


contract SOWFactoryData {
     mapping(address => address[]) _perAddress;
     address[] public _sowContracts;
}