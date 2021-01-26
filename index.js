import {Client} from "./Client.js"
import {ClientAccount} from "./ClientAccount.js"
const client1=new Client("Pedro",10032133677) 
const client2=new Client("Pedro2",10032133677) 

const Account1=new ClientAccount(1001,client1)

const Account2=new ClientAccount(1002,client2)

console.log(ClientAccount.AccountCount)
