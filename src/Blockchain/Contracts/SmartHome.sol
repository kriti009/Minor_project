pragma solidity >=0.4.22 <0.7.0;

contract SmartHome{
    enum Status{Damage_noticed,Investigation, supplier_check, insurer_approval,parts_replacement}
    
    struct Insurer{
        string name;
        string contactno;
        uint damageCount;
    }
    struct Damage{
        address home;
        address insurer;
        string area;
        string device;
        Status status;
    }
    struct Home{
        string name;
        string contactno;
        string homeAddress;
        uint[] damagesArr;
        // mapping(string  => Sensor) sensors;
        // string[] sensorArr;
    }
    
    mapping(address => Home) homes;
    address[] homeArr;
    mapping(address => Insurer) insurers;
    mapping(uint => Damage) damages;
    uint[] damageArr;
    //dummy
    uint[] damageList;
    
    uint damageCount;
    
    function compareStrings (string memory a, string memory b) public pure returns (bool) {
        return (keccak256(abi.encodePacked((a))) == keccak256(abi.encodePacked((b))) );
    }
    
    function addDamage(address insurer, string memory area, string memory device) public{
        damageCount++;
        uint id = damageCount;
        damages[id].home = msg.sender;
        damages[id].status = Status.Damage_noticed;
        damages[id].insurer = insurer;
        damages[id].area = area;
        damages[id].device = device;
        homes[msg.sender].damagesArr.push(id);
<<<<<<< HEAD
=======
        insurers[insurer].damageCount++;
>>>>>>> 9b6fd6d025238c7d8a6c4756586064c1004a0440
        damageArr.push(id);
    }
    
    function addHome(string memory name,string memory contactno, string memory homeAddress ) public {
        homes[msg.sender].name = name;
        homes[msg.sender].contactno = contactno;
        homes[msg.sender].homeAddress = homeAddress;
        homeArr.push(msg.sender);
    }
    
    function getHome() public view returns(string memory, string memory, string memory, uint , uint[] memory ){
        uint total_damages=homes[msg.sender].damagesArr.length;
        return( homes[msg.sender].name, homes[msg.sender].contactno, homes[msg.sender].homeAddress,total_damages,homes[msg.sender].damagesArr);
    }
    function getDamagesInsurer() public view returns(uint[] memory){
<<<<<<< HEAD
        uint[] memory damageBYInsurer;
        // damageList = damageBYInsurer;
        for(uint i=0;i<damageArr.length;i++){
            if(damages[damageArr[i]].insurer == msg.sender){
                damageBYInsurer.push(damageArr[i]);
=======
        uint[] memory damageBYInsurer = new uint[](insurers[msg.sender].damageCount);
        uint j=0;
        for(uint i=0;i<damageArr.length;i++){
            if(damages[damageArr[i]].insurer == msg.sender){
                // damageBYInsurer.push(damageArr[i]);
                damageBYInsurer[j]=  damageArr[i];
                j++;
>>>>>>> 9b6fd6d025238c7d8a6c4756586064c1004a0440
            }
        }
        return damageBYInsurer;
    }
<<<<<<< HEAD
    // function addNewSensor(string memory sensorId, string memory area, address insurer, string memory device) public{
    //     homes[msg.sender].sensors[sensorId].area = area;
    //     homes[msg.sender].sensors[sensorId].insurer = insurer;
    //     homes[msg.sender].sensors[sensorId].device = device;
    // }
=======
>>>>>>> 9b6fd6d025238c7d8a6c4756586064c1004a0440
    function addDummyInsurer(string memory name,string memory contactno) public{
        address dummy = 0xdD870fA1b7C4700F2BD7f44238821C26f7392148;
        insurers[dummy].name = name;
        insurers[dummy].contactno = contactno;
    }
}
