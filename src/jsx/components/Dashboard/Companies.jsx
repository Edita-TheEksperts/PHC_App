import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, Tab, Nav } from 'react-bootstrap';

const CardBlog = [
	{ colorDesign:'#2769ee', title: "Bubble Studios", Postion:'UI Designer', },
	{ colorDesign:'#ee27c0', title: "Foodia Studios", Postion:'Programmer', },
	{ colorDesign:'#2db532', title: "Kelon inc.", Postion:'UX Researcher', },
	{ colorDesign:'#2769ee', title: "Bubble Studios", Postion:'Data Scientist', },
	{ colorDesign:'#ee27c0', title: "Foodia Studios", Postion:'Graphic Designer', },
	{ colorDesign:'#eeb927', title: "Kelon inc.", Postion:'Animator', },
	{ colorDesign:'#175baa', title: "Foodia Studios" , Postion:'Lead Design',},
	{ colorDesign:'#378a82', title: "Bubble Studios", Postion:'UX Researcher', },
	{ colorDesign:'#2db532', title: "Kelon inc.", Postion:'UX Researcher', },
	{ colorDesign:'#2769ee', title: "Bubble Studios", Postion:'Data Scientist', },
	{ colorDesign:'#ee27c0', title: "Foodia Studios", Postion:'Graphic Designer', },
	{ colorDesign:'#eeb927', title: "Kelon inc.", Postion:'Animator', },
];

