async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  console.log("Account balance:", (await deployer.getBalance()).toString());

  const vaultChefAddress = '0xfe6eDda594AAD2392Db0D36cE89F364a53e2f924';
  const bananaAddress = '0x603c7f932ED1fc6575303D8Fb018fDCBb0f39a95';
  const bnbBusdLp = '0x51e6D27FA57373d8d4C256231241053a70Cb1d93';
  const masterchefAddress = '0x5c8D727b265DBAfaba67E050f2f739cAeEB4A6F9';
  const uniRouterAddress = '0xcF0feBd3f17CEf5b47b0cD257aCf6025c5BFf3b7';
  const bnbAddress = '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c';
  const busdAddress = '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56';

  const StrategyMasterchef = await ethers.getContractFactory("StrategyMasterchef");
  try {
    const masterChef = await StrategyMasterchef.deploy(
      // vaultChefAddress,
      // masterchefAddress,
      // uniRouterAddress,
      // 0, // Banana Pool
      // bnbBusdLp, // BNB - BUSD APE LP
      // bananaAddress, // BANANA address
      // [bananaAddress, bnbAddress], // BANANA TO BNB
      // [bananaAddress, busdAddress], // BANANA TO BUSD
      // [bananaAddress, busdAddress], // FOR NOW, BANANA TO BUSD (BURN BUSD)
      // [bananaAddress, bnbAddress], // BANANA TO BNB
      // [bananaAddress, busdAddress], // BANANA TO BUSD
      // [bnbAddress, bananaAddress], // BNB TO BANANA
      // [busdAddress, bananaAddress] // BUSD TO BANANA
    );
    console.log("Contract deployed to:", masterChef.address);
  } catch (e) {
    console.log(e);
  }
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error.reason);
    console.error(error.code);
    process.exit(1);
  });
