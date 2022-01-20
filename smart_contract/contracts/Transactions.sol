//SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;


//This contract is serving a purpose of a class in OOP
contract Transactions{
    uint256 transactionCount;

    event Transfer(address from, address receiver, uint amount, string message, uint256 timestamp, string keyword);

    //This is similar to an object , we just specifying what properties does this object has
    struct TransferStruct{
        address sender;
        address receiver;
        uint amount;
        string message;
        uint256 timestamp;
        string keyword;
    }

    //We will define an array of different transactions because we are going to store them all.
    TransferStruct[] transactions; 


    function addToBlockchain(address payable receiver, uint amount, string memory message, string memory keyword) public{
        transactionCount += 1;
        //We are just adding the transactions into list of transactions array but we are not making a transfer
        transactions.push(TransferStruct(msg.sender, receiver, amount, message,block.timestamp, keyword));

        emit Transfer(msg.sender, receiver, amount, message,block.timestamp, keyword);
    }

    function getAllTransactions() public view returns (TransferStruct[] memory){
        return transactions;
    }

    function getTransactionCount() public view returns (uint256){
        return transactionCount;
    }
}
