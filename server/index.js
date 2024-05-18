import express from 'express';
import dotenv from 'dotenv';
import { graphqlHTTP } from 'express-graphql';
import cors from 'cors';
import colors from 'colors';
import schema from './schema/schema.js';
import connectDB from './config/db.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

connectDB();

app.use(cors());
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development'
}));

app.listen(port, () => console.log(`Server running on port ${port}`.cyan.underline.bold));