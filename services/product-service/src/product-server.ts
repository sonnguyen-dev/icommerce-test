import express from 'express';
import helmet from 'helmet';
import compression from 'compression';
import dotenv from 'dotenv';
import Log from './helpers/log';
import productRoute from './routes/product.route';
import connectDb from './helpers/db';

dotenv.config();
const log = new Log(__filename);

const app = express();
app.use(helmet());
app.use(express.json());
app.use(compression());

const { PORT = 8080, MONGO_URI = 'mongodb://localhost:27017/icommerce' } = process.env;

app.get('/', (req, res) => {
  res.send({ message: 'todo-backend-api' });
});

app.use('/api/v1/products', productRoute);

(async () => {
  await connectDb(MONGO_URI);
  log.info('connected to db success');
  app.listen(PORT, () => log.info('server was started on port', PORT));
})();
