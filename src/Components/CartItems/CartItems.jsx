// import React, { useContext } from "react";
// import "./CartItems.css";
// import { ShopContext } from "../../Context/ShopContext";
// import remove_icon from "../Assets/cart_cross_icon.png";

// const CartItems = () => {
//   const { getTotalCartAmount, all_product, CartItems, removeFromCart } =
//     useContext(ShopContext);
//   return (
//     <div className="cartitems">
//       <div className="cartitems-format-main">
//         <p>Products</p>
//         <p>Title</p>
//         <p>Price</p>
//         <p>Quantity</p>
//         <p>Total</p>
//         <p>Remove</p>
//       </div>
//       <hr />
//       {all_product.map((e) => {
//         if (CartItems[e.id] > 0) {
//           return (
//             <div>
//               <div className="cartitems-format cartitems-format-main">
//                 <img src={e.image} alt="" className="carticon-product-icon" />
//                 <p>{e.name}</p>
//                 <p>${e.new_price}</p>
//                 <button className="cartitems-quantity">
//                   {CartItems[e.id]}
//                 </button>
//                 <p>${e.new_price * CartItems[e.id]}</p>
//                 <img
//                   className="cartitems-remove-icon"
//                   src={remove_icon}
//                   onClick={() => {
//                     removeFromCart(e.id);
//                   }}
//                   alt=""
//                 />
//               </div>
//               <hr />
//             </div>
//           );
//         }
//         return null;
//       })}
//       <div className="cartitems-down">
//         <div className="cartitems-total">
//           <h1>Cart Totals</h1>
//           <div>
//             <div className="cartitems-total-item">
//               <p>Subtotal</p>
//               <p>${getTotalCartAmount()}</p>
//             </div>
//             <hr />
//             <div className="cartitems-total-item">
//               <p>Shipping Fee</p>
//               <p>Free</p>
//             </div>
//             <hr />
//             <div className="cartitems-total-item">
//               <h3>Total</h3>
//               <h3>${getTotalCartAmount()}</h3>
//             </div>
//           </div>
//           <button>PROCEED TO CHECKOUT</button>
//         </div>
//         <div className="cartitems-promocode">
//           <p>If you have a promo code, enter it here</p>
//           <div className="cartitems-promobox">
//             <input type="text" placeholder="Promo code" />
//             <button>Submit</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CartItems;

// const CartItems = () => {
//   const { all_product, cartItems, removeFromCart } = useContext(ShopContext);

//   return (
//     <div className="cartitems">
//       <div className="cartitems-format-main">
//         <p>Products</p>
//         <p>Title</p>
//         <p>Price</p>
//         <p>Quantity</p>
//         <p>Total</p>
//         <p>Remove</p>
//       </div>
//       <hr />
//       {all_product
//         .filter((e) => cartItems[e.id] > 0)
//         .map((e) => (
//           <CartItem
//             key={e.id}
//             product={e}
//             quantity={cartItems[e.id]}
//             onRemove={() => removeFromCart(e.id)}
//           />
//         ))}
//     </div>
//   );
// };

// const CartItem = ({ product, quantity, onRemove }) => (
//   <div>
//     <div className="cartitems-format">
//       <img src={product.image} alt="" className="carticon-product-icon" />
//       <p>{product.name}</p>
//       <p>${product.new_price}</p>
//       <button className="cartitems-quantity">{quantity}</button>
//       <p>${product.new_price * quantity}</p>
//       <img src={remove_icon} onClick={onRemove} alt="" />
//     </div>
//     <hr />
//   </div>
// );

// export default CartItems;

import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";

const CartItems = () => {
  const { getTotalCartAmount, all_product, CartItems, removeFromCart } =
    useContext(ShopContext);
  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Size</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (CartItems[e.id] && CartItems[e.id].count > 0) {
          const selectedSize = CartItems[e.id].size; // Retrieve the selected size
          return (
            <div key={e.id}>
              <div className="cartitems-format cartitems-format-main">
                <img src={e.image} alt="" className="carticon-product-icon" />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <p>{selectedSize}</p> {/* Display the selected size */}
                <button className="cartitems-quantity">
                  {CartItems[e.id].count}
                </button>
                <p>${e.new_price * CartItems[e.id].count}</p>
                <img
                  className="cartitems-remove-icon"
                  src={remove_icon}
                  onClick={() => {
                    removeFromCart(e.id);
                  }}
                  alt=""
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartitems-promocode">
          <p>If you have a promo code, enter it here</p>
          <div className="cartitems-promobox">
            <input type="text" placeholder="Promo code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
