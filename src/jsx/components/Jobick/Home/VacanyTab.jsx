import React from 'react';
import {Tab, Nav} from 'react-bootstrap';
import loadable from "@loadable/component";
import pMinDelay from "p-min-delay";

const VacanyCanvasChart1 = loadable(() =>
	pMinDelay(import("./TabChart/VacanyCanvasChart1"), 1000)
);

const VacanyTab = ()=>{
	return(
		<>	
			<Tab.Container defaultActiveKey="Monthly">
				<div className="card">
					<div className="card-header border-0 pb-0 flex-wrap">
						<h4 className="card-title mb-0">Vacancy Stats</h4>
						<div className="mt-3 mt-sm-0">
							<Nav as="ul" className="nav nav-tabs vacany-tabs style-1" role="tablist">
								<Nav.Item as="li" className="nav-item">
									<Nav.Link  className="nav-link" eventKey="Daily" >
										Daily
									</Nav.Link>
								</Nav.Item>
								<Nav.Item className="nav-item">
									<Nav.Link className="nav-link"  eventKey="Weekly" >
										Weekly
									</Nav.Link>
								</Nav.Item>
								<Nav.Item className="nav-item">
									<Nav.Link className="nav-link"  eventKey="Monthly" >
										Monthly
									</Nav.Link>
								</Nav.Item >
							</Nav>
						</div>
					</div>
					<div className="card-body pt-3 px-sm-4 px-0 pb-4">
						<div className="pb-sm-4 mb-3 d-flex flex-wrap px-3">
							<span className="d-flex align-items-center">
								<svg className="me-1" xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13">
									<rect  width="13" height="13" rx="6.5" fill="#35c556"/>
								</svg>
								<span className='text-dark fs-13 font-w500'>Application Sent</span>	
							</span>
							<span className="application d-flex align-items-center">
								<svg className="me-1" xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13">
									<rect  width="13" height="13" rx="6.5" fill="#3f4cfe"/>
								</svg>
								<span className='text-dark fs-13 font-w500'>Interviews</span>	
							</span>
							<span className="application d-flex align-items-center">
								<svg className="me-1" xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13">
									<rect  width="13" height="13" rx="6.5" fill="#f34040"/>
								</svg>
								<span className='text-dark fs-13 font-w500'>Rejected</span>
							</span>
						</div>
						<Tab.Content>
							<Tab.Pane eventKey="Daily">
								<VacanyCanvasChart1 dataActive={0}/>
							</Tab.Pane >	
							<Tab.Pane eventKey="Weekly">
								<VacanyCanvasChart1 dataActive={1}/>
							</Tab.Pane >	
							<Tab.Pane eventKey="Monthly">												
								<VacanyCanvasChart1 dataActive={2}/>
							</Tab.Pane >	
						</Tab.Content >	
					</div>
				</div> 
				
			</Tab.Container>			
		</>
	)
}
export default VacanyTab;