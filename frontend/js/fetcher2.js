//update products html
// update the banner content;
var baseURL = 'http://localhost:3000';
async function getData()
{    
  let myObject = await fetch(baseURL+'/products_fetch');    
  console.log('myobject is ', await myObject.json());    
  var data = JSON.parse(await myObject.json());   
  //console.log('products data is', data.productsData)    
  //console.log('banner data is', data.bannerContent)
}
getData();
