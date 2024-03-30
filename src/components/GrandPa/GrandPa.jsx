import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import { createContext } from "react";

export const AssetContext = createContext("Gold");

const GrandPa = () => {
  return (
    <div style={{ border: "1px solid green", padding: "10px" }}>
      <h4>Grand Pa</h4>
      <AssetContext.Provider value="Gold">
        <div style={{ display: "flex" }}>
          <Father></Father>
          <Uncle></Uncle>
        </div>
      </AssetContext.Provider>
    </div>
  );
};

export default GrandPa;
