import React from 'react';
import { Bar } from 'react-chartjs-2';

function BarChart({ values }) {
    const state = {
        labels: Array.from(Array(values.length).keys()),
        datasets: [
          {
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
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
                            fontColor: '#FFFFFF',
                        },
                        ticks: {
                            display: false,
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
                            display: false,
                            fontColor: '#324F5D'
                        },
                        gridLines: {
                            display: true,
                            drawBorder: true
                        }
                    }]
                }
            }}
            width={750}
            height={475}
        /> 
    );
}

export default BarChart;
