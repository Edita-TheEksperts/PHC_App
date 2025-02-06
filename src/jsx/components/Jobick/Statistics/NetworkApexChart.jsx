import React from "react";
import ReactApexChart from "react-apexcharts";

class NetworkApexChart extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
		series: [
			{
				name: 'Net Profit',
				data: [15, 55, 90, 80, 25, 15, 70],
				//radius: 12,	
			}, 
			{
			  name: 'Revenue',
			  data: [60, 65, 15, 35, 30, 5, 40]
			}, 
		],
		options: {
			chart: {
				height: 230,
				type: "bar",
				toolbar: {
					show: false,
				},
			},
			
			plotOptions: {
				bar: {
					horizontal: false,
					columnWidth: '25%',
					endingShape: 'rounded'
				},
			},
			
			colors:['#01111C', 'var(--primary)'],
			dataLabels: {
				enabled: false,
			},
			markers: {
				shape: "circle",
			},
			
			legend: {
				show: false,
				fontSize: '12px',
				labels: {
					colors: '#000000',
				},
				markers: {
				width: 18,
				height: 18,
				strokeWidth: 0,
				strokeColor: '#fff',
				fillColors: undefined,
				radius: 12,	
				}
			},
			stroke: {
				show: true,
				width: 1,
				colors: ['transparent']
			},
			grid : {
				show:true,
				strokeDashArray: 6,
			},
			xaxis: {
				categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
				grid: {
					color: "rgba(233,236,255,0.5)",
					drawBorder: true
				},
			  	labels: {
					style: {
						colors: '#787878',
						fontSize: '13px',
						fontFamily: 'poppins',
						fontWeight: 100,
						cssClass: 'apexcharts-xaxis-label',
					},
				},
				crosshairs: {
					show: false,
				},
				axisTicks : {
					show : false
				},
				axisBorder : {
					show : false
				},
			},
			yaxis: {
				labels: {
					style: {
					  colors: '#787878',
					  fontSize: '13px',
					   fontFamily: 'poppins',
					  fontWeight: 100,
					  cssClass: 'apexcharts-xaxis-label',
					},
				},
			},
			fill: {
				opacity: 1
			},
			tooltip: {
				y: {
					formatter: function (val) {
						return "$ " + val + " thousands"
					}
				}
			}
		
		},		
	
    };
  }

	render() {
		return (			
			<ReactApexChart
				options={this.state.options}
				series={this.state.series}
				type="bar"
				height={230}
			/>
			
		);
	}
}

export default NetworkApexChart;