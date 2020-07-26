import React from "react";
import { Clock } from "./Clock";
import { Controls } from "./Controls";

export class Display extends React.Component {
  state = {
    minutes: 1500,
    seconds: 60,
  };

  start = () => {
    setInterval(() => {}, 1000);
  };

  render() {
    return (
      <div className="clock-card">
        <div className="control-group">
          {/* <button>UP</button> */}
          <Clock />
          {/* <button>DOWN</button> */}
        </div>
        <Controls />
      </div>
    );
  }
}
