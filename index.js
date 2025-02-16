import express from 'express';
const app = express();
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import { swaggerUi, swaggerSpec } from './swagger.js';

import categoryRoute from './src/routes/categoryRoutes.js';
import booksRoute from './src/routes/bookRoute.js';

const PORT = process.env.PORT || 3000;

app.use(cors());
app.options('*', cors());

//middleware
app.use(bodyParser.json());
app.use(
    morgan(':method :url :status :response-time ms - :res[content-length]')
);

//routes
app.use('/api/book', booksRoute);
app.use('/api/category', categoryRoute);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.get('/api-docs.json', (req, res) => {
    res.json(swaggerSpec);
});

//server
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server started on port ${PORT}`);
    console.log('Swagger docs available at http://localhost:3000/api-docs');
});
