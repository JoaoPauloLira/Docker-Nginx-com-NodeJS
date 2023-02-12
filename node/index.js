const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};
const mysql = require('mysql')
const connection = mysql.createConnection(config)

connection.connect(function (err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }

    console.log('connected as id ' + connection.threadId);
});

const sqlInset = `create table if not exists people(id int not null auto_increment, name varchar(255), primary key(id))`
connection.query(sqlInset)

const sql = `INSERT INTO people(name) values('João Paulo')`
connection.query(sql, function (error, results, fields) {
    if (error) throw error;
});

connection.end()

app.get('/', (req, res) => {
    res.send('<h1>Full Cycle</h1>')
})

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})
