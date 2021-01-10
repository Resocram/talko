import React from 'react';
import { Line } from 'react-chartjs-2';

function LineChart({ values }) {
    const state = {
        // creates array with values 0 - values.length
        labels: Array.from(Array(values.length).keys()), 
        datasets: [
            {
                label: 'Energy',
                fill: false,
                lineTension: 0.5,
                borderColor: 'white',
                borderWidth: 2,
                pointRadius: 0.1,
                data: values
            }
        ],
        height: '200px'
    };

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
                            labelString: 'Time',
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
            height={1150}
        /> 
    );
}

export default LineChart;