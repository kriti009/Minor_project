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

module.exports = {
	web3: web3,

	getHome: async () => {
		const contract = await SmartHome.deployed();
		return await contract.getHome();
	},
};
