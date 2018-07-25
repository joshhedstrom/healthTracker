 import React, { Component } from 'react';
 import { Bar, Line, Pie } from 'react-chartjs-2';
 import { defaults } from 'react-chartjs-2';
//  import merge from 'lodash';
 import './Charts.css';

 defaults.global.legend.display = false;

 class Chart extends Component {
    
    renderChart(props) {

        let chartData = {
            
            labels: props.dates,
    
            datasets:[{
               // {props.label}
                label: 'Props Label',
                strokeColor: "rgba(100, 190, 154, 1)",
                data: props.quantities,
                backgroundColor: [
                    '#ef5e92',
                    '#ff92c4',
                    '#ef5e92',
                    '#ff92c4',
                    '#ef5e92',
                    '#ff92c4',
                    '#ef5e92'
                ]
            }],
            options: {
                responsive: true, 
                maintainAspectRatio: true,
                title: {
                        display: false, 
                    },
                scales: {
                    yAxes: [{
                     ticks: {
                        beginAtZero: true
                            }
                        }]
                      
                    }
                
                }
            }
            return (
                <div className="Chart-container">
                    <Bar justify="center"
                        redraw={true}
                        data={chartData}
                    />
            
            </div>
            ) 
    }
        
      
    render() {
        return (
            this.renderChart(this.props)
        )
    }
}
      

 export default Chart