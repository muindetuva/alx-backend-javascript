import express from 'express';
import routes from './routes/index';

const app = express();

// Use the defined routes
app.use('/', routes);

// Start the server
app.listen(1245);

export default app;
