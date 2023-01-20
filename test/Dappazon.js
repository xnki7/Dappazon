const { expect } = require("chai");

const tokens = (n) => {
  return ethers.utils.parseUnits(n.toString(), "ether");
};

describe("Dappazon", () => {
  let dappazon;

  beforeEach(async () => {
    [deployer, buyer] = await ethers.getSigners();
    // console.log(deployer, buyer)

    const Dappazon = await ethers.getContractFactory("Dappazon");
    dappazon = await Dappazon.deploy();
  });

  describe("Deployment", () => {
    it("sets the owner", async () => {
      expect(await dappazon.owner()).to.equal(deployer.address);
    });

    it("has a name", async () => {
      const name = await dappazon.name();
      expect(name).to.equal("Dappazon");
    });
  });
});
