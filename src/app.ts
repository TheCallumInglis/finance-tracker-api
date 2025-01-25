import express from 'express';
import routes from './routes';
import { errorHandler } from './middlewares/errorHandler';
import requestLogger from './middlewares/requestLogger';

const app = express();
app.use(express.json());
app.use(requestLogger); // Log all requetss
app.use('/api', routes);
app.use(errorHandler);

export default app;