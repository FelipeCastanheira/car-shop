import express from 'express';
import errHandler from './middlewares/errHandler';
import route from './router';

const app = express();
app.use(route);
app.use(errHandler);

export default app;
