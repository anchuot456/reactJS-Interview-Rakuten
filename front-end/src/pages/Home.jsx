import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

const Home = ()=>{
    const [products,setProducts] = useState([]);
    useEffect(()=>{
        const data = {
            "products": [
                {
                    "brand": "Apple",
                    "href": "/mfp/9623007/apple-iphone-15?pid=11517874360",
                    "title": "Apple iPhone 11 128 Go Double SIM Noir Sidéral",
                    "newPrice": "754 €",
                    "usedPrice": "720,99 €",
                    "image": "https://fr.shopping.rakuten.com/photo/4075345048_ML_NOPAD.jpg"
                },
            ]
        };
        setProducts([...data.products]);
        console.log(products);
    },[])
    return(
        <div className="home w-full h-screen" style={{"backgroundColor":"#F7F7F7"}}>
            <ul className="p-4">
                {products.map((product,index)=>{
                    return(<ProductCard
                    key={index}
                    brand = {product.brand}
                    href = {product.href}
                    title = {product.title}
                    newPrice = {product.newPrice}
                    usedPrice = {product.usedPrice}
                    image = {product.image}
                    />);
                })}
            </ul>
        </div>
    );
}

export default Home;