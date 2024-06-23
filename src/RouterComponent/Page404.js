import { Link } from "react-router-dom";
export default function page404() {
  return (
    <>
      <h1>Error : 404! Page Not Found</h1>
      <Link to="/">Go to Home Page</Link>
    </>
  );
}
