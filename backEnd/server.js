const express = require('express');
const cors = require('cors');
require('dotenv').config({ path: './config/.env' });
require('./config/db');

const app = express();

const corsOptions = {
  origin: process.env.CLIENT_URL,
  credentials: true,
  allowedHeaders: ['sessionId', 'Content-Type'],
  exposedHeaders: ['sessionId'],
  methods: 'GET, HEAD, PUT, PATCH, POST, DELETE',
  preflightContinue: false,
};

// Test
app.use(cors(corsOptions));

// app
app.use(express.json());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, PATCH, OPTIONS'
  );
  next();
});

// const -> Routes

const userRoutes = require('./routes/user.routes');
const topicRoutes = require('./routes/topic.routes');
const messageRoutes = require('./routes/message.routes');

// Routes

app
  .use('/api/user', userRoutes)
  .use('/api/topic', topicRoutes)
  .use('/api/message', messageRoutes);

// Server
app.listen(8080, () => {
  console.log(`listening on port 8080`);
});
