var mysql = require('mysql');

var con = mysql.createConnection(
    {
        host: 'localhost', //buraya serverin idsi yazılır
        user: 'root',
        password: ''
    }
)

con.connect(function (err){
    if(err) throw err;
    console.log("Baglandi");
})