import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import CreateAccount from "./CreateAccount/CreateAccount";
import "./Account.css";
import { LOGIN } from "../Home/Home1/index";

const Account = () => {
  const [data, setData] = useState({
    userName: "",
    password: "",
  });
  const [text, setText] = useState('')  


  function Post(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
    console.log(data);
  }

  async function submit(e) {
    e.preventDefault();
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

    
    if (response.non_field_errors) {
      const error = response.non_field_errors[0];
      console.log(error);
      setText(error)
    }
    if (response.auth_token) {
      alert(`Вы успешно вошли на аккаунт ${data?.userName}`)
      window.location.reload(); 
    }
    if (response.auth_token) {
        localStorage.setItem(
          "spiderman",
          JSON.stringify({ response, username: data.userName })
        );

      }

  }
  console.log(text)

  return (
    <>
      <div className="main_account">
        <div className="wrap_account">
          <div className="login_title">
            <p className="wrap_login">LOGIN</p>
            <p className="wrap_info">Please enter your e-mail and password:</p>
          </div>
          <form className="login_account" onSubmit={(e) => submit(e)}>
            <input
              className="inp_login"
              onChange={(e) => Post(e)}
              id="userName"
              value={data.userName}
              className="btn_reg"
              type="text"
              placeholder="Username"
            />
            <p className='error'>{text}</p>
            <input
              className="inp_login"
              onChange={(e) => Post(e)}
              id="password"
              value={data.password}
              className="btn_reg"
              type="password"
              placeholder="Password"
            />
            <button className="btn_login">LOGIN</button>
          </form>

          <div className="create_one_title">
            <p className="ques_login">Don't have an account?</p>
            <NavLink exact to="/createAccount">
              <p className="ques_cr_ac"> Create one?</p>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Account;
