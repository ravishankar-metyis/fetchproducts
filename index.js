//const axios = require('axios');
const { response } = require('express');
const express = require('express');
var cors = require('cors')
const app = express();
app.use(cors({
    origin: '*'
})); 

const PORT = 3000;

//app.use('/images', express.static('images'));
//app.use(express.static('public'));
//app.set("view engine","ejs")  


//Products
const products = [
     {id:1,name:"Polo T-shirt1",image:"images/t-shirt-1.png",price:59,old_price:69,sale_status:"HOT!"},
     {id:2,name:"T-Shirt",image:"images/polo-shirt-1.png",price:59,old_price:69,sale_status:"Sold Out!"},
     {id:3,name:"Polo T-Shirt2",image:"images/polo-shirt-4.png",price:59,old_price:69,sale_status:"Trending!"},
     {id:4,name:"Polo T-Shirt3",image:"images/polo-shirt-5.png",price:59,old_price:69,sale_status:"SALE!"},
     {id:5,name:"Polo T-shirt 4",image:"images/polo-shirt-5.png",price:59,old_price:69,sale_status:"Sold Out!"},
     {id:6,name:"Polo T-shirt 5",image:"images/polo-shirt-5.png",price:59,old_price:69,sale_status:"HOT"},
     {id:7,name:"Polo T-shirt 6",image:"images/girl-2.png",price:59,old_price:69,sale_status:"Pancakes!!"},
     {id:8,name:"Polo T-shirt 7",image:"images/girl-3.png",price:59,old_price:69,sale_status:"SALE!!"},
     {id:9,name:"Polo T-shirt 8",image:"images/polo-shirt-6.png",price:59,old_price:69,sale_status:"SALE!!"},
     {id:10,name:"Polo T-shirt 9",image:"images/polo-shirt-5.png",price:59,old_price:69,sale_status:"SALE!!"},
     {id:11,name:"Polo T-shirt 10",image:"images/polo-shirt-6.png",price:59,old_price:69,sale_status:"SALE!!"},
     {id:12,name:"Polo T-shirt 11",image:"images/polo-shirt-1.png",price:59,old_price:69,sale_status:"SALE!!"},
     {id:13,name:"Polo T-shirt 712",image:"images/polo-shirt-4.png",price:59,old_price:69,sale_status:"SALE!!"},
     {id:14,name:"check pattern Shirt",image:"images/gus1.png",price:59,old_price:69,sale_status:"SALE!!"},
     {id:15,name:"stripes shirt",image:"images/promo-banner-1.jpg",price:59,old_price:69,sale_status:"SALE!!"},
     {id:16,name:"polka dot shirt",image:"images/promo-banner-1.jpg",price:59,old_price:69,sale_status:"SALE!!"},
     {id:17,name:"Stained shirt",image:"images/nostainshirt.jpg",price:59,old_price:69,sale_status:"SALE!!"},
     {id:18,name:"Stained shirt",image:"images/nostainshirt.jpg",price:59,old_price:69,sale_status:"SALE!!"},
     {id:19,name:"Stained shirt",image:"images/nostainshirt.jpg",price:59,old_price:69,sale_status:"SALE!!"},
     {id:20,name:"Stained shirt",image:"images/nostainshirt.jpg",price:59,old_price:69,sale_status:"SALE!!"},
     {id:21,name:"Stained shirt",image:"images/nostainshirt.jpg",price:59,old_price:69,sale_status:"SALE!!"},
     {id:22,name:"Stained shirt",image:"images/nostainshirt.jpg",price:59,old_price:69,sale_status:"SALE!!"}
  ];


// JSON requests
app.get('/products_fetch', cors(), async (req, res) => {
    res.json(products)
})


app.get('/carousel', async (req, res) => {
  const carousel = [
    {"id":1,  "image":"images/1.jpg"},
    {"id":2,  "image":"images/2.jpg"},
    {"id":3,  "image":"images/3.jpg"},
    {"id":4,  "image":"images/4.jpg"},
    {"id":5,  "image":"images/5.jpg"}
  ];
  res.json(carousel);
})



app.get('/banner', async (req, res) => {
    res.json({"image": "images/fashion-banner.jpg"})
})


app.get('/promo_banner', async (req, res) => {
  const pban = [
    {"id":1,  "image":"images/promo-banner-1.jpg"},
    {"id":2,  "image":"images/promo-banner-2.jpg"},
    {"id":3,  "image":"images/promo-banner-3.jpg"},
    {"id":4,  "image":"images/promo-banner-4.jpg"},
    {"id":5,  "image":"images/promo-banner-3.jpg"}
  ];
  res.json(pban);
})

app.get('/blog', async (req, res) => {
  const pban = [
    {"id":1,  "image":"images/promo-banner-1.jpg", "title":"Lorem ipsum dolor sit amet", "desc":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, ad? Autem quos natus nisi aperiam, beatae, fugiat odit vel impedit dicta enim repellendus animi. Expedita quas reprehenderit incidunt, voluptates corporis."},
    {"id":2,  "image":"images/promo-banner-2.jpg", "title":"Lorem ipsum dolor sit amet", "desc":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, ad? Autem quos natus nisi aperiam, beatae, fugiat odit vel impedit dicta enim repellendus animi. Expedita quas reprehenderit incidunt, voluptates corporis."},
    {"id":3,  "image":"images/promo-banner-3.jpg", "title":"Lorem ipsum dolor sit amet", "desc":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, ad? Autem quos natus nisi aperiam, beatae, fugiat odit vel impedit dicta enim repellendus animi. Expedita quas reprehenderit incidunt, voluptates corporis."}
  ];
  res.json(pban);
})

app.get('/page-title', async (req, res) => {
  res.json({"title":"HOME UPDATED!"})
})

// Running the server
app.listen(PORT, () => {
    console.log(`Running server on PORT ${PORT}...`);
})



