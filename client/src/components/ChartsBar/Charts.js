 import React, { Component } from 'react';
 import { Bar, Line, Pie } from 'react-chartjs-2';
 import './Charts.css';



 class Chart extends Component {
    
    renderChart() {
        let chartData = {

            labels: this.props.dates,
    
            datasets:[{
    
                // label: '# of mins Excercised each day this week/Food/Water',
                strokeColor: "rgba(100, 190, 154, 1)",
                data: this.props.quantities,
                backgroundColor: [
                    '#9a67ea',
                    '#f06292',
                    '#4d67f0',
                    'red',
                    'purple',
                    'pink'
                ]
            }],
            options: {
                responsive: true, 
                maintainAspectRatio: true,
                    title: {
                        display: false, 
                    },
                    legend: {
                        display: false,
                        position: 'bottom',
                    },
                }
            }
            return (
                <div className="Chart-container">
                    <Bar justify="center" //item xs={24} 
                        data={chartData}
                        options={{
                            legend: {
                                display: true
                            },
                            scales: {
                                yAxes: [{
                                    ticks: {
                                        beginAtZero: true
                                    }
                                }]

                            }
                        }}
                    />
            
            </div>
            ) 
    }
        
      
    render() {
        return (
            this.renderChart()
        )
    }
}
      

 export default Chart