const Companies = () => {
	const [control3, setControl3] = useState('Choose Location');
	const [salaryblog, setSalaryblog] = useState('Salary Range');
	const [selectblog, setSelectblog] = useState('Newest');
	return (
		<>
			<div className="d-flex align-items-center flex-wrap search-job mb-4">
				<div className="col-xl-2 col-xxl-3 search-dropdown d-flex align-items-center">
					<Dropdown className="form-control border-0  style-1 h-auto" >
						<Dropdown.Toggle as="div" className="fs-16 font-w500 text-primary justify-content-between d-flex align-items-center i-false" >
							{control3}
							<i className="fas fa-angle-down text-primary  ms-3"></i>

						</Dropdown.Toggle>
						<Dropdown.Menu className="dropdown-menu dropdown-menu-end mt-1">
							<Dropdown.Item className=" text-primary" onClick={() => setControl3("Choose Location")}>
								Choose Location
							</Dropdown.Item>
							<Dropdown.Item className=" text-primary" onClick={() => setControl3("London")}>
								London
							</Dropdown.Item>
							<Dropdown.Item className=" text-primary" onClick={() => setControl3("France")}>
								France
							</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>
				</div>
				<div className="col-xl-2 col-xxl-3 search-dropdown d-flex align-items-center">
					<Dropdown className="form-control border-0  style-1 h-auto" >
						<Dropdown.Toggle as="div" className="fs-16 font-w500 text-primary d-flex justify-content-between align-items-center i-false" >
							{salaryblog}
							<i className="fas fa-angle-down text-primary  ms-3"></i>
						</Dropdown.Toggle>
						<Dropdown.Menu className="dropdown-menu dropdown-menu-end mt-1">
							<Dropdown.Item className=" text-primary" onClick={() => setSalaryblog("Salary Range")}>
								Salary Range
							</Dropdown.Item>
							<Dropdown.Item className=" text-primary" onClick={() => setSalaryblog("50,000-60,000")}>
								50,000-60,000
							</Dropdown.Item>
							<Dropdown.Item className=" text-primary" onClick={() => setSalaryblog("70,000-80,000")}>
								70,000-80,000
							</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>
				</div>
				<div className="col-xl-8 col-xxl-6 col-lg-6 col-12 d-md-flex job-title-search pe-0">
					<div className="input-group search-box">
						<input type="text" className="form-control" placeholder="search job title here.." />
						<Link to={"#"} className="btn btn-primary btn-rounded">Search<i className="flaticon-381-search-2 ms-2"/></Link>
					</div>
				</div>
			</div>
			<Tab.Container defaultActiveKey={"List"}>
				<div className="d-flex align-items-center justify-content-between mt-3 flex-wrap">		
					<div className="mb-4">
						<h6 className="mb-2">Showing 12 of 124 Jobs Results</h6>
						<p className="mb-0">Based your preferences</p>
					</div>	
					<div className="d-flex align-items-center mb-4 comp-tabs">
						<div className='default-tab job-tabs'>
							<Nav as="ul" className="nav nav-tabs">
								<Nav.Item as="li">
									<Nav.Link eventKey="List" >
										<i className="fas fa-list"/>
									</Nav.Link>
								</Nav.Item>	
								<Nav.Item as="li" >
									<Nav.Link  eventKey="Boxed">
										<i className="fas fa-th-large"/>
									</Nav.Link>	
								</Nav.Item>	
							</Nav>
						</div>					
						<div>
							<Dropdown className="default-select">
								<Dropdown.Toggle as="div" className="btn btn-primary light  d-flex align-items-center i-false" >
									{selectblog}
									<i className="fas fa-caret-down text-primary  ms-2"/>
								</Dropdown.Toggle>
								<Dropdown.Menu className="dropdown-menu dropdown-menu-end mt-1">
									<Dropdown.Item className=" text-primary" onClick={() => setSelectblog("Newest")}>
										Newest
									</Dropdown.Item>
									<Dropdown.Item onClick={() => setSelectblog("Oldest")}>
										Oldest
									</Dropdown.Item>
								</Dropdown.Menu>
							</Dropdown>
						</div>
					</div>				
				</div>
				<Tab.Content>
					<Tab.Pane eventKey="List">
						<div className="row">
							<div className="col-xl-12">
								<div className="row">
									{CardBlog.map((item, index) => (
										<div className="col-xl-6" key={index}>
											<div className="card">
												<div className="card-body">
													<div className="d-flex justify-content-between align-items-center flex-wrap">
														<div className="d-flex">
															<div className='icon-img-bx lg me-3'>
																<svg xmlns="http://www.w3.org/2000/svg" width="97" height="97" viewBox="0 0 97 97">
																	<g transform="translate(-0.785)">
																	<rect width="97" height="97" rx="12" transform="translate(0.785)" fill="#c5c5c5"></rect>
																	<g transform="translate(0.348)">
																		<rect data-name="placeholder" width="97" height="97" rx="12" transform="translate(0.438)" fill={item.colorDesign}></rect>
																		<ellipse data-name="Ellipse 12" cx="24.359" cy="24.702" rx="24.359" ry="24.702" transform="translate(20.2 27.447)" fill="#fff"></ellipse>
																		<ellipse data-name="Ellipse 11" cx="14.853" cy="15.096" rx="14.853" ry="15.096" transform="translate(49.907 20.585)" fill="#ffe70c" 
																			style={{mixBlendMode: "multiply",isolation: "isolate"}}>
																		</ellipse>
																	</g>
																	</g>
																</svg>
															</div>
															<div>
																<h4 className="mb-0">{item.title}</h4>
																<p className="mb-2	">Desgin Team Agency</p>
																<p className="mb-0 fs-13"><i className="fas fa-map-marker-alt me-2 text-primary"></i>Manchester, England</p>
															</div>
														</div>
														<div className="job-available mt-sm-0 mt-3">
															<Link to={"#"} className="btn btn-outline-primary btn-sm btn-rounded">6 Jobs Available</Link>
														</div>
													</div>
												</div>
											</div>
										</div>
									))}
								</div>
							</div>
						</div>
					</Tab.Pane>
					<Tab.Pane eventKey="Boxed">					
						<div className="row">
							{CardBlog.map((item, index) => (
								<div className="col-xl-3  col-md-4 col-sm-6" key={index}>
									<div className="card jobs2">
										<div className="card-body">
											<div className="text-center">
												<div className="icon-img-bx" >
													<svg className="mb-2" xmlns="http://www.w3.org/2000/svg" width="71" height="71" viewBox="0 0 71 71">
													<g  transform="translate(-457 -443)">
														<rect  width="71" height="71" rx="12" transform="translate(457 443)" fill="#c5c5c5"></rect>
														<g  transform="translate(457 443)">
														<rect  data-name="placeholder" width="71" height="71" rx="12" fill={item.colorDesign}></rect>
														<circle  data-name="Ellipse 12" cx="18" cy="18" r="18" transform="translate(15 20)" fill="#fff"></circle>
														<circle  data-name="Ellipse 11" cx="11" cy="11" r="11" transform="translate(36 15)" fill="#ffe70c" 
															style={{mixBlendMode: "multiply",isolation: "isolate"}}></circle>
														</g>
													</g>
													</svg>
												</div>
												<h5 className="mb-1"><Link to={"#"}>{item.Postion}</Link></h5>
												<p className="text-primary mb-2 fs-13">{item.title}</p>
											</div>
											<div className="bottom-info pt-1">
												<p className="mb-0"><i className="fas fa-map-marker-alt me-2"></i>Manchester, England</p>
												<p className="mb-0 mt-0"><i className="fas fa-comments-dollar me-2"></i>$ 2,000 - $ 2,500</p>
											</div>
										</div>
									</div>
								</div>
							))}
						</div>
					</Tab.Pane>
				</Tab.Content>
			</Tab.Container>
			<div className="d-flex align-items-center justify-content-sm-between flex-wrap justify-content-center">
				<div className="sm-mb-0 mb-3">
					<p className='mb-0'>Showing 5 of 102 Data</p>
				</div>
				<nav>
					<ul className="pagination pagination-circle">
						<li className="page-item page-indicator">
							<Link to={"#"} className="page-link">
								<i className="la la-angle-left" />
							</Link>
						</li>
						<li className="page-item active"><Link to={"#"} className="page-link">1</Link>
						</li>
						<li className="page-item"><Link to={"#"} className="page-link">2</Link></li>
						<li className="page-item"><Link to={"#"} className="page-link">3</Link></li>
						<li className="page-item page-indicator">
							<Link to={"#"} className="page-link">
								<i className="la la-angle-right" />
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</>
	)
}
export default Companies;