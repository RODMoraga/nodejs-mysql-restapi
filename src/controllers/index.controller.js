import { pool } from "../db.js"

export const getAll = async (req, res) => {
    const [result] = await pool.query('SELECT CONCAT(first_name, \' \', last_name) AS fullname FROM employees ORDER BY first_name ASC');
    res.json(result);
}