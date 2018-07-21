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
                        strokeColor: "rgba(100, 190, 154, 0)",
                        fillColor:  "teal",
                        data: [
                            180,
                            175,
                            176,
                            174,
                            173,
                            176,
                            174,
                        ],
                         backgroundColor: [
                            '#64b5f6',    
                        ]
                    }],
                    options: {}
                    } 
                }
            };
        
      
      render() {
        return (
            <div className="Chart-container">
                    <Line justify="center" //item xs={24} 
	                    data={this.state.chartData}

	                  
                    />
            
            </div>
        )
    }
}
      

 export default Chart