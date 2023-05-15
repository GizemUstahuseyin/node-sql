var mysql = require('mysql');

var con = mysql.createConnection(
    {
        host: 'localhost', //buraya serverin idsi yazılır
        user: 'root',
        password: '',
        database: 'nodedb'
    }
);

con.connect(function (err){
    if(err) throw err;

    console.log("Bağlandi!");

    var sql = "DELETE FROM user WHERE username = 'atikedilan@hotmail.com' ";

    con.query(sql, function (err, result){
        if(err) throw err;
        console.log("Veri Silindi!");
    });
})