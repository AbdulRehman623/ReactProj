import React, { useEffect, useState } from "react";

function ApiTemp() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://localhost:44336/api/Employee", {
      method: "GET",
    }).then((result) => {
      result.json().then((resp) => {
        //console.log(resp);
        setData(resp);
      });
    });
  }, []);

  return (
    <div>
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

export default ApiTemp;

// CHat Gpt SUccess FUll Code to Call APi
// import React, { useEffect, useState } from "react";

// function ApiTemp() {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     // Function to call the API
//     const fetchData = async () => {
//       try {
//         const response = await fetch("https://localhost:44336/api/Employee");
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         const result = await response.json();
//         setData(result);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []); // Empty dependency array ensures this effect runs once when the component mounts

//   return (
//     <div>
//       <h1>API Data</h1>
//       {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>}
//     </div>
//   );
// }

// export default ApiTemp;
