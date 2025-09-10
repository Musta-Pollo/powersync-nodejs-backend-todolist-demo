import app from './app.js';
import config from './config.js';

const PORT = process.env.PORT || config.port;

console.log('Starting backend server...');
console.log('Environment PORT:', process.env.PORT);
console.log('Config port:', config.port);
console.log('Final PORT:', PORT);

app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ Server successfully started`);
  console.log(`🌐 Server is running @ http://0.0.0.0:${PORT}`);
  console.log(`🔗 External access: http://localhost:${PORT}`);
  console.log(`📦 Process ID: ${process.pid}`);
});
