import { useSearchParams } from "react-router-dom";

export default function Filter() {
  const [searchparams, setsearchparams] = useSearchParams();
  const age = searchparams.get("age");
  const name = searchparams.get("name");
  console.log(searchparams.get("age"));
  return (
    <>
      <h1>Filters</h1>
      <h2>Age is : {age}</h2>
      <h2>Name is : {name}</h2>

      <input
        onChange={(e) =>
          setsearchparams({ age: e.target.value, name: e.target.value + 5 })
        }
      />
      <button
        onClick={() => setsearchparams({ age: 30, name: "Abdul Rehman" })}
      >
        Change Age
      </button>
    </>
  );
}
