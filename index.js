import express from 'express';
import mongoose from 'mongoose';
import routes from './src/routes/danceClassRoutes';
const app = express();
const PORT = 4000;
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
});

app.use(express.json());
//bodyparser setup
app.use(bodyParser.urlencoded({ extended: true}));