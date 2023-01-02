const initState ={
    products:[
        {
            "id":1,
            name:"Product 1",
            image:'../images/product1.jpg',
            price: 20,
            discount:"2",
            discountPrice: 20 -2/100 *20,
            quantity: 1 ,
            description:" Lorem ipsum dolor sit amet consectetur,. Consectetur ut vel,. Alias dolorem adipisci quo."
        },
        {
            "id":2,
            name:"Product 2",
            image:"../images/product2.jpg",
            price: 30,
            discount:"5",
            discountPrice: 20 -5 /100 *20,
            quantity: 1 ,
            description:" Lorem ipsum dolor sit amet consectetur,. Consectetur ut vel,. Alias dolorem adipisci quo."
        },
        {
            "id":3,
            name:"Product 3",
            image:"../images/product3.jpg",
            price: 50,
            discount:"2",
            discountPrice: 20 -2/100 *20,
            quantity: 1 ,
            description:" Lorem ipsum dolor sit amet consectetur,. Consectetur ut vel,. Alias dolorem adipisci quo."
        },
        {
            "id":4,
            name:"Product 4",
            image:"../images/product4.jpg",
            price: 15,
            discount:"2",
            discountPrice: 20 -2/100 *20,
            quantity: 1 ,
            description:" Lorem ipsum dolor sit amet consectetur,. Consectetur ut vel,. Alias dolorem adipisci quo."
        },
        {
            "id":5,
            name:"Product 5",
            image:"../images/product5.jpg",
            price: 60,
            discount:"2",
            discountPrice: 20 -2/100 *20,
            quantity: 1 ,
            description:" Lorem ipsum dolor sit amet consectetur,. Consectetur ut vel,. Alias dolorem adipisci quo."
        },
        {
            "id":6,
            name:"Product 6",
            image:"../images/product6.jpg",
            price: 80,
            discount:"2",
            discountPrice: 20 -2/100 *20,
            quantity: 1 ,
            description:" Lorem ipsum dolor sit amet consectetur,. Consectetur ut vel,. Alias dolorem adipisci quo."
        },
        {
            "id":7,
            name:"Product 7",
            image:"../images/product7.jpg",
            price: 56,
            discount:"2",
            discountPrice: 20 -2/100 *20,
            quantity: 1 ,
            description:" Lorem ipsum dolor sit amet consectetur,. Consectetur ut vel,. Alias dolorem adipisci quo."
        },
        {
            "id":8,
            name:"Product 8",
            image:"../images/product8.jpg",
            price: 20,
            discount:"2",
            discountPrice: 20 -2/100 *20,
            quantity: 1 ,
            description:" Lorem ipsum dolor sit amet consectetur,. Consectetur ut vel,. Alias dolorem adipisci quo."
        },
        {
            "id":9,
            name:"Product 9",
            image:"../images/product9.jpg",
            price: 20,
            discount:"2",
            discountPrice: 20 -2/100 *20,
            quantity: 1 ,
            description:" Lorem ipsum dolor sit amet consectetur,. Consectetur ut vel,. Alias dolorem adipisci quo."
        },
        {
            "id":10,
            name:"Product 10",
            image:"../images/product10.jpg",
            price: 20,
            discount:"2",
            discountPrice: 20 -2/100 *20,
            quantity: 1 ,
            description:" Lorem ipsum dolor sit amet consectetur,. Consectetur ut vel,. Alias dolorem adipisci quo."
        },
        {
            "id":11,
            name:"Product 11",
            image:"../images/product11.jpg",
            price: 20,
            discount:"2",
            discountPrice: 20 -2/100 *20,
            quantity: 1 ,
            description:" Lorem ipsum dolor sit amet consectetur,. Consectetur ut vel,. Alias dolorem adipisci quo."
        },
        {
            "id":12,
            name:"Product 12",
            image:"../images/product12.jpg",
            price: 20,
            discount:"2",
            discountPrice: 20 -2/100 *20,
            quantity: 1 ,
            description:" Lorem ipsum dolor sit amet consectetur,. Consectetur ut vel,. Alias dolorem adipisci quo."
        },
    ],
    product:{}
}

const ProductsReducer = (state = initState, action) => {
    switch(action.type){
        case "PRODUCT": 
        return {...state, product: state.products.find(product => product.id === parseInt(action.id))}
        default: 
        return state;
}
}

export default ProductsReducer;