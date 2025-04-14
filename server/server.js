import express from "express";

import usersRouter from './routes/users.js'

var app = express();

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
