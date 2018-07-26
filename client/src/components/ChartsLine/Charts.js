 import React, { Component } from 'react';
 import { Line } from 'react-chartjs-2';
 import './Charts.css';



 class Chart extends Component {

    renderChart(props) {

        let chartData = {
          
            labels: props.dates,
    
            datasets:[{
    
                // label: '# of mins Excercised each day this week/Food/Water',
                strokeColor: 'rgba(77, 102, 240, 0.5411764705882353)',
                data: props.quantities,
                backgroundColor: [
                    'rgba(77, 102, 240, 0.5411764705882353)',
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