const express = require('express');
const app = express();
const path = require('path');
// import webpack from 'webpack'
// import webpackDevMiddleware from 'webpack-dev-middleware';
// import webpackConfig from '../webpack.config.cjs';
// import webpackHotMiddleware from 'webpack-hot-middleware';
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackConfig = require('../webpack.config.cjs');
const webpackHotMiddleware = require('webpack-hot-middleware');
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser');

app.use(express.json());
const PORT = 3000;

const compiler = webpack(webpackConfig);
app.use(webpackDevMiddleware(compiler, {
  publicPath: webpackConfig.output.publicPath
}));
app.use(webpackHotMiddleware(compiler, {}))

mongoose.connect('mongodb+srv://alexjosephdavid:lLOFXUIiUSJA5CO3@alexcluster.uhkkqwa.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => {
  console.log('Connected to Database');
});


app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser());
app.use('/client', express.static(path.resolve(__dirname, '../client')));
// app.use('/build', express.static(path.join(__dirname, '../build')));

// app.get('/', (req, res) => {
//   return res.status(200).sendFile(path.join(__dirname, './client/index.html'));
// });



const loginRouter = require('./routes/login.cjs')
const signupRouter = require('./routes/signup.cjs')
const addReviewRouter = require('./routes/addreview.cjs')
app.use('/login', loginRouter);
app.use('/signup', signupRouter);
app.use('/addReview', addReviewRouter);

// app.get('/reviewList')






app.use('*', (req,res) => {
  res.status(404).send('Not Found');
});

app.use((err, req, res, next) => {
  const defaultObj = {
    log:'Express error handler caught unknown middleware error',
    status: 500,
    message: {err: 'An error occurred'}
  }
  const errObj = Object.assign({}, defaultObj, err);
  console.log(errObj.log);
  return res.status(errObj.status).json(errObj.message);
});

app.listen(PORT, ()=>{ console.log(`Listening on port ${PORT}...`); });

module.exports = app;
