import { useEffect } from "react";
import { Link, Navigate, useNavigate, useLocation } from "react-router-dom";
export default function HomeRout() {
  const Navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  const NavToPage = (url) => {
    Navigate(url);
  };
  const logout = () => {
    localStorage.setItem("login", false);
    console.log(localStorage.getItem("login"));
  };
  useEffect(() => {
    let login = localStorage.getItem("login");
    console.log(login);
    if (!login || login === "false") {
      Navigate("/login");
    }
  });

  return (
    <div>
      <h1> This is Home Page</h1>
      <Link to="/about">Go to About Page</Link>
      <br />
      <br />
      <button
        onClick={() => {
          Navigate("/about");
        }}
      >
        Go to About Page
      </button>
      <br />
      <br />
      <button
        onClick={() => {
          Navigate("/filter");
        }}
      >
        Go to fitler Page
      </button>

      <br />
      <br />
      <button
        onClick={() => {
          NavToPage("/about");
        }}
      >
        Go to about Page(Conditional)
      </button>

      <br />
      <br />
      <button
        onClick={() => {
          NavToPage("/filter");
        }}
      >
        Go to filter Page(Conditional)
      </button>

      <br />
      <br />
      <button onClick={logout}>Log Out</button>
    </div>
  );
}
