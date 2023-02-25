const {Client}=require('pg');
const client =new Client( {
host:"localhost",
port: 5432,
user:"postgres",
password:"Finserv@2023",
database:"mydatabase"});
client.connect();
client.query("insert into employee values(5,'amit','developer',23,'Mumbai')",(err,result)=>{
if(!err)
{
console.log(result.rows);
}
client.end();
})
