const City = require('../models/City');
const { Op } = require('sequelize');

// // Controller cho route '/'
// exports.getHomePage = async (req, res, next) => {
//     const page = 'homepage'; 
//     try {
//         const cities = await City.findAll();
//         const user = req.session.user;
//         res.render('homepage', { page: page, title: 'LuxStay', cities, user }); // Truyền dữ liệu vào template HBS
//     } catch (error) {
//         console.error('Lỗi truy vấn:', error);
//         res.render('error', { error: error.message });
//     }
// };

exports.getHomePage = async (req, res, next) => {
    const page = 'homepage'; 
    try {
        const cities = await City.findAll();
        const user = req.session.user; // Lấy thông tin người dùng từ session
        res.render('homepage', { page: page, title: 'LuxStay', cities, user }); // Truyền thông tin người dùng vào template HBS
    } catch (error) {
        console.error('Lỗi truy vấn:', error);
        res.render('error', { error: error.message });
    }
};

// Controller cho route '/search'
exports.searchCities = async (req, res) => {
    const searchQuery = req.query.q;
    let cities;

    try {
        if (searchQuery !== '') {
            cities = await City.findAll({
                where: {
                    namecity: {
                        [Op.like]: `%${searchQuery}%`,
                    },
                },
                limit: 6, // Giới hạn số lượng kết quả trả về thành 6
            });
        } else {
            cities = await City.findAll({
                limit: 6, // Giới hạn số lượng kết quả trả về thành 6
            });
        }
        res.json(cities);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Lỗi truy vấn cơ sở dữ liệu' });
    }
};


module.exports = {
    getHomePage: exports.getHomePage,
    searchCities: exports.searchCities,
};
