import React, { Component } from 'react';

let dataset = [4, 18, 96, 120, 180, 30, 40, 120, 160]
    
let svgWidth = 500, svgHeight = 300, barPadding = 5;
let barWidth = (svgWidth / dataset.length);


let svg = d3.select('svg')
   .attr("width", svgWidth)
   .attr("height", svgHeight);

let barChart = svg.selectAll("rect")
   .data(dataset)
   .enter()
   .append("rect")

   .attr("y", (data) => { return svgHeight - data})
   .attr("height", (data) => { return data})

   .attr("width", barWidth - barPadding)
   .attr("transform", (data, index) => {
       let translate = [barWidth * index, 0];
       return "translate("+translate +")"
   }).attr("fill", "00ff00")


   //BarChart Above, chart labels below

   let text = svg.selectAll("text")
    .data(dataset)
    .enter()
    .append("text")
    .text((data) => {
        return data
    })
    .attr("y", (data, index) => {
        return svgHeight - data - 2;
    })
    .attr("x", (data, index) => {
        return barWidth * index;
    })
    .attr("fill", "#FF0800") 

class HealthChart  extends Component {
  


   


  render() {
    return (
        

        <div className="healthChart">
                    <h3> Below is the Sample Chart Component</h3>
                <svg className="barChart">
                
                
                
                </svg>
        
        
        
        </div>
 
    );
  }
}

export default HealthChart;
