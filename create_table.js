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

    var sql = "CREATE TABLE user (id_num INT NOT NULL AUTO_INCREMENT , username VARCHAR(255) NOT NULL, password VARCHAR(50) NOT NULL, PRIMARY KEY (id_num))";

    con.query(sql, function (err, result){
        if(err) throw err;
        console.log("Tablo Oluşturuldu!");
    });
})