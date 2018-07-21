 import React, { Component } from 'react';
 import { Bar, Line, Pie } from 'react-chartjs-2';
 import './Charts.css';



 class Chart extends Component {
    
    renderChart(props) {

        let chartData = {
          
            labels: props.dates,
    
            datasets:[{
    
                // label: '# of mins Excercised each day this week/Food/Water',
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
                    legend: {
                        display: false,
                        position: 'bottom',
                    },
                }
            }
            return (
                <div className="Chart-container">
                    <Bar justify="center"
                    redraw={true}
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
            this.renderChart(this.props)
        )
    }
}
      

 export default Chart