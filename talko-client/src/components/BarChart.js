import React from 'react';
import { Bar } from 'react-chartjs-2';

const state = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: [65, 59, 80, 81, 56]
      }
    ]
}

function BarChart(props) {
    return (
        <Bar
            data={state}
            options={{
                title:{
                    display: true,
                    fontSize:15
                },
                legend:{
                    display: false
                },
                maintainAspectRatio: false,
                scales: {
                    yAxes: [{
                        scaleLabel: {
                            display: true,
                            labelString: 'Errors',
                            fontSize: 18,
                            fontStyle: 'bold',
                            fontColor: '#FFFFFF',
                        },
                        ticks: {
                            display: true,
                            fontColor: '#324F5D'
                        },
                        gridLines: {
                            display: false,
                            drawBorder: true
                        }
                    }],
                    xAxes: [{
                        scaleLabel: {
                            display: true,
                            labelString: 'Interval',
                            fontSize: 18,
                            fontStyle: 'bold',
                            fontColor: '#FFFFFF'
                        },
                        ticks: {
                            display: true,
                            fontColor: '#324F5D'
                        },
                        gridLines: {
                            display: true,
                            drawBorder: true
                        }
                    }]
                }
            }}
            width={1250}
            height={1}
        /> 
    );
}

export default BarChart;
