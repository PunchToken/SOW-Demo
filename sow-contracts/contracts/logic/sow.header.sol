pragma solidity ^0.4.23;

contract SOWHeader {
    event SOWNameSet(string indexed contractName);
    event SOWProposed(address indexed proposer, string indexed contractName);
    event SOWWorkerAdded(address indexed worker, string indexed contractName);
    event SOWAccepted(address indexed acceptor, string indexed contractName);
    event SOWIsActive(string indexed contractName);
    event SOWIsExpired(string indexed contractName);
    event SOWStartDateSet(uint256 indexed startDate, string indexed contractName);
    event SOWEndDateSet(uint256 indexed startDate, string indexed contractName);
    event SOWRateSet(uint256 indexed startDate, string indexed contractName);
    enum States {
        Proposed,
        Accepted,
        Active,
        Expired       
    }
}