import React from 'react'
import ReactApexChart from 'react-apexcharts';
class ApexChart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            series: [
                {
                    name: "Guest",
                    data: [400, 300, 400, 300]
                },
                {
                    name: "User",
                    data: [200, 100, 300, 200]
                }
            ],
            options: {
                chart: {
                    height: 200,
                    type: 'line',
                    dropShadow: {
                        enabled: true,
                        color: '#000',
                        top: 18,
                        left: 7,
                        blur: 10,
                        opacity: 0.2
                    },
                    toolbar: {
                        show: false,
                    }
                },
                colors: ['#77B6EA', '#545454'],
                dataLabels: {
                    enabled: false,
                },
                stroke: {
                    curve: 'smooth'
                },
                title: {
                    text: 'Activities',
                    align: 'left'
                },
                grid: {
                    borderColor: '#e7e7e7',
                    row: {
                        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                        opacity: 0.5
                    },
                },
                markers: {
                    size: 0
                },
                xaxis: {
                    categories: ['Week1', 'Week2', 'Week3', 'Week4' ],
                    title: {
                        text: ''
                    }
                },
                yaxis: {
                    title: {
                        text: ''
                    },
                    min: 0,
                    max: 500,
                },
                legend: {
                    position: 'top',
                    horizontalAlign: 'right',
                    floating: false,
                    offsetY: -25,
                    offsetX: -5
                }
            },
        };
    }
    render() {
        return (


            <div id="chart">
                <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={300} />
            </div>
        );
    }
}
export default ApexChart;