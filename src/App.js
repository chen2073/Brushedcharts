import React from "react";
import Brushedchart from "./Brushedcharts";
import "./styles.css";

export default function App() {
  const sample_infected = [
    {
      date: "01/01/2020",
      num_cases: 20
    },
    {
      date: "01/02/2020",
      num_cases: 40
    },
    {
      date: "01/03/2020",
      num_cases: 100
    },
    {
      date: "01/04/2020",
      num_cases: 200
    },
    {
      date: "01/05/2020",
      num_cases: 150
    }
  ];

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Brushedchart data={sample_infected} />
    </div>
  );
}
