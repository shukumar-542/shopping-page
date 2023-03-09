const loadProducts =()=>{
    
    fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data => showProducts(data))
}

loadProducts();

const showProducts =(products)=>{
    
    products.forEach(product =>{
        const {title,image,description} = product
        console.log(product);
        const productContainer = document.getElementById('product-container')
        productContainer.innerHTML +=`
        <div class="col">
        <div class="card h-100">
          <img src="${image}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${title}</h5>
            <p class="card-text">${description.slice(0,100)}...</p>
            <button class="btn btn-primary">Add To Cart</button>
            <button class="btn btn-success">Details</button>
          </div>
        </div>
      </div>
        `
    })
//    for(const product of products){
//     console.log(product);
//    }
}