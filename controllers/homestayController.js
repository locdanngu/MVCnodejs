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
                limit: 18, // Giới hạn số lượng kết quả trả về thành 6
            });
        } else {
            cities = await City.findAll({
                limit: 18, // Giới hạn số lượng kết quả trả về thành 6
            });
        }
        res.json(cities);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Lỗi truy vấn cơ sở dữ liệu' });
    }
};


module.exports = {
    getHomeStay: exports.getHomeStay,
    searchCities: exports.searchCities,
};