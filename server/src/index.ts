import app from './server';
import { config } from 'dotenv';

config();

app.listen(process.env.APP_PORT || 3000, () => {
  console.log('App started');
});
