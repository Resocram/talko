import React from 'react';
import { Bar } from 'react-chartjs-2';
import { DARK_BLUE } from '../constants/colors';


function BarChart({ values }) {
    const state = {
        labels: Array.from(Array(values.length).keys()),
        datasets: [
          {
            backgroundColor: 'rgba(75,192,192,1)',
            data: values
          }
        ]
    };

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
                            fontColor: 'white',
                        },
                        ticks: {
                            display: false,
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
                            labelString: 'Interval',
                            fontSize: 18,
                            fontStyle: 'bold',
                            fontColor: 'white'
                        },
                        ticks: {
                            display: false,
                            fontColor: DARK_BLUE
                        },
                        gridLines: {
                            display: true,
                            drawBorder: true
                        }
                    }]
                }
            }}
            width="100%"
            height="100%"
        /> 
    );
}

export default BarChart;
