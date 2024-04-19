import style from "./Custom.module.css";
import "./Style.css";

export default function CssStyle() {
  return (
    <div>
      <h1 className="styling">Module Styling check</h1>
      <h1 style={{ color: "lightblue", backgroundColor: "brown" }}>
        Module Styling check
      </h1>
      <h1 className={style.Success}>Module Styling check</h1>
    </div>
  );
}
