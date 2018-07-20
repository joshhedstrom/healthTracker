 import React, { Component } from 'react';
 import { Bar, Line, Pie } from 'react-chartjs-2';
 import './Charts.css';



 class Chart extends Component {

        constructor(props) {
            super(props);
            this.state = {
                chartData:{

                    // labels: ['Mon', 'Tues', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun' ],
                    labels: ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'],
            
                    datasets:[{
            
                        // label: '# of mins Excercised each day this week/Food/Water',
                        strokeColor: "rgba(100, 190, 154, 1)",
                        data: [
                            5,
                            6,
                            2,
                            10,
                            12,
                            10,
                            3,
                        ],
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
                }
            };
        
      
      render() {
        return (
            <div className="Chart-container">
                    <Bar justify="center" //item xs={24} 
	                    data={this.state.chartData}

	                      options={{
                            legend: {
                                display: false
                            }
                            
                         }}
                    />
            
            </div>
        )
    }
}
      

 export default Chart