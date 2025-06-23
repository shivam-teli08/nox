import express from 'express';
var app = express();
app.set('view engine', 'pug');
app.set('views', './views');
app.get('/', (_req, res) => {
  res.send('Hello, World!');
});
app.get('/mypug',(_req,res)=>{
  res.render('hello');
})
app.get('/valuepug',(_req,res)=>{
  res.render('valuepug',{
    Name:'Novanox',
    Linkedin:"Shiavm Teli"
  });
})
app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});