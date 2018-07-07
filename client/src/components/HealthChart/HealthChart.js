import React, { Component } from 'react';
import { select } from 'd3-selection';
import { selectAll } from 'd3-selection';

class HealthChart  extends Component {
  
        constructor(props) {
            super(props)
            this.createChart = this.createChart.bind(this);
        }

        componentDidMount() {
            this.createChart()
        }

        componentDidUpdate() {
            this.createChart()
        }

        createChart() {

            let dataset = [4, 18, 96, 120, 180, 30, 40, 120, 160]
    
            let svgWidth = 500, svgHeight = 300, barPadding = 5;
            let barWidth = (svgWidth / dataset.length);
            
            
            select('svg')
               .attr("width", svgWidth)
               .attr("height", svgHeight);
            
            selectAll("rect")
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
            
               .selectAll("text")
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



        }
    



   


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
