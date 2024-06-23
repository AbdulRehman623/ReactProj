import React, { useEffect, useState } from "react";
import { json } from "react-router-dom";

function ApiPostTemp() {
  const [data, setData] = useState("");
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");

  function SaveUser() {
    let req = { id, name, email, mobile };
    console.log(req);
    fetch("https://localhost:44336/api/Employee/UpdateEmployeeDetail", {
      method: "Post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(req),
    }).then((result) => {
      result.json().then((resp) => {
        //console.log(resp);
        setData(resp);
        setId("");
        setName("");
        setEmail("");
        setMobile("");
      });
    });
  }

  return (
    <div>
      <h1>insert New User</h1>
      <input
        type="text"
        value={id}
        onChange={(e) => {
          setId(e.target.value);
        }}
        name="id"
      />
      <br />
      <br />
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
        name="name"
      />
      <br />
      <br />
      <input
        type="text"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        name="email"
      />
      <br />
      <br />
      <input
        type="text"
        value={mobile}
        onChange={(e) => {
          setMobile(e.target.value);
        }}
        name="mobile"
      />
      <br />
      <br />
      <button type="button" onClick={() => SaveUser()}>
        Save New User
      </button>
      <h1>API Data</h1>
      {data ? (
        //   <pre>{JSON.stringify(data, null, 2)}</pre>

        <table className="styled-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.mobile}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default ApiPostTemp;
