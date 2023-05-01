const { ethers } = require("hardhat");

async function main() {
  const counterContractFactory = await ethers.getContractFactory("Counter");
  console.log("Deploying contract...");
  const counterContract = await counterContractFactory.deploy();
  await counterContract.deployed();
  console.log(`Contract deployed to: ${counterContract.address}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
