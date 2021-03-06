const Contract = require("@truffle/contract");
const Web3 = require("web3");

const abi = require("./Blockchain/abis/SmartHome.json");
const SmartHome = Contract(abi);
let web3;
if (typeof window !== "undefined" && typeof window.web3 !== "undefined") {
	web3 = new Web3(window.web3.currentProvider);
} else {
	const provider = new Web3.providers.HttpProvider(
		process.env.REACT_APP_WEB3_PROVIDER || "http://127.0.0.1:8545"
	);
	web3 = new Web3(provider);
}
SmartHome.setProvider(web3.currentProvider);
console.log(web3.eth.accounts[0]);
// console.log(web3.eth.defaultAccount);
// console.log(web3.currentProvider);

module.exports = {
	web3: web3,

	getHome: async () => {
		const contract = await SmartHome.deployed();
		return await contract.getHome({from: web3.eth.accounts[0]});
	},
	getDamagesInsurer: async () =>{
		const contract = await SmartHome.deployed();
		return await contract.getDamagesInsurer({from: web3.eth.accounts[0]});
	},
	getDamagesInvestigator: async () =>{
		const contract = await SmartHome.deployed();
		return await contract.getDamagesInvestigator({from: web3.eth.accounts[0]});
	},
	getDamagesSupplier: async () =>{
		const contract = await SmartHome.deployed();
		return await contract.getDamagesSupplier({from: web3.eth.accounts[0]});
	},
	getAllDamage: async()=>{
		const contract = await SmartHome.deployed();
		return await contract.getAllDamage();
	},
	getDamageDetails: async(damageid)=>{
		const contract = await SmartHome.deployed();
		return await contract.getDamageDetails(damageid);
	},
	getStatus: async(damageid)=>{
		const contract = await SmartHome.deployed();
		return await contract.getStatus(damageid);
	},
	getCost: async(damageid)=>{
		const contract = await SmartHome.deployed();
		return await contract.getCost(damageid, {from: web3.eth.accounts[0]});
	},
	addHome: async (name, contactno, homeAddress)=>{
		var meta;
		SmartHome.deployed().then(function(instance){
			meta = instance;
			return meta.addHome(name, contactno, homeAddress, {from: web3.eth.accounts[0]});
		}).then(function(value){
			console.log(value);
		}).catch(function(e){
			console.log(e);
		})
	},
	addInsurer: async (name, contactno, device)=>{
		var meta;
		SmartHome.deployed().then(function(instance){
			meta = instance;
			return meta.addInsurer(name, contactno,device , {from: web3.eth.accounts[0]});
		}).then(function(value){console.log(value);})
		.catch(function(e){console.log(e);})
	}, 
	addInvestigator : async (name, contactno, device)=>{
		var meta;
		SmartHome.deployed().then(function(instance){
			meta = instance;
			return meta.addInvestigator(name, contactno,device , {from: web3.eth.accounts[0]});
		}).then(function(value){console.log(value);})
		.catch(function(e){console.log(e);})
	}, 
	addSupplier : async (name, contactno, device)=>{
		var meta;
		SmartHome.deployed().then(function(instance){
			meta = instance;
			return meta.addSupplier(name, contactno,device , {from: web3.eth.accounts[0]});
		}).then(function(value){console.log(value);})
		.catch(function(e){console.log(e);})
	}, 
	addDamage : async (insurer, investigator, supplier, area, device)=>{
		var meta;
		SmartHome.deployed().then(function(instance){
			meta = instance;
			return meta.addDamage(insurer, investigator, supplier, area, device, {from: web3.eth.accounts[0]});
		}).then(function(value){console.log(value);})
		.catch(function(e){console.log(e);})
	},
	passDamagetoInves: async(damageid)=>{
		var meta;
		SmartHome.deployed().then(function(instance){
			meta = instance;
			return meta.passDamagetoInves(damageid, {from: web3.eth.accounts[0]});
		}).then(function(value){console.log(value);})
		.catch(function(e){console.log(e);})
	},
	passDamagetoSupp:  async(damageid)=>{
		var meta;
		SmartHome.deployed().then(function(instance){
			meta = instance;
			return meta.passDamagetoSupp(damageid, {from: web3.eth.accounts[0]});
		}).then(function(value){console.log(value);})
		.catch(function(e){console.log(e);})
	},
	addCost: async (cost, damageid)=>{
		var meta;
		SmartHome.deployed().then(function(instance){
			meta = instance;
			return meta.addCost(cost, damageid, {from: web3.eth.accounts[0]});
		}).then(function(value){console.log(value);})
		.catch(function(e){console.log(e);})
	},
	passDamagetoInsurer:  async (damageid)=>{
		var meta;
		SmartHome.deployed().then(function(instance){
			meta = instance;
			return meta.passDamagetoInsurer(damageid, {from: web3.eth.accounts[0]});
		}).then(function(value){console.log(value);})
		.catch(function(e){console.log(e);})
	},
	statusUpdateInsur : async(damageid)=>{
		var meta;
		SmartHome.deployed().then(function(instance){
			meta = instance;
			return meta.statusUpdateInsur(damageid, {from: web3.eth.accounts[0]});
		}).then(function(value){console.log(value);})
		.catch(function(e){console.log(e);})
	}
};
