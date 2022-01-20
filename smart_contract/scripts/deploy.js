const main = async () => {
  //This is like a function factory which is going to generate instances of our contract
  const Transactions = await hre.ethers.getContractFactory("Transactions");
  //Below is one specific instance of the contract
  const transactions = await Transactions.deploy();

  await transactions.deployed();

  console.log("Greeter deployed to:", transactions.address);
}

const runMain = async () => {
  try{
    //Calling await and main function which is going to deploy our main contract
    await main();
    //The below means the process ran successfully
    process.exit(0);
  }catch(error){
    console.log(error);
    //We have passed 1 which means there was an error
    process.exit(1);
  }
}

//When we execute the file it is going to run the runMain() fn. first and then inside of runMain() it will run main()
runMain();