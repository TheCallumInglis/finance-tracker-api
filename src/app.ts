import express from 'express';
import routes from './routes';
import { errorHandler } from './middlewares/errorHandler';
import corsService from './services/corsService';
import requestLogger from './middlewares/requestLogger';

const app = express();
app.use(corsService);
app.use(express.json());
app.use(requestLogger); // Log all requetss
app.use('/api', routes);
app.use(errorHandler);

export default app;