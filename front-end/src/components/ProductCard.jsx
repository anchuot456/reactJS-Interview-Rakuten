import React from "react";

const ProductCard = (props)=>{
    const {brand, href, title, newPrice, usedPrice, image}=props;

    console.log(props);
    return(
        <div className="productCard flex relative h-auto m-4 bg-white" style={{"width":"343px"}}>
            <div className="mt-5 mb-5">
                <img src={image} style={{"height":"120px","max-width":"120px"}}></img>
            </div>
            <div className="relative p-5">
                <div className="text-xs" style={{"color":"#696969"}}><b>{brand}</b></div>
                <div className="text-sm mb-2" style={{"color":"#333"}}><b>{title}</b></div>
                <div className="flex" style={{"color":"#BF0000"}}>
                    <p>
                        <span className="text-xl relative"><b>{newPrice}</b></span>
                        <span className="relative text-sm"><b> Neuf</b></span>
                    </p>
                </div>
                <div className="flex">
                    <p>
                        <span className="relative text-sm">Occasion dès</span>
                        <span className="relative text-xl"><b> {usedPrice}</b></span>
                    </p>
                </div>
                
            </div>
        </div>
    );
}
export default ProductCard;