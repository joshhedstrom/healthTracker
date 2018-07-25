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
                    '#4d66f08a'
                ]
            }]
  
        }

        let options = {
            responsive: true, 
            maintainAspectRatio: true,
                title: {
                    display: false, 
                },
                legend: {
                    display: false,
                    position: 'bottom',
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]  
                }
        }
            return (
                <div className="Chart-container">
                    <Line justify="center" data={chartData} options={options}/>
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