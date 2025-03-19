const products=[
    {title:"Product 1",price:10.99,quantity:5},
    {title:"Product 2",price:20.49,quantity:3},
    {title:"Product 3",price:15.75,quantity:7},
    {title:"Product 4",price:30.99,quantity:2}
]

//option 1
const filteredArray1=products.filter(product=>product.price>=20);
const productsNames1=filteredArray1.map(product=>product.title);


//option 2
const names=products.filter(product=>product.price>=20).map(product=>product.title);
console.log(productsNames1)
console.log(names)