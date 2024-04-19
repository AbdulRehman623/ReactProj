function First() {
  function Second() {
    return <h1>Hello Second Function</h1>;
  }
  return (
    <div>
      <h1>Hello First Function</h1>
      <Second />
      <h1>{15 * 10}</h1>
    </div>
  );
}

export default First;
