const { ethers } = require("hardhat");

require("dotenv").config({ path: ".env" });
const { WHITELIST_CONTRACT_ADDRESS, METADATA_URL } = require("../constants");

async function main() {
  const whiteListContract = WHITELIST_CONTRACT_ADDRESS;

  const metadataUrl = METADATA_URL;

  const NftContract = await ethers.getContractFactory("CryptoDevs");

  const deployedContract = await NftContract.deploy(
    metadataUrl,
    WHITELIST_CONTRACT_ADDRESS
  );

  const tx = await deployedContract.deployed();

  console.log("Crypto Devs Contract Address:", deployedContract.address);
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
