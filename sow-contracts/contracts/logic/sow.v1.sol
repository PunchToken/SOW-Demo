pragma solidity ^0.4.23;


import "../ownable/ownable.sol";
import "../storage/sow.storage.state.sol";
import "../util/safemath.sol";
import "../util/AddressUtils.sol";
import "../logic/sow.header.sol";


/*
address of proposer
address of acceptor
address of consultant
bool isActive
bool isExpired
effectiveDate: DataTypes.DATE, // start date
commencementDateOfServices: DataTypes.DATE,
completionDateOfServices: DataTypes.DATE,
projectName,
rate,
weekStartDay
sowName (project code)
*/

contract SOWContractV1 is SOWHeader, SOWStorageState {
    // Import safeMath for operations.
    using SafeMath for uint256;
    using AddressUtils for address; 
    
    modifier onlyActive() {
        require(_storage.getBool("isActive") == true);
        _;
    }

     modifier notActive() {       
        require(_storage.getBool("isActive") == false);
        _;
    }  

    modifier notExpired(){
         require(_storage.getBool("isExpired") == false);
        _;
    }

    modifier onlyProposed() {
         require(_storage.getAddress("proposer") != address(0));
        _;
    }

    modifier notProposed() {
         require(_storage.getAddress("proposer") == address(0));
        _;
    }

    modifier onlyProposer(address proposer) {
         require(_storage.getAddress("proposer") == proposer);
        _;
    }

     modifier eitherParticipant(address participant) {
         require(_storage.getAddress("proposer") == participant || _storage.getAddress("acceptor") == participant);
        _;
    }

    function setName(string _contractName) 
        public
        notActive
        notExpired
        returns(bool)
    {
        _storage.setString("contractName", _contractName);
        emit SOWNameSet(_contractName);
        return true;
    }

    function setProposerAddress(address _proposerAddress) 
         public 
         notActive 
         notExpired
         notProposed
         returns(bool) 
    {
        require(_proposerAddress != address(0), "Proposer Address is a zero address, not allowed.");
        //require(_proposerAddress.isContract() == false, "Proposer Address is a contract address, not allowed");       
        _storage.setAddress("proposer", _proposerAddress);
        emit SOWProposed(_proposerAddress,  getName());
        return true;
    }

    // the proposer must also accept the proposer
    function setAcceptorAddress(address _acceptorAddress) 
        public 
        notActive 
        notExpired
        onlyProposed 
        returns (bool) 
    {
        require(_acceptorAddress != address(0), "Proposer Address is a zero address, not allowed.");
        //require(_acceptorAddress.isContract() == false, "Proposer Address is a contract address, not allowed");
        _storage.setAddress("acceptor", _acceptorAddress);
        return true;
    }

    function setWorkerAddress(address _workerAddress) 
        public        
        notExpired
        returns (bool) 
    {
        require(_workerAddress != address(0), "Worker Address is a zero address, not allowed.");
        //require(_workerAddress.isContract() == false, "Proposer Address is a contract address, not allowed");
        _storage.setAddress("worker", _workerAddress);
        emit SOWWorkerAdded(_workerAddress, getName());
        return true;
    }

    function setStartDate(uint256 _startDate) 
        public         
        notExpired 
        returns (bool)
    {
        _storage.setUint("startDate",_startDate);
        emit SOWStartDateSet(_startDate, getName());
        return true;
    }

     function setEndDate(uint256 _endDate) 
        public         
        notExpired 
        returns (bool)
    {
        _storage.setUint("endDate",_endDate);
        emit SOWEndDateSet(_endDate, getName());
        return true;
    }

    function setRate(uint256 _rate) 
        public
        notExpired
        returns (bool)
    {
         _storage.setUint("rate",_rate);
        emit SOWRateSet(_rate, getName());
        return true;
    }

    function setActive(address proposer) 
        private
        notActive 
        notExpired
        onlyProposer(proposer)
        returns (bool)
    {
        // require
        require(_storage.getAddress("proposer") != address(0));
        require(_storage.getAddress("acceptor") != address(0));
        //require(_storage.getAddress("worker") != address(0));
        // check dates
        // check rates
         _storage.setBool("isActive", true);
         emit SOWIsActive(getName());
         return true;
    }

    function setExpired() 
        private
        onlyActive
        returns (bool)
    {        
         _storage.setBool("isExpired", true);
         emit SOWIsExpired(getName());
         return true;
    }

    function getRate()
        public
        view
        returns(uint256 rate)
    {
        return _storage.getUint("rate");
    }

    function getWorker()
        public
        view
        returns(address worker)
    {
        return _storage.getAddress("worker");
    }

    function getName()
        private
        view
        returns (string)
    {
        return _storage.getString("contractName");
    }

    function checkActive()
        public
        view
        returns (bool)
    {
        return  _storage.getBool("isActive");
    }
}