export default function MapFunction() {
  // this is array
  const names = ["Abdul", "Daud", "Usman"];
  const count = 0;
  // this is object
  const students = [
    {
      name: "Abdul",
      Age: "28",
      contact: 123,
    },
    {
      name: "Abdul",
      Age: "28",
      contact: 354,
    },
  ];

  return (
    <div>
      <h2>Print Array</h2>

      {names.map((item, i) => (
        <h1 key={i}>Name is : {item}</h1>
      ))}

      <h2>Print Table with list or object</h2>
      <table border="1 px solid black">
        <thead>
          <tr>
            <td>Name</td>
            <td>Age</td>
            <td>Contact</td>
          </tr>
        </thead>

        <tbody>
          {students.map((data, i) =>
            data.contact === 123 ? (
              <tr key={i}>
                <td>{data.name}</td>
                <td>{data.Age}</td>
                <td>{data.contact}</td>
              </tr>
            ) : null
          )}
        </tbody>
      </table>
    </div>
  );
}
