pragma solidity ^0.4.23;

import "../ownable/ownable.sol";
import "../storage/sow.storage.state.sol";
import "./sow.proxy.data.sol";
import "./sow.proxy.header.sol";

contract SOWProxy is SOWStorageState , ProxyData, ProxyHeader, Ownable {
    
  constructor(SOWStorage __storage , address _owner) 
      public
      Ownable(_owner)  
   {
      _storage = __storage;     
   }
  function implementation() public view returns (address) {
    return _implementation;
  }

  function upgradeTo(address impl) public onlyOwner {
    require(_implementation != impl);
    _implementation = impl;
    emit Upgraded(impl);
  }

  // for "forwarding proxy"
  // see EIP 897 for more details
  function proxyType() public pure returns (uint256) {
        return 1;                   
  }
 
  function () payable public {
    address _impl = implementation();
    require(_impl != address(0));
    bytes memory data = msg.data;

    assembly {
      let result := delegatecall(gas, _impl, add(data, 0x20), mload(data), 0, 0)
      let size := returndatasize
      let ptr := mload(0x40)
      returndatacopy(ptr, 0, size)
      switch result
      case 0 { revert(ptr, size) }
      default { return(ptr, size) }
    }
  }
}