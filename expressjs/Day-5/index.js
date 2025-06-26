import express from "express";
const app = express();
//serving static files
app.use(express.static('public'))
//now main route is set to public now
//we will define our first view here
app.set('view engine','pug')
app.set('views','./views')
app.get('/staticserve',(_req,res)=>{
  res.render('view');
})
app.listen(3000,()=>{
  console.log('server is running')
})