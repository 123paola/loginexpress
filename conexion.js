const mysql = require('mysql2/promise');
// Create the connection to database
//mysql://root:nDdYenrHKErdfohawJSNvnRNvbBZPpSk@monorail.proxy.rlwy.net:42897/railway
const connection = mysql.createPool({
    host: process.env.HOSTDB || 'localhost',
    user: process.env.USERDB || 'root',
    database:process.env.DB ||'login',
    password:process.env.PASSWORDDB ||'',
    port:process.env.PORTDB || 3306,
  });
  module.exports=connection;