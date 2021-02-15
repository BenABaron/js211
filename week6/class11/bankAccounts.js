'use strict'

/**
 * BANK ACCOUNT
 * -accountNumber: provides a random string that represents the account
 * -owner: string that represents the ownder of the account
 * -transactions: an array of transactions associated with the account
 * 
 * balance(): returns the current balance in the account by summing up all transactions associated with the account
 * deposit(amt): takes in the deposit amount, should create a new transaction and add it to the transactions array
 * charge(payee, amt): takes in the payee and the amount, creates a new transaction with both, and adds it to the transaction array
 */
class BankAccount {
  accountNumber;
  owner;
  transactions = [];

  /**
   * 
   * @param {string} owner the owner of the bank account
   */
  constructor(owner){
    let randomNumber = Math.floor(Math.random()*10000);
    this.accountNumber = randomNumber;

    this.owner = owner;
  }

  balance(){
    if (this.transactions.length == 0) {
      return 0;
    }

    let currentBalance = 0;

    this.transactions.forEach(function(currentTransaction, index){
      currentBalance += currentTransaction.amount;
    })

    return currentBalance;
  }

  /**
   * 
   * @param {number} amt the amount to be deposited
   */

  deposit(amt){

    if (amt > 0) {
      let newDeposit = new Transaction(this.owner, amt)
      this.transactions.push(newDeposit);
    }

  }

  /**
   * 
   * @param {number} amt the amount to be charged
   * @param {string} payee the payee
   */

  charge(payee, amt){

    let currentBalance = this.balance();

    if (currentBalance > amt) {
      amt = amt * -1;
      let newCharge = new Transaction(payee, amt);
      this.transactions.push(newCharge);
    }

  }
}


/**
 * TRANSACTIONS
 * -date: the date of the transaction (current time)
 * -amount: the amount of the transaction. Positive = deposit, negative = charge or dept
 * -payee: the payee
 */
class Transaction {
  date;
  amount;
  payee;

  /**
   * 
   * @param {number} amount the amount for the transaction
   * @param {string} payee the payee for the transaction
   */
  constructor(payee, amount){
    this.date = new Date;
    this.amount = amount;
    this.payee = payee;
  }
}

// let ben = new BankAccount('Ben');
// console.log(ben);
// console.log(ben.balance());
// ben.deposit(50);
// console.log(ben);
// console.log(ben.balance());
// ben.charge(25, "Target");
// console.log(ben);
// console.log(ben.balance());







let account1 = new BankAccount("John Doe", "91039423")

// new account should have a zero balance
console.log(account1.balance()); // 0

// attempt to charge $10 at Target
account1.charge("Target", 10);

// cannot charge to the account if the balance is 0
console.log(account1.balance()); // 0

// transaction should not have gone trhough
console.log(account1.transactions.length); // 0

// deposit $100
account1.deposit(100);

// charge $20
account1.charge("Freebirds", 20);
console.log(account1.balance()); // 80

// cannot overcharge
account1.charge("Diamonds Direct", 1000);
console.log(account1.balance()); // 80

// can issue refunds
account1.charge("Target", -15);
console.log(account1.balance()); // 95

// should not be able to deposit negative money
account1.deposit(-10);
console.log(account1.balance()); // 95

// the bank account class does not store the balance
// instead it stores an array of Transactions
// to get the balance, you loop through the Transactions, and sum up the ammounts
