const { ethers } = require("hardhat")

async function main() {
    
    const Revoke = await ethers.getContractFactory("Revoke");
    const revoke = await Revoke.deploy();
  
    console.log("Revoke Contract deployed to:", revoke.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });