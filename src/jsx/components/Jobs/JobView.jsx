import React from 'react';
import {Link} from 'react-router-dom';

const JobView = () => {
	
	return(
		<>
			<div className="d-flex align-items-center mb-4 flex-wrap">
				<h3 className="me-auto">Job View</h3>
				<div>
					<Link to={"#"} className="btn btn-primary me-3 btn-sm"><i className="fas fa-plus me-2"></i>Add New Job</Link>
					<Link to={"#"} className="btn btn-secondary btn-sm me-3"> <i className="fas fa-envelope"></i></Link>
					<Link to={"#"} className="btn btn-secondary btn-sm me-3"><i className="fas fa-phone-alt"></i></Link>
					<Link to={"#"} className="btn btn-secondary btn-sm"><i className="fas fa-info"></i></Link>
				</div>
			</div>
			<div className="row">
				<div className="col-xl-3 col-xxl-4">
					<div className="row">
						<div className="col-xl-12">
							<div className="card">
								<div className="card-header border-0 pb-0">
									<h4 className="fs-20 mb-0">Overview</h4>
								</div>
								<div className="card-body pt-4">
									<div className="mb-3 d-flex">
										<h5 className="mb-1 fs-14 custom-label">Job Title:</h5>
										<span>April 30,2024</span>	
									</div>
									<div className="mb-3 d-flex">
										<h5 className="mb-1 fs-14 custom-label">Experience:</h5>
										<span>2yrs Exp</span>	
									</div>
									<div className="mb-3 d-flex">
										<h5 className="mb-1 fs-14 custom-label">Vacancy:</h5>
										<span>10</span>	
									</div>
									<div className="mb-3 d-flex">
										<h5 className="mb-1 fs-14 custom-label">Job Type:</h5>
										<span>Full-Type</span>	
									</div>
									<div className="mb-3 d-flex">
										<h5 className="mb-1 fs-14 custom-label">Posted Date:</h5>
										<span>13-6-2024</span>	
									</div>
									<div className="mb-3 d-flex">
										<h5 className="mb-1 fs-14 custom-label">Last Apply Date:</h5>
										<span>12-8-2024</span>	
									</div>
									<div className="mb-3 d-flex">
										<h5 className="mb-1 fs-14 custom-label">Closed Date:</h5>
										<span>12-8-2024</span>	
									</div>
								</div>
								<div className="card-footer border-0 pt-0 ">
									<div className="d-flex justify-content-between flex-wrap">
										<Link to={"#"} className="btn btn-primary btn-sm mb-3"><i className="fas fa-check me-2 "></i>Apply Now</Link>
										<Link to={"#"} className="btn btn-outline-primary btn-sm mb-3"><i className="fas fa-phone-volume me-2"></i>Contact Now</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>	
				<div className="col-xl-9 col-xxl-8">
					<div className="row">
						<div className="col-xl-12">
							<div className="card">
								<div className="card-header d-block">
									<h4 className="card-title mb-2">PHP Developer</h4>
									<div className="d-block">
										<span className="me-2"><Link to={"#"}><i className="text-primary fas fa-briefcase me-2"></i>Apcd company</Link></span>
										<span className="me-2"><Link to={"#"}><i className="text-primary fas fa-map-marker-alt me-2"></i>USA</Link></span>
										<span><Link to={"#"}><i className="text-primary fas fa-eye me-2"></i>View</Link></span>
									</div>
								</div>
								<div className="card-body pb-0">
									<h4 className="card-title mb-3">Description</h4>
									<div className="ms-2">
										<p><i className="text-primary fas fa-dot-circle me-2"></i>We are Looking For a PHP Doveloper, who is must be familiar with the PHP fundamentals& PHP framwork. Experience with Laravel & mixs, Livewire </p>
										<p><i className="text-primary fas fa-dot-circle me-2 "></i>Good knowledge of SQL and related databases, with a preference for those with MySQL experience.</p>
										<p><i className="text-primary fas fa-dot-circle me-2 "></i>Excellent knowledge of the basic PHP 7 or web server exploits along with their solutions.</p>
										<p><i className="text-primary fas fa-dot-circle me-2 "></i>Experience building or maintaining a CMS.</p>
										<p><i className="text-primary fas fa-dot-circle me-2 "></i>Knowledge of MVC frameworks.</p>
										<p><i className="text-primary fas fa-dot-circle me-2 "></i>A detailed understanding of database design and administration.</p>
										<p><i className="text-primary fas fa-dot-circle me-2 "></i>The ability to integrate a variety of data sources and databases into a single system.</p>
									</div>
									<hr />
									<h4 className="card-title mb-3">Job Details</h4>
									<div className="row mb-3">
										<div className="col-xl-6">
											<ul className="list-style-1">
												<li><label className="form-label mb-0 custom-label">Job Role :</label><p className="mb-0"> PHP Developer</p></li>
												<li><label className="form-label mb-0 custom-label">Role:</label><p className="mb-0"> Front-End Doveloper</p></li>
												<li><label className="form-label mb-0 custom-label">Min Salary:</label><p className="mb-0"> $20,000</p></li>
												<li><label className="form-label mb-0 custom-label">Max Salary:</label><p className="mb-0"> $30,000</p></li>
												<li><label className="form-label mb-0 custom-label">Job Tags:</label><p className="mb-0"> PHP, Laravel, React, SCSS,CSS, Javascript</p></li>
											</ul>
										</div>
										<div className="col-xl-6">
											<ul className="list-style-1">
												<li><label className="form-label mb-0 custom-label">Job Experience:</label><p className="mb-0"> 2yrs+</p></li>
												<li><label className="form-label mb-0 custom-label">Launges:</label><p className="mb-0"> Hindi, English</p></li>
												<li><label className="form-label mb-0 custom-label">Locality:</label><p className="mb-0"> USA, UK, India</p></li>
												<li><label className="form-label mb-0 custom-label">Eligibility:</label><p className="mb-0"> B.tech ,Any Graduate</p></li>
												<li><label className="form-label mb-0 custom-label">Company :</label><p className="mb-0"> Abcd corporation pvt ltd</p></li>
											</ul>
										</div>
									</div>	
									<div className="d-flex justify-content-between py-4 border-bottom flex-wrap">
										<span>Job ID: #8976542</span>
										<span>Posted By <strong>Company</strong>/ 12-05-2024</span>
									</div>
								</div>
								<div className="card-footer border-0">
									<div>
										<Link to={"#"} className="btn btn-primary btn-sm me-2 mb-3"><i className="far fa-check-circle me-2"></i>Apply</Link>
										<Link to={"#"} className="btn btn-warning btn-sm me-2 mb-3"><i className="fas fa-share-alt me-2"></i>Share Job</Link>
										<Link to={"#"} className="btn btn-secondary btn-sm mb-3"><i className="fas fa-print me-2"></i>Print</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)	
}
export default JobView;