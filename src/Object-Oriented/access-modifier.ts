class bankAccount{
    // readonly id:number;
    // public name:string;
    // private _balance:number;
    private readonly id:number;
    public name:string;
    private _balance:number;
    constructor(
        id:number,
        name:string,
        balance:number){
            this.id=id;
            this.name=name;
            this._balance=balance
        }

        // *********** getter *********
        get balance():number{
            return this._balance;
        }

        // getBalance():number|string{
        //     return `my current balance is ${this._balance}`;
        // }

        //******* setter *********/

        set deposit(amount:number){
            this._balance=this.balance+amount;
        }
        // addDeposit(amount:number){
        //     return this._balance=this._balance+amount
        // }
}

class studentAccount extends bankAccount{
    test(){
        // this._balance=77
    }
}


const myAccount=new bankAccount(44,'account-name',1);

// console.log(myAccount.addDeposit(20));
// console.log(myAccount.getBalance())


myAccount.deposit=22;
console.log(myAccount.balance);