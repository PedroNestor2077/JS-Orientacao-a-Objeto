import {Client} from "./Client.js"
export class ClientAccount{
    static AccountCount=0;
    bank;
    _client;

    set client(newValue){
        if(newValue instanceof Client){
            this._client=newValue
        }
    } 

    _cash=0;

    get cash(){
        return (this._cash)
    }
    constructor(bank,client){
        this.bank=bank
        this.client=client
        ClientAccount.AccountCount++;
    }
    
    draw(value){
        if (this._cash>=value){
            this._cash-=value
            return value;
        }
    }
    deposit(value){
        if(value>0){
            this._cash += value
        }
    }
    tranference(value,conta){
        this.draw(value)
        conta.deposit(value)
    }
}