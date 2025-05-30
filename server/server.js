import express from "express";

import cors from 'cors';

import dotenv from 'dotenv'
dotenv.config()

import usersRouter from './routes/users.js'
import eventsRouter from './routes/events.js'
import rsosRouter from './routes/rsos.js'
import allRsosRouter from './routes/allRsos.js'
import allEventsRouter from './routes/allEvents.js'

var app = express();

app.use(cors());

app.use('/api/users', usersRouter);
app.use('/api/events', eventsRouter);
app.use('/api/rsos', rsosRouter);
app.use('/api/allRsos', allRsosRouter);
app.use('/api/allEvents', allEventsRouter);

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
