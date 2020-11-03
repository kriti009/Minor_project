pragma solidity >=0.4.22 <0.7.0;

contract SmartHome{
    enum Status{Damage_noticed,Investigation, supplier_check, insurer_approval,parts_replacement}
    struct Insurer{
        string name;
        string contactno;
        
    }
    struct Sensor{
        Insurer insurer;
        string area;
        string device;
    }
    struct Damage{
        uint sensor;
        Status status;
        string area;
    }
    struct Home{
        string name;
        string contactno;
        string homeAddress;
        
        mapping(uint => Damage) damages;
        uint[] damagesArr;
        
        mapping(string  => Sensor) sensors;
        string[] sensorArr;
    }
    
    mapping(address => Home) homes;
    address[] homeArr;
    
    mapping (address => Insurer) insurer;
    address[] insurerArr;
    
    uint damageCount;
    
    function addDamage(uint sensor) public{
        damageCount++;
        uint id = damageCount;
        homes[msg.sender].damages[id].sensor = sensor;
        homes[msg.sender].damages[id].status = Status.Damage_noticed;
        homes[msg.sender].damagesArr.push(id);
    }
    
    function addHome(string memory name,string memory contactno, string memory homeAddress ) public {
        homes[msg.sender].name = name;
        homes[msg.sender].contactno = contactno;
        homes[msg.sender].homeAddress = homeAddress;
        homeArr.push(msg.sender);
    }
    
    function getHome() public view returns(string memory, string memory, string memory, uint ){
        uint total_damages=homes[msg.sender].damagesArr.length;
        return( homes[msg.sender].name, homes[msg.sender].contactno, homes[msg.sender].homeAddress,total_damages);
    }
    
    function addNewSensor(string sensorId, string area, address insurer, string device) public{
        // insurerArr.push(insurer);
        homes[msg.sender].sensors[sensorId].area = area;
        homes[msg.sender].sensors[sensorId].insurer = insurer;
        homes[msg.sender].sensors[sensorId].device = device;
    }
    function addDummyInsurer(string name,)
}