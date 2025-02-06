import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';


const recentBlog = [
	{ designcolor: "#2769ee", title: "Bubles Studios have 5 available positions for you", color: "#f93a0b" },
	{ designcolor: "#eeac27", title: "Elextra Studios has invited you to interview meeting tomorrow", color: "#d9d9d9" },
	{ designcolor: "#b848ef", title: "Highspeed Design Team have 2 available positions for you", color: "#d9d9d9" },
	{ designcolor: "#7e1d74", title: "Kleon Studios have 5 available positions for you", color: "#d9d9d9" },
	{ designcolor: "#22bc32", title: "Highspeed Design Team have 2 available positions for you", color: "#d9d9d9" },
];

const RecentActivity = () => {
	//Select button
	const [control3, setControl3] = useState('Oldest');
	//Load More button
	const [data, setData] = useState(recentBlog);
	const [refresh, setRefresh] = useState(false);
	const onClick = () => {
		setRefresh(true);
		setTimeout(() => {
			setData([
				...data,
				data[Math.floor(Math.random() * Math.floor(data.length - 1))],
			]);
			setRefresh(false);
		}, 1000);
	};
	return (
		<>
			<div className="card">
				<div className="card-header border-0">
					<h4 className="fs-20 mb-1">Recent Activity</h4>
					<div className="d-flex">
						<Dropdown className="default-select bgl-primary rounded" >
							<Dropdown.Toggle as="div" className="btn btn-sm  text-primary d-flex align-items-center i-false" >
								{control3}
								<i className="fa-solid fa-caret-down text-primary ms-1"></i>
							</Dropdown.Toggle>
							<Dropdown.Menu className=" dropdown-menu-end mt-1">
								<Dropdown.Item className=" text-primary" onClick={() => setControl3("Newest")}>
									Newest
								</Dropdown.Item>
								<Dropdown.Item className=" text-primary" onClick={() => setControl3("Oldest")}>
									Oldest
								</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>
						<Dropdown className="custom-dropdown mb-0">
							<Dropdown.Toggle as="button" className="btn sharp tp-btn dark-btn i-false">
								<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="var(--text)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
									<path d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z" stroke="var(--text)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
									<path d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z" stroke="var(--text)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
								</svg>
							</Dropdown.Toggle>
							<Dropdown.Menu className="dropdown-menu-right">
								<Dropdown.Item>Details</Dropdown.Item>
								<Dropdown.Item className="text-danger">Cancel</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>
					</div>
				</div>
				<div className="card-body loadmore-content pb-0 pt-3 list-grid-area dlab-scroll height350 recent-activity-wrapper" id="RecentActivityContent">
					{data.map((item, index) => (						
						<div className="d-flex recent-activity" key={index}>
							<span className="me-3 activity">
								<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17">
									<circle cx="8.5" cy="8.5" r="8.5" fill={item.color} />
								</svg>
							</span>
							<div className="d-flex align-items-center list-item-bx">
								<div className='icon-img-bx'>
									<svg xmlns="http://www.w3.org/2000/svg" width="71" height="71" viewBox="0 0 71 71">
										<g transform="translate(-457 -443)">
											<rect width="71" height="71" rx="12" transform="translate(457 443)" fill="#c5c5c5"></rect>
											<g transform="translate(457 443)">
											<rect data-name="placeholder" width="71" height="71" rx="12" fill={item.designcolor}></rect>
											<circle data-name="Ellipse 12" cx="18" cy="18" r="18" transform="translate(15 20)" fill="#fff"></circle>
											<circle data-name="Ellipse 11" cx="11" cy="11" r="11" transform="translate(36 15)" fill="#ffe70c" 
												style={{mixBlendMode: "multiply",isolation: "isolate"}}>
											</circle>
											</g>
										</g>
									</svg>
								</div>
								<div className="ms-3">
									<h6 className="mb-1">{item.title}</h6>										
									<p className='mb-0'>8 min ago</p>
								</div>
							</div>
						</div>						
					))}
				</div>
				<div className="card-footer border-0 m-auto pt-0">
					<Link to={"#"} className="btn btn-outline-primary m-auto dlab-load-more" onClick={() => onClick()}>
						View more{" "}
						{refresh && <i className="fa fa-refresh"></i>}
					</Link>
				</div>
			</div>

		</>
	)
}
export default RecentActivity;