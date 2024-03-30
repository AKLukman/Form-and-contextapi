import { useContext } from "react";
import { AssetContext } from "../GrandPa/GrandPa";

const Myself = () => {
  const gift = useContext(AssetContext);
  return (
    <div style={{ border: "1px solid green", padding: "10px" }}>
      <h4>myself</h4>
      <p>{gift}</p>
    </div>
  );
};

export default Myself;
