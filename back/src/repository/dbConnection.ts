
import mysql from 'mysql';
const config = require('../config');

function executeQuery(query, values) {
    return new Promise(async (resolve, reject)=>{
        const connection = await mysql.createConnection(config.db);
        connection.query(query, values,(err, rows)=>{
            console.log('execute query', err,rows,query);
            if (err) reject(err);
            resolve(rows);
        });
    })    
}
  
module.exports = {
    executeQuery
}
