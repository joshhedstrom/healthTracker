 import React, { Component } from 'react';
 import { Pie } from 'react-chartjs-2';
 import './Charts.css';


 class Chart extends Component {
        
      renderChart() {
          let chartData = {

            // labels: ['Mon', 'Tues', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun' ],
            labels: ['Water', 'Excer.', 'Nutr.'],
    
            datasets:[{
    
                // label: '# of mins Excercised each day this week/Food/Water',
                strokeColor: "rgba(100, 190, 154, 1)",
                data: [
                    this.props.waterChart,
                    this.props.exerciseChart,
                    this.props.nutritionChart 
                ],
                 backgroundColor: [
                    '#63c5e4',
                    '#825eb9b5',
                    '#10953bb8'
                    
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
                    <Pie justify="center" //item xs={24} 
	                    data={chartData}
                        options={{
                            legend: {
                                display: true
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