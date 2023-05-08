class BankAccount {
    public readonly id: number;
    public name: string;
    private _balance: number;
  
    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }
     
    private getTestBalance(): number{
       return this._balance
    }
    
    get Test():number{
      return this.getTestBalance()
    }
    //getter
    get balance(): number {
      return this._balance;
    }
    // getBalance(): number {
    //   return this._balance;
    // }
  
    //setter
    set deposit(amount: number) {
      this._balance = this.balance + amount;
    }
    // addDeposit(amount: number) {
    //   this._balance = this._balance + amount;
    // }
  }
  
  class StudentAccount extends BankAccount {
    test() {
       this.test()
    }
  }
  
  const myAccountcheck = new BankAccount(444, "Persian", 0);
  // myAccount.addDeposit(20);
  // myAccount.getBalance();
  // myAccount.getBalance();
  console.log(myAccountcheck.balance);
  myAccountcheck.deposit = 30;
  console.log(myAccountcheck.balance);