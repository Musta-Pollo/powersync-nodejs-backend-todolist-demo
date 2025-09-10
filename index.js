import app from './app.js';
import config from './config.js';

const PORT = process.env.PORT || config.port;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running @ http://0.0.0.0:${PORT}`);
});
