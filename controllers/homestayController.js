const City = require('../models/City');
const { Op } = require('sequelize');

// Controller cho route '/'
exports.getHomeStay = async (req, res, next) => {
    const page = 'homestay'; 
    try {
        const cities = await City.findAll();
        res.render('homestay', { page: page, title: 'Khách sạn', cities }); // Truyền dữ liệu vào template HBS
    } catch (error) {
        console.error('Lỗi truy vấn:', error);
        res.render('error', { error: error.message });
    }
};

module.exports = {
    getHomeStay: exports.getHomeStay,
};