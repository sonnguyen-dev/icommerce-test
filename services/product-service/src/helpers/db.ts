import { ConnectionOptions, connect } from 'mongoose';
import Log from './log';

const log = new Log(__filename);

async function connectDb(mongoURI: string) {
  try {
    const options: ConnectionOptions = {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    };
    await connect(mongoURI, options);
  } catch (err) {
    log.error(err);
    process.exit(1);
  }
}

export default connectDb;
