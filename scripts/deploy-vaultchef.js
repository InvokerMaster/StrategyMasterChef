async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  console.log("Account balance:", (await deployer.getBalance()).toString());

  const VaultChef = await ethers.getContractFactory("VaultChef");
  const chef = await VaultChef.deploy();

  console.log("Contract deployed to:", chef.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error.reason);
    console.error(error.code);
    process.exit(1);
  });
