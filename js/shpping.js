const loadProducts =()=>{
    
    fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data => showProducts(data))
}

loadProducts();

const showProducts =(products)=>{
    // console.log(products.length);
    
    products.forEach(product =>{
        // console.log(product);
        const {title,image,description,price} = product
      
        const productContainer = document.getElementById('product-container')
        productContainer.innerHTML +=`
        <div class="col">
        <div class="card h-100">
          <img src="${image}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${title}</h5>
            <p>Price : ${price}</p>
            <p class="card-text">${description.slice(0,100)}...</p>
            <button class="btn btn-primary" onclick='addToCart(${price})'>Add To Cart</button>
            <button class="btn btn-success">Details</button>
          </div>
        </div>
      </div>
        `
    })
}
let count = 0
const addToCart=(price)=>{
   
     count  =  count + 1
    document.getElementById('total-Products').innerText = count;
    const element = document.getElementById('price').innerText;
    const convertedPrice = parseFloat(element)
    const totalPrice = convertedPrice + price
    document.getElementById('price').innerText= totalPrice.toFixed(2)
    console.log( totalPrice);
}