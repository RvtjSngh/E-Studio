// import React, { useContext } from "react";
// import "./ProductDisplay.css";
// import star_icon from "../Assets/star_icon.png";
// import star_dull_icon from "../Assets/star_dull_icon.png";
// import { ShopContext } from "../../Context/ShopContext";

// const ProductDisplay = (props) => {
//   const { product } = props;
//   const { addToCart } = useContext(ShopContext);
//   return (
//     <div className="productdisplay">
//       <div className="productdisplay-left">
//         <div className="productdisplay-img-list">
//           <img src={product.image} alt="" />
//           <img src={product.image} alt="" />
//           <img src={product.image} alt="" />
//           <img src={product.image} alt="" />
//         </div>
//         <div className="productdisplay-img">
//           <img className="productdisplay-main-img" src={product.image} alt="" />
//         </div>
//       </div>
//       <div className="productdisplay-right">
//         <h1>{product.name}</h1>
//         <div className="productdisplay-right-stars">
//           <img src={star_icon} alt="" />
//           <img src={star_icon} alt="" />
//           <img src={star_icon} alt="" />
//           <img src={star_icon} alt="" />
//           <img src={star_dull_icon} alt="" />
//           <p>(4)</p>
//         </div>
//         <div className="productdisplay-right-prices">
//           <div className="productdisplay-right-prices-old">
//             ${product.old_price}
//           </div>
//           <div className="productdisplay-right-prices-new">
//             ${product.new_price}
//           </div>
//         </div>
//         <div className="productdisplay-right-description">
//           A lightweight,usually knitted, pullover shirt, close-fitting, with a
//           round neckline and short sleeves, worn as an undershirt or outershirt
//           garment.
//         </div>
//         <div className="productdisplay-right-size">
//           <h1>Select Size</h1>
//           <div className="productdisplay-right-sizes">
//             <div>S</div>
//             <div>M</div>
//             <div>L</div>
//             <div>XL</div>
//             <div>XXL</div>
//           </div>
//         </div>
//         <button
//           onClick={() => {
//             addToCart(product.id);
//           }}
//         >
//           ADD TO CART
//         </button>
//         {/* <p className="productdisplay-right-category">
//           <span>Category :</span>Women, T-Shirt, Crop Top
//         </p>
//         <p className="productdisplay-right-category">
//           <span>Tag :</span>Modern, Latest
//         </p> */}
//       </div>
//     </div>
//   );
// };

// export default ProductDisplay;

import React, { useContext, useState } from "react";
import "./ProductDisplay.css";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);

  const [selectedSize, setSelectedSize] = useState(null);

  const handleSizeSelection = (size) => {
    setSelectedSize(size);
  };

  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
          <img className="productdisplay-main-img" src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-stars">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(4)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-prices-old">
            ${product.old_price}
          </div>
          <div className="productdisplay-right-prices-new">
            ${product.new_price}
          </div>
        </div>
        <div className="productdisplay-right-description">
          A lightweight,usually knitted, pullover shirt, close-fitting, with a
          round neckline and short sleeves, worn as an undershirt or outershirt
          garment.
        </div>
        <div className="productdisplay-right-size">
          <h1>Select Size</h1>
          <div className="productdisplay-right-sizes">
            <button
              onClick={() => handleSizeSelection("S")}
              className={
                selectedSize === "S"
                  ? "productdisplay-right-sizes-button selected"
                  : "productdisplay-right-sizes-button"
              }
            >
              S
            </button>
            <button
              onClick={() => handleSizeSelection("M")}
              className={
                selectedSize === "M"
                  ? "productdisplay-right-sizes-button selected"
                  : "productdisplay-right-sizes-button"
              }
            >
              M
            </button>
            <button
              onClick={() => handleSizeSelection("L")}
              className={
                selectedSize === "L"
                  ? "productdisplay-right-sizes-button selected"
                  : "productdisplay-right-sizes-button"
              }
            >
              L
            </button>
            <button
              onClick={() => handleSizeSelection("XL")}
              className={
                selectedSize === "XL"
                  ? "productdisplay-right-sizes-button selected"
                  : "productdisplay-right-sizes-button"
              }
            >
              XL
            </button>
            <button
              onClick={() => handleSizeSelection("XXL")}
              className={
                selectedSize === "XXL"
                  ? "productdisplay-right-sizes-button selected"
                  : "productdisplay-right-sizes-button"
              }
            >
              XXL
            </button>
          </div>
        </div>
        <div className="productdisplay-right-button">
          <button
            onClick={() => {
              addToCart(product.id, selectedSize); // Pass the selected size as a second argument
            }}
          >
            ADD TO CART
          </button>
        </div>
        {/* <p className="productdisplay-right-category">
          <span>Category :</span>Women, T-Shirt, Crop Top
        </p>
        <p className="productdisplay-right-category">
          <span>Tag :</span>Modern, Latest
        </p> */}
      </div>
    </div>
  );
};

export default ProductDisplay;
