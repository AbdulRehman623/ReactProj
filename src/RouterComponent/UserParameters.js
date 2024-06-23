import { useLocation, useParams } from "react-router-dom";
export default function UserParameters() {
  const params = useParams();
  const { name } = params;
  const locate = useLocation();
  console.log(locate);
  return (
    <div>
      <h1>This is {name} Page</h1>
    </div>
  );
}
