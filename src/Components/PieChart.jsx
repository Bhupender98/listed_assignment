import React from 'react'
import ReactApexChart from 'react-apexcharts';

class PieChart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

            series: [14, 31, 55],
            options: {
                chart: {
                    width: 380,
                    type: 'pie',
                },
                labels: ['Team A', 'Team B', 'Team C'],
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }]
            },

        };
    }



    render() {
        return (


            <div id="chart">
                <ReactApexChart options={this.state.options} series={this.state.series} type="pie" width={380} />
            </div>


        );
    }
}
export default PieChart;