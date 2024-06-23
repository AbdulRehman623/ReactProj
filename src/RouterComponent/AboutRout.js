import { Link } from "react-router-dom";
export default function AboutRout() {
  return (
    <div>
      <h1>This is About Page</h1>
      <Link to="/">Go to Home Page</Link>
      <li>
        <Link to="/user/ar" state={{ name: "Abdul Rehman", age: 28 }}>
          AR
        </Link>
      </li>
      <li>
        <Link to="/user/mani">mani</Link>
      </li>
    </div>
  );
}
