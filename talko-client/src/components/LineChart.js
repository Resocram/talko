import React from 'react';
import { Line } from 'react-chartjs-2';

const state = {
    labels: ['1', '2', '3', '4', '5'],
    datasets: [
        {
            label: 'Energy',
            fill: false,
            lineTension: 0.5,
            backgroundColor: '#324F5D',
            borderColor: 'white',
            borderWidth: 2,
            data: [35, 21, 18, 37, 26]
        }
    ],
    height: '200px'
};

function LineChart(props) {
    return (
        <Line
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
                            labelString: 'Energy',
                            fontSize: 18,
                            fontStyle: 'bold',
                            fontColor: '#FFFFFF'
                        },
                        ticks: {
                            display: false
                        },
                        gridLines: {
                            display: false,
                            drawBorder: true
                        }
                    }],
                    xAxes: [{
                        type: 'time',
                        time: {
                            // unit: 'minute'
                            unit: 'hour',
                            displayFormats: {
                                quarter: 'h:mm'
                            }
                        },
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Time (min)',
                            fontSize: 18,
                            fontStyle: 'bold',
                            fontColor: '#FFFFFF'
                        },
                        ticks: {
                            fontColor: '#FFFFFF'
                        },
                        gridLines: {
                            display: false,
                            drawBorder: true
                        }
                    }]
                }
            }}
            width={1250}
            height={1150}
        /> 
    );
}

export default LineChart;