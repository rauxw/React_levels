import React, { useState } from "react";
import data from "./data";
import "./style.css";

const Accordian = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setenableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingleSelection(getCurrentId) {
    console.log(getCurrentId);
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  function handleMultiSelection(getCurrentId) {
    let cpMultiple = [...multiple];
    const findIndexOfCurrentId = cpMultiple.indexOf(getCurrentId);
    if (findIndexOfCurrentId === -1) {
      cpMultiple.push(getCurrentId);
    } else {
      cpMultiple.splice(findIndexOfCurrentId, 1);
    }
    setMultiple(cpMultiple);
  }

  return (
    <div className="wrapper">
      <button onClick={() => setenableMultiSelection(!enableMultiSelection)}>
        Enable Multi Selection
      </button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem, index) => (
            <div key={index} className="item">
              <div
                onClick={
                  enableMultiSelection
                    ? () => handleMultiSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
                className="title"
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {selected === dataItem.id ||
              multiple.indexOf(dataItem.id) !== -1 ? (
                <div className="content">{dataItem.answer}</div>
              ) : null}
            </div>
          ))
        ) : (
          <div>No data </div>
        )}
      </div>
    </div>
  );
};

export default Accordian;
