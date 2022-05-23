import React, { useRef, useEffect } from "react";
import * as d3 from "d3";
//import { render } from "react-dom";
import "./Chart.scss";
export default function VerticalBar() {
  const data = Array.from({ length: 10 }, () =>
    Math.floor(Math.random() * (50 - 1) + 1)
  );
  const barRef = useRef(null);

  useEffect(() => {
    var margin = { top: 10, right: 10, bottom: 25, left: 25 },
      wt = 710 - margin.left - margin.right,
      ht = 450 - margin.top - margin.bottom;

    const currentRef = d3
      .select(barRef.current)
      .append("svg")
        .attr("width", wt + margin.left + margin.right)
        .attr("height", ht + margin.top + margin.bottom)
      .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
      .style("padding", 10)
      .style("background-color", "whitesmoke");
    // .style("margin-left", 50);

    // axis-X
    var x = d3
      .scaleLinear()
      .domain([0,10])
      .range([0, wt]);
    // .padding([0.8]);
    currentRef
      .append("g")
      .attr("transform", "translate(0," + ht + ")")
      .call(d3.axisBottom(x));
    
    // axis-Y
    let y = d3.scaleLinear().domain([0, 100]).range([ht, 0]);
    currentRef
      .append("g")
      .call(d3.axisLeft(y));
    
    currentRef
      .selectAll("bar")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d, i) => i * 70)
      .attr("y", (d, i) => ht - 10 * d)
      .attr("width", 45)
      .attr("height", (d, i) => d * 10)
      .attr("fill", (d, i) => "#0284FE");
  }, [data]);
  return (
    <div className="chart">
      <div ref={barRef}></div>
    </div>
  );
}
