export default function LiftingStateUpChildComp(props) {
  let data = { name: "AR", email: "ar@test.com" };
  return (
    <div>
      <h1>Send User name</h1>
      <button onClick={() => props.alert(data)}>Click Me</button>
    </div>
  );
}
