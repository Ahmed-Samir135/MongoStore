const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require("./models/productModel").productModel;
const app = require("./app.js");

dotenv.config({ path: './config.env' });
const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);
mongoose
  .connect(DB)
  .then(
    () =>{ 
      console.log('DB connection successful!');
  });

const Port = process.env.Port|8000;
app.listen(Port,()=>{
  console.log("server start runing on Porst",Port);
})