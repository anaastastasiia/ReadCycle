import express from 'express';
const app = express();
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';

import categoryRoute from './routes/categoryRoutes.js';

const PORT = process.env.PORT || 3000;

app.use(cors());
app.options('*', cors());

//middleware
app.use(bodyParser.json());
app.use(
    morgan(':method :url :status :response-time ms - :res[content-length]')
);

//routes
// app.use('api/book', booksRoute);
app.use('/api', categoryRoute);

//server
app.listen(PORT, () => console.log(`server started on port ${PORT}`));
