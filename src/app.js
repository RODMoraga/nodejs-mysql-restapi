import express from 'express';
import { pool } from './db.js';
import employeeRouter from './routes/employee.routes.js';
import indexRouter from './routes/index.routes.js';

// import './config.js';
// import { PORT } from './config.js';

const app = express();

app.use(express.json());

app.use(indexRouter);
app.use('/api', employeeRouter);

app.use((req, res, next) => {
    res.status(404).json({
        message: 'EndPoint not found!'
    });
});

export default app;