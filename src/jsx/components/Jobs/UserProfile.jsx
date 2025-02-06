import React from 'react';
import { Link } from 'react-router-dom';

import user from './../../../assets/images/user.jpg';

const UserProfile = () => {
	return (
		<>
			<div className="d-flex align-items-center mb-4">
				<h3 className="mb-0 me-auto">User Profile</h3>
				<div>
					<Link to={"#"} className="icon-btn me-3" > <i className="fas fa-envelope"/></Link>
					<Link to={"#"} className="icon-btn me-3" ><i className="fas fa-phone-alt"/></Link>
					<Link to={"#"} className="icon-btn" ><i className="fas fa-info"/></Link>
				</div>
			</div>
			<div className="row">
				<div className="col-xl-12">
					<div className="card">
						<div className="card-header border-0 flex-wrap align-items-start">
							<div className="col-md-8">
								<div className="user d-sm-flex d-block pe-md-5 pe-0">
									<img src={user} alt="" />
									<div className="ms-sm-3 ms-0 me-md-5 md-0">
										<h5 className="mb-1 font-w600"><Link to={"#"}>Andrew Jonson</Link></h5>
										<div className="listline-wrapper mb-2">
											<span className="item"><i className="text-primary far fa-envelope"/>example@example.com</span>
											<span className="item"><i className="text-primary far fa-id-badge"/>Manager</span>
											<span className="item"><i className="text-primary fas fa-map-marker-alt"/>Indonesia</span>
										</div>
										<p>A data analyst collects, interprets and visualizes data to uncover insights. A data analyst assigns a numerical value to business functions so performance.</p>
									</div>
								</div>
							</div>
							<div className="col-md-4 col-12 text-end">
								<Link to={"#"} className="btn btn-sm btn-primary me-2">Ask</Link>
								<Link to={"#"} className="btn btn-sm btn-info">Hire</Link>
								<div className="mt-3">
									<h6 className="text-start">Progress
										<span className="float-end">85%</span>
									</h6>
									<div className="progress ">
										<div className="progress-bar bg-danger progress-animated" style={{ width: "85%", height: "6px" }} role="progressbar">
											<span className="sr-only">60% Complete</span>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="card-body pt-0">
							<h4 className="card-title">Description</h4>
							<div className="row">
								<div className="col-xl-6 col-md-6">
									<ul className="list-style-1">
										<li><label className="custom-label-2 mb-0">Full Name :</label>Andrew Jonson</li>
										<li><label className="custom-label-2 mb-0">Resume Title :</label>Searching For PHP Doveloper</li>
										<li><label className="custom-label-2 mb-0">Current Designation :</label>PHP Programmer</li>
										<li><label className="custom-label-2 mb-0">Annual Salary :</label>$7.5Lacs</li>
										<li><label className="custom-label-2 mb-0">Current Company :</label>Abcd pvt Ltd</li>
										<li><label className="custom-label-2 mb-0">Experience :</label>3 Yrs</li>
										<li><label className="custom-label-2 mb-0">Location :</label>USA</li>
										<li><label className="custom-label-2 mb-0">Preferred Location :</label>AUSA</li>
										<li><label className="custom-label-2 mb-0">Qualification :</label>B.Tech(CSE)</li>
										<li><label className="custom-label-2 mb-0">Key Skills :</label>Good Communication, Planning and research skills</li>
									</ul>
								</div>
								<div className="col-xl-6 col-md-6">
									<ul className="list-style-1">
										<li><label className="custom-label-2 mb-0">Launguages :</label>English, German, Spanish</li>
										<li><label className="custom-label-2 mb-0">Email :</label>andrew@gmail.com</li>
										<li><label className="custom-label-2 mb-0">Phone :</label>1234598765</li>
										<li><label className="custom-label-2 mb-0">Industry :</label>it Software/ Developer</li>
										<li><label className="custom-label-2 mb-0">Date Of Birth :</label>13 June 1996</li>
										<li><label className="custom-label-2 mb-0">Gender :</label>Female</li>
										<li><label className="custom-label-2 mb-0">Marital Status :</label>Unmarried</li>
										<li><label className="custom-label-2 mb-0">Permanent Address :</label>USA</li>
										<li><label className="custom-label-2 mb-0">Zip code :</label>12345</li>
									</ul>
								</div>
							</div>
						</div>
						<div className="card-footer d-flex flex-wrap justify-content-between align-items-center">
							<div className="mb-md-2 mb-3 exp-del">
								<span className="d-block mb-1"><i className="fas fa-circle me-2 op4" />Currently Working at  <strong>Abcd Pvt Ltd</strong></span>
								<span><i className="fas fa-circle me-2 op4" />3 Yrs Of Working Experience in   <strong>Abcd Pvt Ltd</strong></span>
							</div>
							<div>
								<Link to={"#"} className="btn btn-primary btn-sm me-2 mb-1"><i className="fas fa-download me-2"/>Download Resume</Link>
								<Link to={"#"} className="btn btn-warning btn-sm me-2 mb-1"><i className="fas fa-share-alt me-2"/>Share Profile</Link>
								<Link to={"#"} className="btn btn-info btn-sm me-2 mb-1"><i className="fas fa-phone-alt me-2"/>Contact</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
export default UserProfile;