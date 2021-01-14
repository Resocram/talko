import React from 'react';
import { Line } from 'react-chartjs-2';
import { DARK_BLUE } from '../constants/colors';

function LineChart({ values }) {
    const state = {
        // Creates array with values 0 - values.length
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
        ]
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
                            fontColor: 'white',
                        },
                        ticks: {
                            display: true,
                            fontColor: DARK_BLUE
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
                            fontColor: 'white'
                        },
                        ticks: {
                            display: true,
                            fontColor: DARK_BLUE
                        },
                        gridLines: {
                            display: true,
                            drawBorder: true
                        }
                    }]
                }
            }}
        /> 
    );
}

export default LineChart;