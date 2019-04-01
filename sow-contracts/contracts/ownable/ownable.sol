pragma solidity ^0.4.23;

/**
 * @title Ownable
 * @dev The Ownable contract has an owner address, and provides basic authorization control
 * functions, this simplifies the implementation of "user permissions".
 */

 import "./ownable.data.sol";
 import "./ownable.header.sol";

contract Ownable is OwnableData, OwnableHeader {

    constructor(address _owner)
        public
    {
        owner = _owner;
    }  
      
    /**
    * @dev Allows the current owner to transfer control of the contract to a newOwner.
    * @param newOwner The address to transfer ownership to.
    */
    function transferOwnership(address newOwner) public onlyOwner {
        require(newOwner != address(0));
        emit OwnershipTransferred(owner, newOwner); // solhint-disable-line
        owner = newOwner;
    }

}