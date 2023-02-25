const {Client}=require('pg');
const client =new Client( {
host:"localhost",
port: 5432,
user:"postgres",
password:"Finserv@2023",
database:"mydatabase"});
client.connect();
client.query("update employee set designation='manager' where designation ='sde2'",(err,result)=>{
if(!err)
{
console.log(result.rows);
}
client.end();
})
