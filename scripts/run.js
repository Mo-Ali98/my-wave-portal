const main = async () => {
  const [
    owner,
    randomPerson1,
    randomPerson2,
    randomPerson3,
    randomPerson4,
    randomPerson5,
  ] = await hre.ethers.getSigners();

  const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");
  const waveContract = await waveContractFactory.deploy({
    value: hre.ethers.utils.parseEther("0.1"),
  });
  await waveContract.deployed();

  console.log("Contract addy:", waveContract.address);
  console.log("Contract deployed by:", owner.address);

  /*
   * Get Contract balance
   */
  let contractBalance = await hre.ethers.provider.getBalance(
    waveContract.address
  );
  console.log(
    "Contract balance:",
    hre.ethers.utils.formatEther(contractBalance)
  );

  let waveCount;
  waveCount = await waveContract.getTotalWaves();
  console.log(waveCount.toNumber());

  /**
   * Let's send a few waves!
   */
  let waveTxn = await waveContract.wave("A message!");
  await waveTxn.wait(); // Wait for the transaction to be mined

  waveTxn = await waveContract
    .connect(randomPerson1)
    .wave("Message sent by randomPerson1!");
  await waveTxn.wait(); // Wait for the transaction to be mined

  waveTxn = await waveContract
    .connect(randomPerson2)
    .wave("Message sent by randomPerson2!");
  await waveTxn.wait(); // Wait for the transaction to be mined

  waveTxn = await waveContract
    .connect(randomPerson3)
    .wave("Message sent by randomPerson3!");
  await waveTxn.wait(); // Wait for the transaction to be mined

  waveTxn = await waveContract
    .connect(randomPerson4)
    .wave("Message sent by randomPerson4!");
  await waveTxn.wait(); // Wait for the transaction to be mined

  waveTxn = await waveContract
    .connect(randomPerson5)
    .wave("Message sent by randomPerson5!");
  await waveTxn.wait(); // Wait for the transaction to be mined

  /*
   * Get Contract balance to see what happened!
   */
  contractBalance = await hre.ethers.provider.getBalance(waveContract.address);
  console.log(
    "Contract balance:",
    hre.ethers.utils.formatEther(contractBalance)
  );

  let allWaves = await waveContract.getAllWaves();
  console.log(allWaves);
  waveCount = await waveContract.getTotalWaves();
  console.log(waveCount.toNumber());
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();

/*
  const [
    owner,
    randomPerson1,
    randomPerson2,
    randomPerson3,
    randomPerson4,
    randomPerson5,
  ] = await hre.ethers.getSigners();
  const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");
  const waveContract = await waveContractFactory.deploy();
  await waveContract.deployed();

  console.log("Contract deployed to:", waveContract.address);
  console.log("Contract deployed by:", owner.address);

  let waveAddresses = [];

  let waveCount;
  waveCount = await waveContract.getTotalWaves();

  let waveTxn = await waveContract.wave();
  waveAddresses.push(waveContract.address);
  await waveTxn.wait();

  waveCount = await waveContract.getTotalWaves();

  waveTxn = await waveContract.connect(randomPerson1).wave();
  waveAddresses.push(randomPerson1.address);

  await waveTxn.wait();

  waveCount = await waveContract.getTotalWaves();

  waveTxn = await waveContract.connect(randomPerson2).wave();
  waveAddresses.push(randomPerson2.address);

  await waveTxn.wait();

  waveCount = await waveContract.getTotalWaves();
  waveTxn = await waveContract.connect(randomPerson3).wave();
  waveAddresses.push(randomPerson3.address);

  await waveTxn.wait();

  waveCount = await waveContract.getTotalWaves();
  waveTxn = await waveContract.connect(randomPerson4).wave();
  waveAddresses.push(randomPerson4.address);

  await waveTxn.wait();

  waveCount = await waveContract.getTotalWaves();
  waveTxn = await waveContract.connect(randomPerson5).wave();
  waveAddresses.push(randomPerson5.address);

  await waveTxn.wait();

  waveCount = await waveContract.getTotalWaves();

  console.log("addresses of those that waved, ", waveAddresses);
};
*/
