export default function ReuseChildComp(props, i) {
  return (
    <div key={i}>
      <span>{props.data.name}</span>
      <span>{props.data.age}</span>
      <span>{props.data.contact}</span>
    </div>
  );
}
