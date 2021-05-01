/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import CryptoJS from "crypto-js";
import Transaction from "./../Transaction";

class Block {
  index: number;
  previousHash: string;
  timestamp: number;
  data: any;
  hash: string;
  nonce = 0;
  transaction: Transaction[];
  constructor(
    index: number,
    timestamp: number,
    data: any,
    transaction: Transaction[],
    previousHash = "",
    hash = ""
  ) {
    this.index = index;
    this.timestamp = timestamp;
    this.previousHash = previousHash;
    this.data = data;
    this.transaction = transaction;
    if (hash === "") this.hash = this.calculateHash();
    else this.hash = hash;
  }

  calculateHash = () => {
    return CryptoJS.SHA256(
      this.index +
        this.previousHash +
        this.timestamp +
        JSON.stringify(this.data) +
        this.nonce
    ).toString();
  };

  mineBlock(difficulty: number) {
    while (
      this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")
    ) {
      this.nonce++;
      this.hash = this.calculateHash();
    }

    console.log("Block mine " + this.hash);
  }

  hasValidTransactions() {
    for (const tx of this.transaction) {
      if (!tx.isValid()) {
        return false;
      }
    }
    return true;
  }

  static calculateHash = (
    index: number,
    previousHash: string,
    timestamp: number,
    data: any,
    nonce: number
  ) => {
    return CryptoJS.SHA256(
      index + previousHash + timestamp + JSON.stringify(data) + nonce
    ).toString();
  };
}

export default Block;
