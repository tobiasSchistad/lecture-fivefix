import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function FrontPage() {
  return (
    <div>
      <h1>Welcome</h1>
      <ul>
        <li>
          <Link to={"/login"}>Login</Link>
        </li>
      </ul>
    </div>
  );
}

function Login() {
  return (
    <form>
      <h1>Login</h1>
      <div>
        Username <input />
      </div>
      <div>
        Password <input type={"password"} />
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  );
}

function Application() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<FrontPage />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/*"} element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}
ReactDom.render(<Application />, document.getElementById("app"));
