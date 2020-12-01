    pragma solidity >=0.4.22 <0.7.0;
    
    contract SmartHome{
        enum Status{Damage_noticed,Investigation, supplier_check, insurer_approval,parts_replacement}
        
        struct Investigator{
            string name;
            string contactno;
            uint damageCount;
        }
        struct Insurer{
            string name;
            string contactno;
            uint damageCount;
        }
        struct Damage{
            address home;
            address insurer;
            address investigator;
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
        mapping(address => Investigator) investigators;
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
            insurers[insurer].damageCount++;
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
            uint[] memory damageBYInsurer = new uint[](insurers[msg.sender].damageCount);
            uint j=0;
            for(uint i=0;i<damageArr.length;i++){
                if(damages[damageArr[i]].insurer == msg.sender){
                    damageBYInsurer[j]=  damageArr[i];
                    j++;
                }
            }
            return damageBYInsurer;
        }
        function getDamagesInvestigator() public view returns(uint[] memory){
            uint[] memory damageInves = new uint[](investigators[msg.sender].damageCount);
            uint j=0;
            for(uint i=0;i<damageArr.length;i++){
                if(damages[damageArr[i]].investigator == msg.sender){
                    damageInves[j] = damageArr[i];
                    j++;
                }
            }
            return damageInves;
        }
            function addInvestigator(uint damageId, address investigator) public{
            damages[damageId].investigator = investigator;
            damages[damageId].status = Status.Investigation;
            investigators[investigator].damageCount++;
        }
        
        
        
        //Dummy seed
        function addDummyInsurer(string memory name,string memory contactno) public{
            address dummy = 0xdD870fA1b7C4700F2BD7f44238821C26f7392148;
            insurers[dummy].name = name;
            insurers[dummy].contactno = contactno;
        }
    }