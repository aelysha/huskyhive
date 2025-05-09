import express from "express";

import dotenv from 'dotenv'
dotenv.config()

import usersRouter from './routes/users.js'

var app = express();

app.use('/api/users', usersRouter);

// cross-origin issues
app.use(function(req, res, next) {
  res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
  res.setHeader('Cross-Origin-Embedder-Policy', 'require-corp');
  res.setHeader('Cross-Origin-Allow-Popups', 'same-origin');
  next();
});

// to-do: const PORT to switch between env and 400
app.listen(5000, () => {
  console.log('Server running on port 5000');
});
