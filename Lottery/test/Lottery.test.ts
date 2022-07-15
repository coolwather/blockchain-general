import { expect } from "chai";
import { Contract } from "ethers";
import { ethers } from "hardhat";


describe("Lottery", async () => {
  let lottery: Contract;
  const [ owner, guilherme ] = await ethers.getSigners();

  beforeEach(async () => {
    const Lottery = await ethers.getContractFactory("Lottery");
    lottery = await Lottery.connect(owner).deploy();
  });

  describe("Ownable", async () => {
    it("Should get the current owner", async () => {
      expect(await lottery.owner()).to.eq(owner.address);
    });

    it("Should trasnfer the ownership", async () => {
      expect(await lottery.owner()).to.eq(owner.address);
      await lottery.transferOwnership(guilherme.address);
      expect(await lottery.owner()).to.eq(guilherme.address);
    });
  })
});
