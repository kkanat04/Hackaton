import axios from "axios";
import React, { useState } from "react";
import { AUTH, LOGIN } from "../../Home/Home1/index";
import "./CreateAccount.css";
import { NavLink } from "react-router-dom";

const CreateAccount = () => {
  const [data, setData] = useState({
    email: "",
    userName: "",
    password: "",
  });
  const [Text, setText]=useState([])

  const [Auth, setAuth]=useState([])

  function Post(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
  }

  async function submit(e) {
    e.preventDefault();
    const request = await fetch(AUTH, {
      method: "POST",
      cors: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: data.email,
        username: data.userName,
        password: data.password,
      }),
    });
    const response = await request.json();
    console.log(response);
    myrza();
    if (response.id) {
      alert("Вы успешно зарешистрировались " + response.username);
      window.location.reload();
    }
    if (response.username) {
        const err = response.username[0]
        setText(err)
        console.log(Text)
      }
      
   }

  async function myrza(e) {
    const request = await fetch(LOGIN, {
      method: "POST",
      cors: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: data.userName,
        password: data.password,
      }),
    });
    const response = await request.json();
    console.log(response);

    if (response.auth_token) {
      localStorage.setItem(
        "spiderman",
        JSON.stringify({ response, username: data.userName })
      );
    }
    if (response.auth_token) {
        const auth = response.auth_token[0]
        setAuth(auth)
      }
  }

  return (
    <>
      <div className="main_create_account_wrap">
        <div className="create_account_wrap">
          <div className="register_title">
            <p className="titlt_create_register">REGISTER</p>
            <p className="register_info">
              Please fill in the information below:
            </p>
          </div>

          <form className="login_register" onSubmit={(e) => submit(e)}>
            <input
              onChange={(e) => Post(e)}
              id="userName"
              value={data.userName}
              className="btn_reg"
              type="text"
              placeholder="Username"
            />
            <p className='err'>{Text}</p>
            <input
              onChange={(e) => Post(e)}
              id="email"
              value={data.email}
              className="btn_reg"
              type="email"
              placeholder="Email"
            />
            <input
              onChange={(e) => Post(e)}
              id="password"
              value={data.password}
              className="btn_reg"
              type="password"
              placeholder="Password"
            />
            <NavLink exact to={Auth.auth_token ? '/' : ''}><button className="btn_submit">CREATE MY ACCOUNT</button></NavLink>
          </form>
          <div className="title-enter">
            <p className="account-title">You have an account?</p>
            <NavLink exact to="/account">
              <p className="enter-title">Enter?</p>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateAccount;
