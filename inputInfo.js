const http = require('http');
const fs = require('fs');
const url = require('url');
const mysql = require('mysql');

const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'nodedb'
});

http.createServer((req, res) => {
  fs.readFile('kayit_form.html', function (err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end('404 Dosyaniz Bulunamadi');
    }

    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });

  const bilgi = url.parse(req.url, true).query;

  if (bilgi.ad && bilgi.password) {
    const sql = 'INSERT INTO user (username, password) VALUES (?, ?)';
    const values = [bilgi.ad, bilgi.password];

    con.query(sql, values, function (err, result) {
      if (err) throw err;
      console.log('1 Kayıt Oluşturuldu!');
    });
  }
}).listen(8080);
