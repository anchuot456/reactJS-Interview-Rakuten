import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import "../styles/Home.css"

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
                {
                    "brand": "Apple",
                    "href": "/mfp/9623007/apple-iphone-15?pid=11517874360",
                    "title": "Apple iPhone 11 128 Go Double SIM Noir Sidéral",
                    "newPrice": "754 €",
                    "usedPrice": "720,99 €",
                    "image": "https://fr.shopping.rakuten.com/photo/4075345048_ML_NOPAD.jpg"
                },
                {
                    "brand": "Apple",
                    "href": "/mfp/9623007/apple-iphone-15?pid=11517874360",
                    "title": "Apple iPhone 11 128 Go Double SIM Noir Sidéral",
                    "newPrice": "754 €",
                    "usedPrice": "720,99 €",
                    "image": "https://fr.shopping.rakuten.com/photo/4075345048_ML_NOPAD.jpg"
                },
                {
                    "brand": "Apple",
                    "href": "/mfp/9623007/apple-iphone-15?pid=11517874360",
                    "title": "Apple iPhone 11 128 Go Double SIM Noir Sidéral",
                    "newPrice": "754 €",
                    "usedPrice": "720,99 €",
                    "image": "https://fr.shopping.rakuten.com/photo/4075345048_ML_NOPAD.jpg"
                },
                {
                    "brand": "Apple",
                    "href": "/mfp/9623007/apple-iphone-15?pid=11517874360",
                    "title": "Apple iPhone 11 128 Go Double SIM Noir Sidéral",
                    "newPrice": "754 €",
                    "usedPrice": "720,99 €",
                    "image": "https://fr.shopping.rakuten.com/photo/4075345048_ML_NOPAD.jpg"
                },
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
            <div>
                <b>Question 1:</b>
                <p>Because setTimeout function, console will delay rendering "B" for 1000 milisecond. So the answer is "A C B"</p>
            </div>
            <div>
                <b>Question 2:</b>
                <p>First the program create count variable and set value of 10.
                Then useEffect function runs before rendering, count = count * 0.5 = 5
                So it should display "Your counter is: 5"
                </p>
            </div>
            <div>
                <b>Question 3:</b>
                <p>I have created a responsive grid with product cards, it will change the number of column depend screen size </p>
            </div>
            <div className="m-4 product-table w-auto flex relative grid gap-4 xl:grid-cols-4 lg:grid-cols-3">
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
            </div>
        </div>
    );
}

export default Home;