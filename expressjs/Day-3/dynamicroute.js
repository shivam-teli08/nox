import express from "express";
var app = express();
var router = express.Router();
router.get('/:name', (req, res) => {
  const name = req.params.name;
  if (name === 'Shivam') {
    res.send(`
      <html>
      <head><title>Welcome Shivam</title></head>
      <style>
      body {
        font-family: Arial, sans-serif;
        background-color:rgb(0, 0, 0);
        color: blue;
        text-align: center;
        padding: 50px;
      }
      </style>
      <body>
      <h1>Welcome to the dynamic route, ${req.params.name}</h1>
      <p>This is a personalized message just for you.</p>
      </html >
      `);
  }
  else if (name === "Ramesh") {
    res.send(`
      <html>
      <head><title>Welcome ${req.params.name}</title></head>
      <style>
      body {
        font-family: Arial, sans-serif;
        background-color:rgb(0, 0, 0);
        color: blue;
        text-align: center;
        padding: 50px;
      }
      </style>
      <body>
      <h1>Welcome to the dynamic route, ${req.params.name}</h1>
      <p>This is a personalized message just for you.</p>
      </html >
      `);
  }
});
export default router;