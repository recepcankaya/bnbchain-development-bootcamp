// SPDX-License-Identifier: MIT
pragma solidity 0.8.18;

contract Counter {
    uint256 public total;
    uint256 public subtracted;
    uint256 public multiplied;
    uint256 public divided;

    modifier zeroCheckValue(uint256 value) {
        require(value > 0, "Value has to be greater than zero");
        _;
    }

    function add(uint256 value) public zeroCheckValue(value) {
        total = total + value;
    }

    function subtract(uint256 value) public zeroCheckValue(value) {
        subtracted = total - value;
    }

    function multiply(uint256 value) public zeroCheckValue(value) {
        multiplied = total * value;
    }

    function divide(uint256 value) public zeroCheckValue(value) {
        divided = total / value;
    }

    function getValues()
        public
        view
        returns (uint256, uint256, uint256, uint256)
    {
        return (total, subtracted, multiplied, divided);
    }
}
