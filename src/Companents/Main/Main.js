import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../Home/Home";
import Shop from "./../Shop/Shop";
import Header from "./../Header/Header";
import Footer from "../Footer/Footer";
import axios from "axios";
import Accessories from "../Shop/Accessories/Accessories";
import { API } from "../Home/Home1/index";
import Account from "../Account/Account";
import CreateAccount from "../Account/CreateAccount/CreateAccount";
import User from "../Account/User/User";
import Collections from "../Collection/Collection";
import About from "../About/About";
import Journal from "../Journal/Journal";

const Main = () => {
  const [data, setData] = useState(false);
  const [user, setUser] = useState(false);

  const [products, setProducts] = useState([]);

  const req = async () => {
    const req = await fetch(API);
    const res = await req.json();
    console.log(res);
    setProducts(res);
  };

  useEffect(() => {
    req();
  }, []);

  return (
    <div>
      <Header />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/shop-:category" component={Shop} />
        <Route exact path="/account" component={Account} />
        <Route exact path="/createAccount" component={CreateAccount} />
        <Route exact path="/User" component={User} />
        <Route exact path="/collections" component={Collections} />
        <Route exact path="/ABOUT" component={About} />
        <Route exact path="/journal" component={Journal} />
      </Switch>

      <Footer />
    </div>
  );
};

export default Main;
