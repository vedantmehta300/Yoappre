import React from "react";
import Heyram1, { Sub, Mul } from "./Heyram1.jsx";
function Heyram() {
  return (
    <>
      <ul>
        <li>
          <h1>
            The sum of Numbers are=
            <span style={{ color: "blue", background: "yellow" }}>
              {Heyram1(5, 7)}
            </span>
          </h1>
        </li>
        <li>
          <h1>The Sub of Numbers are={Sub(4, 1)}</h1>
        </li>
        <li>
          <h1>This is the mul of numbers are ={Mul(12, 2)} </h1>
        </li>
      </ul>
    </>
  );
}

export default Heyram;
