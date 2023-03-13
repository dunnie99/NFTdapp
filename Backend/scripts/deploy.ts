import { ethers } from "hardhat";

async function main() {

  const [owner] = await ethers.getSigners();


  
  // marketPlace deployment
  // const market = await ethers.getContractFactory("NFTMarketplace");
  // const marketPlace = await market.deploy();

  // await marketPlace.deployed();

  // console.log(`MarketPlace is deployed to ${marketPlace.address}`);

  //0xe8e25668Af69A0997e5547420901241c374dd300 ======> MarketPlace is deployed


  // NFT deployment

  const NFT = await ethers.getContractFactory("NFT");
  const nft = await NFT.deploy("0xe8e25668Af69A0997e5547420901241c374dd300");
  await nft.deployed();

  console.log(`NFT is deployed to ${nft.address}`);


//0x9e8CEa213DE0f209802F2c0b43A03ad2E543dE30 =========> NFT is deployed




























}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
