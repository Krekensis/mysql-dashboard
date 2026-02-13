const pool = require('../database');

exports.getTables = async (req, res) => {
    try {
        const [rows] = await pool.query('SHOW TABLES');
        const tables = rows.map(obj => Object.values(obj)[0]);
        res.json(tables);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
