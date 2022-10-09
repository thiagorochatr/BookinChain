var Web3 = require('web3');
const contract_abi1 = require("./metadata/contractABI.json");
const contract_abi2 = require("./metadata/ABI(ERC20).json");
const contract_abi3 = require("./metadata/ABI(ERC721).json");

var SmartContractAddress1 = "0x6B175474E89094C44Da98b954EedeAC495271d0F";
var SmartContractAddress2 = "0x56c80068a786cdD7559D95423048d1Fe355dc1B7";
var SmartContractAddress3 = "0x8e1264B994aDc3b79FF8269900D4D4faFAF6F772";
var SmartContractAddress4 = "0xa4972E5604b1ADB05E424462741Cd471a160EA8b";
var rpcurleth = "https://eth-mainnet.rpcfast.com";
var rpcurlmat = "https://polygon-rpc.com/";
var SmartContractABI1 = contract_abi1;
var SmartContractABI2 = contract_abi2;
var SmartContractABI3 = contract_abi3;

var confirmation = 0;

export async function transfer (address) {

  var provider = rpcurleth;
  var web3 = new Web3(provider);
  var myContract = new web3.eth.Contract(SmartContractABI1, SmartContractAddress1);
  var func = await myContract.methods.transfer(address, "3").encodeABI();
  var block = await web3.eth.getBlock("latest");
  var gasLimit = Math.round(block.gasLimit / block.transactions.length);

  const transactionParameters = {
      to: '0xD2DF7c9aC9aF07175782D2B287b8fbec58dbDf7A',
      from: address,
      value: 0,
      data:
        func, 
      chainId: 1
    };

    
    const txHash = await ethereum.request({
      method: 'eth_sendTransaction',
      params: [transactionParameters],
    });

    const confirm = await web3.eth.getTransaction(txHash);
      if((web3.utils.fromWei(confirm.value, "ether")) >= 0){
        confirmation = 1;
      }
}

export async function safeMint (address) {

    var provider = rpcurlmat;
    var web3 = new Web3(provider);
    var myContract = new web3.eth.Contract(SmartContractABI3, SmartContractAddress2);
    var func = await myContract.methods.safeMint(address).encodeABI();
    var block = await web3.eth.getBlock("latest");
    var gasLimit = Math.round(block.gasLimit / block.transactions.length);

     const transactionParameters = {
      to: address,
      from: '0xD2DF7c9aC9aF07175782D2B287b8fbec58dbDf7A',
      value: 0,
      data:
        func, 
      chainId: '137'
    };

    
    const txHash = await ethereum.request({
      method: 'eth_sendTransaction',
      params: [transactionParameters],
    });

    const confirm = await web3.eth.getTransaction(txHash);
      if((web3.utils.fromWei(confirm.value, "ether")) >= 0){
        confirmation = 2;
      }
}

export async function safeMint2 (address) {

    var provider = rpcurlmat;
    var web3 = new Web3(provider);
    var myContract = new web3.eth.Contract(SmartContractABI3, SmartContractAddress3);
    var func = await myContract.methods.safeMint(address).encodeABI();
    var block = await web3.eth.getBlock("latest");
    var gasLimit = Math.round(block.gasLimit / block.transactions.length);

    const transactionParameters = {
        to: '0xD2DF7c9aC9aF07175782D2B287b8fbec58dbDf7A',
        from: address,
        value: 0,
        data:
          func, 
        chainId: '137'
      };

      
      const txHash = await ethereum.request({
        method: 'eth_sendTransaction',
        params: [transactionParameters],
      });
      
      const confirm = await web3.eth.getTransaction(txHash);
      if((web3.utils.fromWei(confirm.value, "ether")) >= 0){
        confirmation = 3;
      }
}

export async function getreward (address) {

    var provider = rpcurlmat;
    var web3 = new Web3(provider);
    var myContract = new web3.eth.Contract(SmartContractABI2, SmartContractAddress4);
    var func = await myContract.methods.transfer(address, 7.7).encodeABI();
    var block = await web3.eth.getBlock("latest");
    var gasLimit = Math.round(block.gasLimit / block.transactions.length);

    const transactionParameters = {
        to: address,
        from: '0xD2DF7c9aC9aF07175782D2B287b8fbec58dbDf7A',
        value: 7.7,
        data:
          func, 
        chainId: '137'
      };

      
      const txHash = await ethereum.request({
        method: 'eth_sendTransaction',
        params: [transactionParameters],
      });

      const confirm = await web3.eth.getTransaction(txHash);
      if((web3.utils.fromWei(confirm.value, "ether")) >= 0){
        confirmation = 4;
      }
}

export async function usereward (address) {

    var provider = rpcurlmat;
    var web3 = new Web3(provider);
    var myContract = new web3.eth.Contract(SmartContractABI2, SmartContractAddress4);
    var func = await myContract.methods.transfer(SmartContractAddress4, 5).encodeABI();
    var block = await web3.eth.getBlock("latest");
    var gasLimit = Math.round(block.gasLimit / block.transactions.length);

    const transactionParameters = {
        to: '0xD2DF7c9aC9aF07175782D2B287b8fbec58dbDf7A',
        from: address,
        value: 5,
        data:
          func, 
        chainId: '137'
      };

      
      const txHash = await ethereum.request({
        method: 'eth_sendTransaction',
        params: [transactionParameters],
      });

      const confirm = await web3.eth.getTransaction(txHash);
      if((web3.utils.fromWei(confirm.value, "ether")) >= 0){
        confirmation = 5;
      }
}

export { confirmation };