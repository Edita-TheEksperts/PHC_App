import React from 'react';
import {Tab, Nav} from 'react-bootstrap';

import CanvasChart2 from "./TabChart/CanvasChart2";

const CanvasChartTab = ()=>{
	return(
		<>	
			<Tab.Container defaultActiveKey="Monthly">
				<div className="card">
					<div className="card-header border-0 pb-0">
						<h4 className="card-title mb-0">Chart</h4>
						<div className="card-action coin-tabs mt-3 mt-sm-0">
							<Nav  className="nav nav-tabs style-1 chart-tab">
								<Nav.Item >
									<Nav.Link eventKey="Daily">Day</Nav.Link>
								</Nav.Item>
								<Nav.Item >
									<Nav.Link eventKey="Weekly">Weekly</Nav.Link>
								</Nav.Item>
								<Nav.Item>
									<Nav.Link eventKey="Monthly">Monthly</Nav.Link>
								</Nav.Item >
							</Nav>
						</div>
					</div>
					<div className="card-body ps-sm-4 ps-0 pb-4">
						<div className="d-sm-flex d-block mb-3 mx-3">
							<div className="d-flex align-items-center me-5 mb-sm-0 mb-2">
								<svg className="me-2" xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13">
									<rect width="13" height="13" fill="#f73a0b"></rect>
								</svg>
								<label className="form-label mb-0 me-4">Delivered</label>
								<h6 className="mb-0 me-1">239</h6>
								<span className="text-success fs-13 font-w500">+0.4%</span>
							</div>
							<div className="d-flex align-items-center">
								<svg className="me-2" xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13">
									<rect width="13" height="13" fill="#6e6e6e"></rect>
									</svg>
								<label className="form-label mb-0 me-4">Expense</label>
								<h6 className="mb-0 me-1">$8,345</h6>
							</div>
						</div>						
						<Tab.Content>
							<Tab.Pane eventKey="Daily" >
								<CanvasChart2 className="chartjs" dataActive={0}/>
							</Tab.Pane >	
							<Tab.Pane eventKey="Weekly">
								<CanvasChart2 className="chartjs" dataActive={1}/>
							</Tab.Pane >	
							<Tab.Pane eventKey="Monthly">												
								<CanvasChart2 className="chartjs" dataActive={2}/>
							</Tab.Pane >	
						</Tab.Content >	
					</div>
				</div> 
				
			</Tab.Container>			
		</>
	)
}
export default CanvasChartTab;