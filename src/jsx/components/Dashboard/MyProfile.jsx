import React from 'react';
import { Link } from 'react-router-dom';
import loadable from "@loadable/component";
import pMinDelay from "p-min-delay";

//Image 
import profile from './../../../assets/images/profile/FisnikSalihu.jpg';
import pic1 from './../../../assets/images/profile/FisnikSalihu.jpg';

const ApexPieChart = loadable(() =>
	pMinDelay(import("../Jobick/Home/ApexPieChart"), 1000)
);


const MyProfile = () => {
	return (
		<>
			<div className="row">
				<div className="col-xl-12">
					<div className="profile-back">
						<img src={profile} alt="" />
						<div className="social-btn">
							<Link to={"#"} className="btn btn-light social">245 Following</Link>
							<Link to={"#"} className="btn btn-light social">872 Followers</Link>
							<Link to={"#"} className="btn btn-primary">Update Profile</Link>
						</div>
					</div>
					<div className="profile-pic d-flex">
						<img src={pic1} alt="" />
						<div className="profile-info2">
							<h2 className="mb-0">PHC Admin</h2>
							<h4>Admin</h4>
							<span className="d-block"><i className="fas fa-map-marker-alt me-2"/>PHC Admin Profile</span>
						</div>
					</div>
				</div>
				<div className="col-xl-3 col-xxl-4 col-lg-6 mt-5">
					<div className="row">
						<div className="col-xl-12">
							<div className="card">
								<div className="card-header border-0">
									<h4 className="card-title">Skills</h4>
								</div>
								<div className="card-body pt-0">
									<div id="pieChart2" className="mb-4 pb-3">
										<ApexPieChart />
									</div>
									<div className="progress default-progress">
										<div className="progress-bar bg-green progress-animated" style={{ width: "90%", height: "8px" }} role="progressbar">
											<span className="sr-only">90% Complete</span>
										</div>
									</div>
									<div className="d-flex align-items-end mt-2 pb-4 justify-content-between">
										<span className="font-w500">Figma</span>
										<h6 className='mb-0'>90%</h6>
									</div>
									<div className="progress default-progress">
										<div className="progress-bar bg-info progress-animated" style={{ width: "68%", height: "8px" }} role="progressbar">
											<span className="sr-only">45% Complete</span>
										</div>
									</div>
									<div className="d-flex align-items-end mt-2 pb-4 justify-content-between">
										<span className="font-w500">Adobe XD</span>
										<h6 className='mb-0'>68%</h6>
									</div>
									<div className="progress default-progress">
										<div className="progress-bar bg-blue progress-animated" style={{ width: "85%", height: "8px" }} role="progressbar">
											<span className="sr-only">85% Complete</span>
										</div>
									</div>
									<div className="d-flex align-items-end mt-2  justify-content-between">
										<span className="font-w500">Photoshop</span>
										<h6 className='mb-0'>85%</h6>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-xl-9 col-xxl-8 col-lg-6 mt-lg-5 mt-0">
					<div className="row">
						<div className="col-xl-8 col-xxl-7">
							<div className="card">
								<div className="card-header border-0 pb-0">
									<h4 className="card-title mb-0">About Me</h4>
								</div>
								<div className="card-body pt-2 pb-2">
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
									<h4 className="card-title  mt-4 mb-3">Contact</h4>
									<div className="d-flex flex-wrap">
										<div className="d-flex contacts-social align-items-center mb-3  me-sm-5 me-0">
											<span className="me-2">
												<i className="fas fa-phone-alt"/>
											</span>
											<div>
												<p className='mb-0'>Phone</p>
												<h5 className="mb-0">1234598765</h5>
											</div>
										</div>
										<div className="d-flex contacts-social align-items-center mb-3">
											<span className="me-2">
												<i className="fas fa-envelope-open"/>
											</span>
											<div>
												<p className='mb-0'>Email</p>
												<h5 className="mb-0">demo@example.com</h5>
											</div>
										</div>
									</div>
								</div>

							</div>
						</div>
						<div className="col-xl-4 col-xxl-5">
							<div className="card">
								<div className="card-header border-0">
									<h4 className="card-title">Socials</h4>
								</div>
								<div className="card-body pt-0 pb-2">
									<div>
										<Link to={"#"} className="btn text-start d-block mb-3 bg-facebook light">
											<i className="fab fa-facebook-f scale5 me-4 text-facebook" />{" "}/franklin.jr123
										</Link>
										<Link to={"#"} className="btn text-start d-block mb-3 bg-linkedin light">
											<i className="fab fa-linkedin-in scale5 me-4 text-linkedin" />{" "}/franklin.jr123
										</Link>
										<Link to={"#"} className="btn text-start d-block mb-3 bg-dribble light">
											<i className="fab fa-dribbble scale5 me-4 text-dribble" />{" "}/franklin.jr123
										</Link>
										<Link to={"#"} className="btn text-start d-block mb-3 bg-youtube light">
											<i className="fab fa-youtube scale5 me-4 text-youtube" />{" "}/franklin.jr123
										</Link>
									</div>
								</div>
							</div>
						</div>
						<div className="col-xl-12">
							<div className="card bg-dark">
								<div className="card-body d-flex align-items-center">
									<div className='me-3'>
										<h4 className="card-title text-white">Upload Your Curriculum Vitae</h4>
										<p className="text-white mb-0 op6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut</p>
									</div>
									<div className="upload">
										<Link to={"#"}><i className="fas fa-arrow-up"/></Link>
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
export default MyProfile;
