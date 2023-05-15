var mysql = require('mysql');

var con = mysql.createConnection(
    {
        host: 'localhost', //buraya serverin idsi yazılır
        user: 'root',
        password: '',
        database: 'nodedb'
    }
);

var kullanici_list =

[
    { username: 'kullanici3@hotmail.com', password: 'abc' },
    { username: 'kullanici4@hotmail.com', password: 'abcd'},
    { username: 'kullanici5@hotmail.com', password: 'abcd3'}
]

con.connect(function (err){
    if(err) throw err;

    console.log("Bağlandi!");

    var sql = "INSERT INTO user (username, password) VALUES (?, ?)";

    for(var i = 0; i < kullanici_list.length ; i++){
        var degerler = [kullanici_list[i].username, kullanici_list[i].password];
        con.query(sql, degerler, function (err, result){
            if(err) throw err;
            console.log("1 Kayıt Oluşturuldu!");
        });
    }

   
})