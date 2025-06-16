//external routing
import express from "express";
var router = express.Router();
router.post('/', (req, res) => {
  res.send("Personal route visisted")
})
router.get('/shivam', (req, res) => {
  res.send("Shivam profie page visited")
})
export default router;