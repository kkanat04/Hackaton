import React, { useState, useEffect } from "react";
import "../Shop.css";

const Products = (props) => {
  const [data, setData] = useState(false);
  const [user, setUser] = useState(false);

  return (
    <>
      <div className="wrap_product_cards">
        {props.products
          ? props.products.map((el) => {
              console.log(el);
              if ((el.category == 1, 2, 3, 4, 5, 6, 7, 8)) {
                return (
                  <div className="shop_products">
                    <div className="product_card">
                      <img src={el.photo} />
                      <div className="product_title_price">
                        <p className="product_title">
                          NOUF LONG SLEEVES MINIMAL DRESS IN WHITE
                        </p>
                        <p className="product_price">${el.price}</p>
                      </div>
                    </div>
                  </div>
                );
              }
            })
          : null}
      </div>
    </>
  );
};

export default Products;
