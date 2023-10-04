const express = require('express')
const app = express();
const path=require('path');
require("./db/conn");
const port=process.env.PORT || 3000;
app.use(express.static(path.join(__dirname,"index.html")));
app.get('/', (req, res)=> {
  res.send('Hello World');
})

app.listen(port,()=>{
    console.log(`server is running ar port no ${port}`);
})