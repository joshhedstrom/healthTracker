 import React, { Component } from 'react';
 import { Bar, Line, Pie } from 'react-chartjs-2';
 import './Charts.css';



 class Chart extends Component {

        constructor(props) {
            super(props);
            this.state = {
                chartData:{

                    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday' ],
            
                    datasets:[{
            
                        label: '# of mins Excercised each day this week/Food/Water',
                        strokeColor: "rgba(100, 190, 154, 1)",
                        data: [
                            120,
                            30,
                            180,
                            60, 
                            130,
                            0
                        ],
                         backgroundColor: [
                            'teal',
                            'green',
                            'orange',
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
                                display: true,
                                position: 'bottom',
                            },
                        }
                    } 
                }
            };
        
      
      render() {
        return (
            <div className="Chart-container">
                    <Line justify="center" item xs={24} 
	                    data={this.state.chartData}

	                      options={{
                            title: {
                                display: this.state.chartData,
                                text: `Current Goals`,
                                fontSize: 30
                            }
                            
                         }}
                    />
            
            </div>
        )
    }
}
      

 export default Chart