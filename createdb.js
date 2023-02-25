const {Client}=require('pg');
const client =new Client( {
host:"localhost",
port: 5432,
user:"postgres",
password:"Finserv@2023"});
client.connect();
client.query("create database mypgdb",(err,result)=>{
if(!err)
{
console.log("DB created");
}
client.end();
})
