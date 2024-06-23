import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export default function ProtectedRoute(props) {
  const { Componen } = props;
  const navigate = useNavigate();
  useEffect(() => {
    let login = localStorage.getItem("login");
    console.log("protected status :" + login);
    if (!login || login === "false") {
      navigate("/login");
    }
  });
  return (
    <>
      <Componen />
    </>
  );
}
