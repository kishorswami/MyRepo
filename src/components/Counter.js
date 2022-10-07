import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { IncrementNumber, DecrementNumber } from "../actions/index";

export default function Counter() {
  const myState = useSelector((state) => state.ChangeTheNumber);
  const dispatch = useDispatch();

  return (
    <>
      <div className="container" style={{ marginTop: "5rem" }}>
        <h1>Increment/Decrement Counter Using Redux</h1>
        <div className="col-xl-2" style={{ marginTop: "2rem" }}>
          <div className="input-group">
            <div className="input-group-prepend">
              <button className="btn btn-outline-primary" type="button" onClick={() =>dispatch(DecrementNumber())}>
                -
              </button>
            </div>
            <input type="text" className="form-control" value={myState} />
            <div className="input-group-prepend">
              <button className="btn btn-outline-primary" type="button" onClick={() =>dispatch(IncrementNumber())}>
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
