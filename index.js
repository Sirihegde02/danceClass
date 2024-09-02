import express from 'express';
import mongoose from 'mongoose';
import routes from './src/routes/danceClassRoutes';
const app = express();
const PORT = 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

routes(app);

app.get('/', (req, res) => {
  res.send(`Node and express server running on port ${PORT}`)
});

app.listen(PORT, () => {
  console.log('Server is running on port 4000');
});

// mongoose connection to the API
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/danceClassDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Could not connect to MongoDB', err);
});
