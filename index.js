// let balance = 500.00; - we are keeping track of the balance inside the account class, so we do not need this variable anymore


// create an Account class that will keep track of the user and their balance
class Account {

  constructor(username) {
    this.username = username;
    // Have the account balance start at $0 since that makes more sense.
    this.balance = 0;
  }
}

class Transaction {
  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }
}

class Withdrawal extends Transaction {
  commit() {
    this.account.balance -= this.amount;
  }
 }

// Create a deposit class to represent deposits

class Deposit extends Transaction {
  commit () {
    this.account.balance += this.amount;
  }
}

//




// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected

const myAccount = new Account("snow-patrol");
t1 = new Withdrawal(50.25, myAccount);
t1.commit();
console.log('Transaction 1:', t1);
