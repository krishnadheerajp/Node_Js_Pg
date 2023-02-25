const {Client}=require('pg');
const client =new Client( {
host:"localhost",
port: 5432,
user:"postgres",
password:"Finserv@2023",
database:"mydatabase"});
client.connect();
client.query("delete from employee where empid='1'",(err,result)=>{
if(!err)
{
console.log(result.rows);
}
client.end();
})
