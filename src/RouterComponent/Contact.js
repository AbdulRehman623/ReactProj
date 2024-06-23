import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import ApiTemp from "./ContactComponent/ApiTemp";
import ApiPostTemp from "./ContactComponent/ApiPostTemp";

export default function Contact() {
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch("https://localhost:44336/api/Employee", {
  //     method: "GET",
  //   }).then((result) => {
  //     result.json().then((resp) => {
  //       //console.log(resp);
  //       setData(resp);
  //     });
  //   });
  // }, []);

  // console.log(data);

  return (
    <>
      <h1>Contact Us Page</h1>
      <h2>Here we have othefr business</h2>
      <Link to="/about">Go to About Page</Link>
      <br />
      <br />
      <Link to="Company">Company</Link>
      <br />
      <br />
      <Link to="Channel">Channel</Link>
      <br />
      <br />
      <Link to="Other">Other</Link>
      <br />
      <br />
      {/* <ApiTemp /> */}
      <ApiPostTemp />
      <Outlet />
    </>
  );
}
