import LiftingStateUpChildComp from "./LiftingStateUpChildComp";

export default function LiftingStateUpComp() {
  function AlertMsg(data) {
    console.log(data);
    alert(data.name);
  }
  return (
    <div>
      <h1>Lifting State Up</h1>
      <LiftingStateUpChildComp alert={AlertMsg} />
    </div>
  );
}
