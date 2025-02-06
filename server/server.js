const express = require('express')

const app = express()

// cd to server, npm run dev
// localhost:5000/api
app.listen(5000, () => (console.log("Server started on port 5000")));