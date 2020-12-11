pragma solidity >=0.4.22 <0.6.0;

contract SmartHome{
     enum Status{Damage_noticed,Investigation, supplier_check, approval_pending,parts_replacement, resolved}

       struct Home{
        string name;
        string contactno;
        string homeAddress;
        bool exist;
        uint[] damagesArr; //store all damages of that home

    }

    struct Damage{
        address home;
        address insurer;
        address investigator;
        address supplier;
        string area;
        string device;
        string cost;
        Status status;
    }

    struct Insurer{
        string name;
        bool exist;
        string contactno;
      string device;
        uint damageCount;
    }

    struct Investigator{
        string name;
        bool exist;
        string contactno;
        string device;
        uint damageCount;
    }

    struct Supplier{
        string device;
        string name;
        bool exist;
        string contactno;
        uint damageCount;
    }

    mapping(address => Home) homes;
    address[] homeArr;

    mapping(address => Insurer) insurers;
    address[] insurerArr;

    mapping(uint => Damage) damages;
      uint[] damageArr;


    //dummy
    uint[] damageList;
    uint damageCount=0;


    mapping(address => Investigator ) inves; //store address and respective details
    address[] invesArr;

    mapping(address => Supplier) supp;
    address[] suppArr;

   //constructor
  constructor() public {
       damageCount=0;
   }

function compareStrings (string memory a, string memory b) public pure returns (bool) {
        return (keccak256(abi.encodePacked((a))) == keccak256(abi.encodePacked((b))) );
    }

    //check auth of various parties

    //home
     modifier AuthorizedHome(address a){
        require(homes[a].exist, "Home does not exist");
        _;
    }
    //insurer
      modifier AuthorizedInsurer(address a){
        require(insurers[a].exist, "Insurer does not exist");
        _;
    }

    //Investigator
      modifier AuthorizedInvestigator(address a){
        require(inves[a].exist, "Investigator does not exist");
        _;
    }
    //supplier
    modifier AuthorizedSuuplier(address a){
        require(supp[a].exist, "Supplier does not exist");
        _;
    }



    //add home
       function addHome(string memory name,string memory contactno, string memory homeAddress ) public {
        homes[msg.sender].name = name;
        homes[msg.sender].contactno = contactno;
        homes[msg.sender].homeAddress = homeAddress;
        homes[msg.sender].exist=true;
        homeArr.push(msg.sender);
    }

     //add dummy insurer
  //  function addDummyInsurer(string memory name,string memory contactno) public{
  //      address dummy = 0xdD870fA1b7C4700F2BD7f44238821C26f7392148;
  //      insurers[dummy].name = name;
  //      insurers[dummy].contactno = contactno;
 //   }


  //add insurer
  function addInsurer(string memory name, string memory contactno, string memory device) public{
      insurers[msg.sender].name=name;
      insurers[msg.sender].contactno=contactno;
      insurers[msg.sender].exist=true;
      insurers[msg.sender].device=device;
   //   insurers[msg.sender].area=area;
  }


  //add Investigator
    function addInvestigator(string memory name, string memory contactno, string memory device) public{
      inves[msg.sender].name=name;
      inves[msg.sender].contactno=contactno;
      inves[msg.sender].device=device;
      inves[msg.sender].exist=true;
     //  inves[msg.sender].area=area;
  }


    //add Supplier

    function addSupplier(string memory name, string memory contactno, string memory device) public{
      supp[msg.sender].name=name;
      supp[msg.sender].contactno=contactno;
      supp[msg.sender].device=device;
      supp[msg.sender].exist=true;
    //  supp[msg.sender].area=area;
  }

    //add damage
    function addDamage(address insurer, address investigator,address supplier,string memory area, string memory device) public AuthorizedHome(msg.sender)
    AuthorizedInsurer(insurer) AuthorizedInvestigator(investigator) AuthorizedSuuplier(supplier) {


        damageCount++;
        uint id = damageCount;

        damages[id].home = msg.sender;
        damages[id].status = Status.Damage_noticed;
        damages[id].insurer = insurer;
        damages[id].investigator=investigator;
        damages[id].supplier=supplier;
        damages[id].area = area;
        damages[id].device = device;
        damages[id].cost= "-";

        homes[msg.sender].damagesArr.push(id); //pushing to map address of home => damages of home

         // increase damage count of each of the party involved
        insurers[insurer].damageCount++;
        inves[investigator].damageCount++;
        supp[supplier].damageCount++;
        damageArr.push(id);
    }


    //get home details
    function getHome() public AuthorizedHome(msg.sender) view returns(string memory, string memory, string memory, uint , uint[] memory ){
        uint total_damages=homes[msg.sender].damagesArr.length;
        return( homes[msg.sender].name, homes[msg.sender].contactno, homes[msg.sender].homeAddress,total_damages,homes[msg.sender].damagesArr);
    }


  //get all damages of home owner
  // directly through damagesArr of home -> so not required
  //get list of all damages
  function getAllDamage() public view returns(uint[] memory)
  {
      uint[] memory dam= new uint[](damageArr.length);

      uint j=0;
      uint i=0;

      for(i=0;i<damageArr.length;i++)
      {
          dam[j]=damageArr[i];
          j++;
      }
      return dam;
  }


    //get all the damages id of insurer

    function getDamagesInsurer() public AuthorizedInsurer(msg.sender) view returns(uint[] memory){
        uint[] memory damageBYInsurer = new uint[](insurers[msg.sender].damageCount);


        uint i=0;
        uint j=0;
        for(i=0;i<damageArr.length;i++)
        {
            if(damages[damageArr[i]].insurer==msg.sender) //add
            {
                damageBYInsurer[j]=damageArr[i];
                j++;
            }
        }
        return damageBYInsurer;
    }

//get all damages of Investigator

function getDamagesInvestigator()public AuthorizedInvestigator(msg.sender) view returns(uint[] memory)
{
      uint[] memory damageBYInves = new uint[](inves[msg.sender].damageCount);

      uint j=0;
      uint i=0;

      for(i=0;i<damageArr.length;i++)
      {
          if(damages[damageArr[i]].investigator==msg.sender) //add
          {
              damageBYInves[j]=damageArr[i];
              j++;
          }


      }
       return damageBYInves;
}

//get all damages id for supplier
function getDamagesSupplier()public AuthorizedSuuplier(msg.sender) view returns(uint[] memory)
{
      uint[] memory damageBYSupp = new uint[](supp[msg.sender].damageCount);

      uint j=0;
      uint i=0;

      for(i=0;i<damageArr.length;i++)
      {
          if(damages[damageArr[i]].supplier==msg.sender) //add
          {
              damageBYSupp[j]=damageArr[i];
              j++;
          }


      }
       return damageBYSupp;
}

//get curr status of damage
function getStatus(uint damageid) public view returns(Status)
{
    return (damages[damageid].status);
}
//return damage info given damageid

function getDamageDetails(uint damageid) public view returns(address, address, address, address, string memory, string memory, Status)
{
    return (damages[damageid].home,
             damages[damageid].insurer,
             damages[damageid].investigator,
             damages[damageid].supplier,
             damages[damageid].area,
             damages[damageid].device,
             damages[damageid].status);
}
//update status to investigation
function passDamagetoInves(uint damageid) public{
    require(damages[damageid].insurer==msg.sender,"invalid damageid");

    damages[damageid].status= Status.Investigation;

}

//update status to  supplier_check

  function passDamagetoSupp(uint damageid) public{
    require(damages[damageid].investigator==msg.sender,"invalid damageid");

    damages[damageid].status= Status.supplier_check;

}

//update status to  approval_pending
  function passDamagetoInsurer(uint damageid) public{
    require(damages[damageid].supplier==msg.sender,"invalid damageid");

    damages[damageid].status= Status.approval_pending;

}

//update status to parts_replacement and resolved both by insurer
 function statusUpdateInsur(uint damageid) public{
    require(damages[damageid].insurer==msg.sender,"invalid damageid");

    Status curr=damages[damageid].status;
    if(curr==Status.approval_pending)
    damages[damageid].status= Status.parts_replacement;
    else if(curr==Status.parts_replacement)
     damages[damageid].status= Status.resolved;

}

// add estimated cost by supplier

function addCost(string memory cost,uint damageid) public {
     require(damages[damageid].supplier==msg.sender,"You're not authorized");
    damages[damageid].cost= cost;
}

//get cost
function getCost(uint damageid) public view returns(string memory){
      require(( damages[damageid].home==msg.sender)||(damages[damageid].insurer==msg.sender) ||(damages[damageid].supplier==msg.sender) ||
      (damages[damageid].investigator==msg.sender),"You're not authorized to view this");

      return damages[damageid].cost;
}

}