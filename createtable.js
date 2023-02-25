const {Client}=require('pg');
const client =new Client( {
host:"localhost",
port: 5432,
user:"postgres",
password:"Finserv@2023",
database:"mypgdb"});
client.connect();
client.query("create table employee (empid integer,name varchar(25),designation varchar(25),age integer, location varchar(25));",(err,result)=>{
if(!err)
{
console.log("Table created");
}
client.end();
});
