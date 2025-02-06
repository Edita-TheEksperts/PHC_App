import React from "react";
import ReactApexChart from "react-apexcharts";

class NewCustomers4 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
		series: [
			{
				name: 'Net Profit',
				data: [100,300, 100, 400, 200, 400],
			}, 				
		],
      options: {
        chart: {
          height: 50,
		  width: 100,
          type: "area",
			toolbar: {
				show: false,
			},
			zoom: {
				enabled: false
			},
			sparkline: {
				enabled: true
			}
        },
        colors:['#B723AD'],
        dataLabels: {
			enabled: false,
		},

		legend: {
			show: false,
		},
		stroke: {
			show: true,
			width: 3,
			curve:'smooth',
			colors:['#B723AD'],
		},
		grid: {
			show:false,
			borderColor: '#eee',
			padding: {
				top: 0,
				right: 0,
				bottom: 0,
				left: 0

			}
		},
		states: {
			normal: {
				filter: {
					type: 'none',
					value: 0
				}
			},
			hover: {
				filter: {
					type: 'none',
					value: 0
				}
			},
			active: {
				allowMultipleDataPointsSelection: false,
				filter: {
					type: 'none',
					value: 0
				}
			}
		},
		xaxis: {
			show: false,
		},
		yaxis: {
			show: false,
		},
		fill: {
			type: 'gradient',
			gradient: {
				colorStops : [
					{
						offset: 0,
						color: '#B723AD',
						opacity: 1
					},
					{
						offset: 0.3,
						color: '#B723AD',
						opacity: .4
					},
					{
						offset: 100,
						color: '#B723AD',
						opacity: 0
					}
				]
			}
		},
		tooltip: {
			enabled:false,
			style: {
				fontSize: '12px',
			},
			y: {
				formatter: function(val) {
					return "$" + val + " thousands"
				}
			}
		},
		responsive: [{
			breakpoint: 1400,
			options: {
				chart : {
					width :70,
					height:40,
				}
			},
		}]
      },
    };
  }

	render() {
		return (			
			<ReactApexChart
				options={this.state.options}
				series={this.state.series}
				type="area"
				height={50}
				width={100}
			/>
			
		);
	}
}

export default NewCustomers4;