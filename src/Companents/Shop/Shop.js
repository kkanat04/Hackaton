import React, { useEffect, useState } from "react";
import "./Shop.css";
import { NavLink, Route } from "react-router-dom";
import Products from "./Products/Products";
import Accessories from "./Accessories/Accessories";
import Blazers from "./Blazers/Blazers";
import Coats from "./Coats/Coats";
import Denim from "./Denim/Denim";
import Dresses from "./Dresses/Dresses";
import Pants from "./Pants/Pants";
import Skirts from "./Skirts/Skirts";
import Tops from "./Tops/Tops";
import { API } from '../Home/Home1/index';

const Shop = (props) => {
  const [data, setData] = useState(false);

  const [products, setProducts] = useState([]);
  
  const req = async () => {
    const req = await fetch(API);
    const res = await req.json();
    setProducts(res);
  };

  useEffect(() => {
    req();
  }, []);
  return (
    <>
      <div className="shop">
        <div className="category_h2">
          <h2>CATEGORIES</h2>
        </div>

        <div className="wrapp_shop">
          <div className="menu_category">
            <p className="category_title">CATEGORIES</p>
            <ul className="category_items">
            <div className='category_1'>
              <NavLink
                activeClassName="active-li"
                className='li-item'
                exact
                to="Shop-Accessories"
              >
                <li>Accessories</li>
              </NavLink>
              <NavLink
                activeClassName="active-li"
                className="li_item"
                exact
                to="Shop-Blazers"
              >
                <li>Blazers</li>
              </NavLink>
              <NavLink
                activeClassName="active-li"
                className="li_item"
                exact
                to="Shop-Coats"
              >
                <li>Coats & Long Jackets</li>
              </NavLink>
              <NavLink
                activeClassName="active-li"
                className="li_item"
                exact
                to="Shop-Denim"
              >
                <li>Denim</li>
              </NavLink>
              
              </div>

              <div className='category_2'>
              <NavLink
                activeClassName="active-li"
                className="li_item"
                exact
                to="Shop-Dresses"
              >
                <li>Dresses</li>
              </NavLink>
                <NavLink
                activeClassName="active-li"
                className="li_item"
                exact
                to="Shop-Pants"
              >
                <li>Pants</li>
              </NavLink>
           
              
              <NavLink
                activeClassName="active-li"
                className="li_item"
                exact
                to="Shop-Skirts"
              >
                <li>Skirts</li>
              </NavLink>
              <NavLink
                activeClassName="active-li"
                className="li_item"
                exact
                to="Shop-Tops"
              >
                <li>Tops</li>
              </NavLink>
              </div>
              
            </ul>
          </div>

          {props.match.params.category == "all" ? (
            <Products products={products} />
          ) : props.match.params.category == "Accessories" ? (
            <Accessories products={products} />
          ) : props.match.params.category == "Blazers" ? (
            <Blazers products={products} />
          ) : props.match.params.category == "Coats" ? (
            <Coats products={products} />
          ) : props.match.params.category == "Denim" ? (
            <Denim products={products} />
          ) : props.match.params.category == "Dresses" ? (
            <Dresses products={products} />
          ) : props.match.params.category == "Pants" ? (
            <Pants products={products} />
          ) : props.match.params.category == "Skirts" ? (
            <Skirts products={products} />
          ) : props.match.params.category == "Tops" ? (
            <Tops products={products} />
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Shop;
