import React, { useState, useEffect } from "react";

const Accessories = (props) => {

    const [data, setData] = useState(false);
    const [user, setUser] = useState(false);

    return (
            <div className="wrap_product_cards">
            {props.products
          ? props.products.map((el) => {
              if (el.category == 1) {
                return (
                  <div className="shop_products">
                    <div className="product_card">
                      <img src={el.photo} />
                      <div className="product_title_price">
                        <p className="product_title">
                          {el.description}
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
    );
};

export default Accessories;