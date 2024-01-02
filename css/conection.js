const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'dienthoai'
});

connection.connect((err) => {
  if (err) {
    console.error('Lỗi kết nối:', err);
    return;
  }
  console.log('Đã kết nối đến cơ sở dữ liệu MySQL');
});
