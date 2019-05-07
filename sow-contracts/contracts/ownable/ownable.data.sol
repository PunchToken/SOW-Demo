pragma solidity ^0.4.23;

/**
 * @title Ownable
 * @dev The Ownable contract has an owner address, and provides basic authorization control
 * functions, this simplifies the implementation of "user permissions".
 */

contract OwnableData {
    address internal owner;

    modifier onlyOwner() {
        require(msg.sender == owner, "Address is not owner");
        _;
    }    

    modifier isOwner(address caller) {
    require(caller == owner, "Address is not owner");
        _;
  }
}