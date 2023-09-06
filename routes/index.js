var express = require('express');
var router = express.Router();
const City = require('../models/City');
const { Op } = require('sequelize');


// let connectDB = async () => {
//   try{
//     await sequelize.authenticate();
//     console.log('Kết nối thành công');

//   }catch (error) {
//     console.error('Kết nối lỗi', error);
//   }
// }

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
});

router.get('/search', async (req, res) => {
  const searchQuery = req.query.q;
  let cities;

  try {
    if(searchQuery != ''){
      cities = await City.findAll({
        where: {
          namecity: {
            [Op.like]: `%${searchQuery}%`,
          },
        },
        limit: 6, // Giới hạn số lượng kết quả trả về thành 6
      });
    }else if(searchQuery == '' || searchQuery == null){
      cities = await City.findAll({
        limit: 6, // Giới hạn số lượng kết quả trả về thành 6
      });
    }
    res.json(cities);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Lỗi truy vấn cơ sở dữ liệu' });
  }
});




module.exports = router;
