import express from "express";
import axios from "axios";

const app=express();


const window_size= 10;
let numbers = [];
app.get('/numbers/:numberId', async (req, res) => {
  const numberId = req.params.numberId;
  
  let newNum = [];
  try {
    const response = await axios.get(`http://20.244.56.144/test/${numberId}`,{ timeout: 500 });
 newNum = response.data.numbers;
  } catch (error) {
    console.error(error);
  }
  numbers = [...new Set([...numbers, ... newNum])];
  if (numbers.length > window_size) {
    numbers = numbers.slice(-window_size);
  }
  const avg = numbers.reduce((a, b) => a + b, 0) / numbers.length || 0;
  res.json({
    windowPrevState: numbers.slice(0,  newNum.length),
    windowCurrState: numbers,
    numbers: newNum,
    avg
  });
});

app.listen(9876, () => {
  console.log('Server listening on port 9876');
});