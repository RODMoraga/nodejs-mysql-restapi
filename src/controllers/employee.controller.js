import { pool } from "../db.js";

export const getEmployees = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM employees ORDER BY first_name, last_name');
        res.send(rows);
    } catch (error) {
        return res.status(500).json({
            message: `${error}`
        });
    }
};

export const getEmployeeById = async (req, res) => {
    try {
        // console.log(req.params);
        // console.log(req.params.id);
        
        const [rows] = await pool.query('SELECT * FROM employees WHERE id = ?', [req.params.id])
        // res.send(`Empleado obtenido por id: ${req.params.id}`);

        if (rows.length == 0) {
            return res.status(404).json({
                message: 'Empleado no encontrado...'
            });
        }

        res.json(rows[0]);
    } catch (error) {
        res.status(500).json({
            "message": `${error}`
        });
    }
}

export const saveEmployee = async (req, res) => {
    try {
        // console.log(req.body);
        const { first_name, last_name, city_name, street, salary } = req.body;
        
        const [rows] = await pool.query('INSERT INTO employees(first_name, last_name, city_name, street, salary, create_at) VALUES(?, ?, ?, ?, ?, CURDATE())', [first_name, last_name, city_name, street, salary]);

        res.send({
            id: rows.insertId,
            first_name: first_name,
            last_name: last_name,
            city_name, city_name,
            street: street,
            salary: salary
        });
    } catch (error) {
        res.status(500).json({
            "message": `${error}`
        });
    }
};

export const updateEmployee = async (req, res) => {
    try {
        const { id } = req.params
        const { first_name, last_name, city_name, street, salary } = req.body

        // console.log(req.body);
        
        const [result] = await pool.query(
            'UPDATE employees SET first_name = IFNULL(?, first_name), last_name = IFNULL(?, last_name), city_name = IFNULL(?, city_name), street = IFNULL(?, street), salary = IFNULL(?, salary) WHERE id = ?',
            [first_name, last_name, city_name, street, salary, id]
        );

        if (result.affectedRows === 0)
        {
            return res.status(404).json({
                message: `No existe un empleado con este Id: ${id}`
            });
        }

        const [rows] = await pool.query('SELECT * FROM employees WHERE id = ?', [id]);

        res.json(rows[0]);
    } catch (error) {
        res.status(500).json({
            "message": `${error}`
        });
    }
};

export const deleteEmployee = async (req, res) => {
    try {
        const [result] = await pool.query('DELETE FROM employees WHERE id = ?', [req.params.id]);

        if (result.affectedRows == 0)
        {
            return res.status(404).json({
                message: 'Id. del empleado no existe.'
            });
        }

        res.sendStatus(204);
    } catch (error) {
        res.status(500).json({
            "message": `${error}`
        });
    }
};