import ReuseChildComp from "./ReuseChildComp";

export default function ReuseComp() {
  const students = [
    {
      name: "Abdul",
      age: "28",
      contact: 123,
    },
    {
      name: "Abdul",
      age: "28",
      contact: 354,
    },
    {
      name: "Abdul",
      age: "28",
      contact: 123,
    },
    {
      name: "Abdul",
      age: "28",
      contact: 354,
    },
  ];
  return (
    <div>
      {students.map((item, i) => (
        <ReuseChildComp data={item} />
      ))}
    </div>
  );
}
