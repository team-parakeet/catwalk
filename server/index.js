const { TOKEN } = require('../config.js');
const axios = require('axios');

const PORT = 3000;
const app = express();
const path = require('path');

// Middleware:
app.use(express.urlencoded( {extended: true} ));
app.use(express.static(path.join(__dirname, '..', 'client/dist')));

// TODO: What are the different paths we need to handle?
// Request handlers:
app.get('products/:id/styles', (req, res) => {
  console.log(`🥶`, req);
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT} 🐠`);
})