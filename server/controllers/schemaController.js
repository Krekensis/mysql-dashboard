const pool = require('../database');

exports.getGraph = async (req, res) => {
    try {
        const [tablesResult] = await pool.query('SHOW TABLES');
        const tables = tablesResult.map(obj => Object.values(obj)[0]);

        const [foreignKeys] = await pool.query(`
            SELECT 
                TABLE_NAME,
                COLUMN_NAME,
                REFERENCED_TABLE_NAME,
                REFERENCED_COLUMN_NAME
            FROM INFORMATION_SCHEMA.KEY_COLUMN_USAGE
            WHERE TABLE_SCHEMA = 'dashboard_demo'
            AND REFERENCED_TABLE_NAME IS NOT NULL
        `);

        res.json({ tables, foreignKeys });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
