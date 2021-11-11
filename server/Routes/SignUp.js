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
    database: conf.database
})
connection.connect();

connection.connect(function(err){          //mysql을 연결해주는 친구이다
    if(err) console.error('mysql connection error : ' + err);  //정상연결 되었는지 확인용 log
    else console.log('mysql is connected successfully!');
});


// router.post('/checkid', function (req, res) {  // client(signup_page.js)에서 이경로로 fetch햇따
//     let user_id = req.body.id;     //req는 데이터를 받은건데 ①에서 data객체를 보내줫었다
  
//     console.log(req.body.id);
//     let sql = 'select id from usertable where id=?' //sql 쿼리문-> id 에맞는 row들고 오고싶다
//     connection.query(sql, [user_id], function (err, rows, fields) {
//         console.log(rows);
//         let checkid = new Object();
//         checkid.tf =false;              // 이 아이디를 사용가능 한가요??
  
//         if (rows[0] === undefined) { //중복되는게 없으면 (없으니까 못가져왓겠지)
//             checkid.tf = true;  //없음 사용가능
//             res.send(checkid);  //다시 클라이언트로 보낸다 checkid 객체를
//         }
  
//         else {
            
//             checkid.tf = false; // 중복됨 사용x
//             res.send(checkid);  
//         }
//     })
//   });

router.get('/', function (req, res) {
    res.send({ test: "this is test for api" });
})

module.exports = router;