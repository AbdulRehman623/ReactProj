export default function MapLoopFunction() {
  const count = 0;
  // this is object
  const students = [
    {
      name: "Abdul",
      Age: "28",
      address: [
        { Hn: "50", city: "sialkot", country: "pakistan" },
        { Hn: "50", city: "sialkot", country: "pakistan" },
        { Hn: "50", city: "sialkot", country: "pakistan" },
        { Hn: "50", city: "sialkot", country: "pakistan" },
      ],
    },
    {
      name: "Abdul",
      Age: "28",
      address: [
        { Hn: "51", city: "sialkot", country: "pakistan" },
        { Hn: "51", city: "sialkot", country: "pakistan" },
        { Hn: "51", city: "sialkot", country: "pakistan" },
        { Hn: "51", city: "sialkot", country: "pakistan" },
      ],
    },
  ];

  return (
    <div>
      <h2>Print Table with list or object</h2>
      <table border="1 px solid black">
        <thead>
          <tr>
            <td>Name</td>
            <td>Age</td>
            <td>Address</td>
          </tr>
        </thead>

        <tbody>
          {students.map(
            (data, i) => (
              // data.Age === 28 ? (
              <tr key={i}>
                <td>{data.name}</td>
                <td>{data.Age}</td>
                <td>
                  <table border="1 px solid black">
                    <tbody>
                      {data.address.map((item, i) => (
                        <tr key={i}>
                          <td>{item.Hn}</td>
                          <td>{item.city}</td>
                          <td>{item.country}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </td>
              </tr>
            )
            // ) : null
          )}
        </tbody>
      </table>
    </div>
  );
}
