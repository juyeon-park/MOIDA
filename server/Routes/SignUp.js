const express = require('express');
const router = express.Router();
const fs = require('fs');
const data = fs.readFileSync('./database/database.json');
const conf = JSON.parse(data);
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: conf.host,
  user: conf.user,
  password: conf.password,
  port: conf.port,
  database: conf.database,
  timezone: "Asia/Seoul"
})
connection.connect();

router.post('/', function (req, res) {
  let account_id = req.body.params.account_id;
  let account_pwd = req.body.params.account_pwd;
  let account_name = req.body.params.account_name;

  connection.query('insert into account (account_id,account_pwd,account_name) values ("' + account_id + '","' + account_pwd + '","' + account_name + '")', function (err, rows) {
    if (err) {
      console.log(err);
      return res.send({ code: 101, errorMessage: err });
    }
    else {
      console.log(rows)
      res.send({ code: 0, data: rows });
    }
  })

})

router.get('/idDoubleCheck', function (req, res) {
  let account_id = req.query.account_id;
  let sql = 'select id from account where account_id=?';
  connection.query(sql, account_id, function (err, rows, fields) {
    if (rows[0] === undefined) {
      res.send({ code: 0 });
    }
    else {
      res.send({ code: 101 });
    }
  });
})

module.exports = router;