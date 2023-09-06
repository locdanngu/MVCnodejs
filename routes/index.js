var express = require('express');
var router = express.Router();
const City = require('../models/City');

// let connectDB = async () => {
//   try{
//     await sequelize.authenticate();
//     console.log('Kết nối thành công');

//   }catch (error) {
//     console.error('Kết nối lỗi', error);
//   }
// }

// module.exports = connectDB;

// Định nghĩa model cho bảng city
// const City = sequelize.define('city', {
//   idcity: {
//     type: Sequelize.INTEGER,
//     primaryKey: true,
//     autoIncrement: true
//   },
//   namecity: Sequelize.TEXT,
//   idcountry: Sequelize.INTEGER,
//   imagecity: Sequelize.TEXT
// }
// , {
//   tableName: 'city' // Đặt tên bảng cụ thể là 'city'
// });


// Kết nối đến cơ sở dữ liệu


/* GET home page. */
router.get('/', function (req, res, next) {
  const cssLink = '<link rel="stylesheet" href="/stylesheets/homepage.css">'; // Mã HTML cho thẻ <link>

  City.findAll()
  .then(cities => {
    res.render('homepage', { link: cssLink, title: 'LuxStay',cities }); // Truyền dữ liệu vào template HBS
  })
  .catch(error => {
    console.error('Lỗi truy vấn:', error);
    res.render('error', { error: error.message });
    
  });


  // res.render('homepage', { link: cssLink, title: 'LuxStay' });
});

module.exports = router;
