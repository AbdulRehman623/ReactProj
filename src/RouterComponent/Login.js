import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const login = () => {
    localStorage.setItem("login", true);
  };
  const navigate = useNavigate();
  useEffect(() => {
    let login = localStorage.getItem("login");
    console.log("Login Page Value:" + login);
    if (login !== null && login !== "false") {
      console.log("Value is" + login);
      navigate("/");
    }
  });
  return (
    <>
      <h1>Login Page</h1>
      <br />
      <input type="text" placeholder="User Name" />
      <br />
      <input type="text" placeholder="Password" />
      <br />
      <button onClick={login}> Login</button>
    </>
  );
}
