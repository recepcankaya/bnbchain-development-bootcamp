const { assert, expect } = require("chai");
const { ethers } = require("hardhat");

describe("Counter", function () {
  let counterContractFactory, counterContract;

  beforeEach(async function () {
    counterContractFactory = await ethers.getContractFactory("Counter");
    counterContract = await counterContractFactory.deploy();
    await counterContract.deployed();
  });

  it("inital values have to be zero", async function () {
    const [value1, value2, value3, value4] = await counterContract.getValues();
    const expectedValue = "0";
    assert.equal(value1.toString(), expectedValue);
    assert.equal(value2.toString(), expectedValue);
    assert.equal(value3.toString(), expectedValue);
    assert.equal(value4.toString(), expectedValue);
  });

  it("Should increment the total value", async function () {
    const txResp = await counterContract.add(1);
    await txResp.wait(1);
    const totalValue = await counterContract.total();
    const expectedValue = "1";
    assert.equal(totalValue.toString(), expectedValue);
  });

  it("Should not accept the zero value", async function () {
    await expect(counterContract.add(0)).to.be.revertedWith(
      "Value has to be greater than zero"
    );
  });

  describe("Other functions", function () {
    beforeEach(async function () {
      const addValue = await counterContract.add(10);
      await addValue.wait(1);
    });

    it("Should decrease the value", async function () {
      const txResp = await counterContract.subtract(5);
      await txResp.wait(1);
      const getValue = await counterContract.subtracted();
      const expectedValue = "5";
      assert.equal(getValue.toString(), expectedValue);
    });

    it("Should multiply the value", async function () {
      const txResp = await counterContract.multiply(5);
      await txResp.wait(1);
      const getValue = await counterContract.multiplied();
      const expectedValue = "50";
      assert.equal(getValue.toString(), expectedValue);
    });

    it("Should divide the value", async function () {
      const txResp = await counterContract.divide(5);
      await txResp.wait(1);
      const getValue = await counterContract.divided();
      const expectedValue = "2";
      assert.equal(getValue.toString(), expectedValue);
    });
  });
});
