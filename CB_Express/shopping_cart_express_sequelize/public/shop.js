function fetchProducts(done){
    $.get('api/products',function (data){
        done(data)
    })
}
function addProduct(name,manuf,price,done){
    $.post('api/products',{
        name:name,
        manufacturer:manuf,
        price:price,
    },function (data){
        done(data)
    })
}

function createProductCard(product){
    return $(`
        <div class="col-3 card mx-2 p-4">
            <h4 class="product-name">${product.name}</h4>
            <div class="product-manufacturer">${product.manufacturer}</div>
            <div class="row">
                <div class="col-6 price">
                    Rs. ${product.price}
                </div>
                <div class="col-6">
                    <button class="btn btn-primary">Buy</button>
                </div>
            </div>
        </div>
    `)
}
