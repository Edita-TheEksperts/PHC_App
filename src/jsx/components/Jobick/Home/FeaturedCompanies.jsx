import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';

//Images 
import pic1 from './../../../../assets/images/comapny/1.png';
import pic2 from './../../../../assets/images/comapny/2.png';
import pic3 from './../../../../assets/images/comapny/3.png';
import pic4 from './../../../../assets/images/comapny/4.png';
import pic5 from './../../../../assets/images/comapny/5.png';
import pic6 from './../../../../assets/images/comapny/6.png';

const Companyblog = [
	{ color: "#2769ee", image: pic1, title: 'Kleon Team' },
	{ color: "#7630d2", image: pic2, title: 'Ziro Studios Inc.' },
	{ color: "#b848ef", image: pic3, title: 'Qerza' },
	{ color: "#7e1d74", image: pic4, title: 'Kripton Studios' },
	{ color: "#0411c2", image: pic5, title: 'Omah Ku Inc.' },
	{ color: "#378a82", image: pic6, title: 'Ventic' },
	{ color: "#175baa", image: pic4, title: 'Sakola' },
	{ color: "#eeb927", image: pic2, title: 'Uena Foods' },
];

const FeaturedCompanies = () => {
	const [data, setData] = useState(Companyblog);
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
				<div className="card-header border-0 pb-0">
					<h4 className="card-title mb-1">Featured Companies</h4>
					<Dropdown >
						<Dropdown.Toggle as="div" className="btn-link i-false">
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="#342E59" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
								<path d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z" stroke="#342E59" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
								<path d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z" stroke="#342E59" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
							</svg>
						</Dropdown.Toggle>
						<Dropdown.Menu className="dropdown-menu-right" align="end">
							<Dropdown.Item>Details</Dropdown.Item>
							<Dropdown.Item>Cancel</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>
				</div>
				<div className="card-body pt-3 featured-scroll loadmore-content dlab-scroll height370 ">
					<div className="row list-grid-area" id="FeaturedCompaniesContent">
						{data.map((item, index) => (
							<div className="col-xl-6 col-sm-6" key={index}>
								<div className="d-flex align-items-center list-item-bx">
									<div className='icon-img-bx'>
										<svg  width="71" height="71" viewBox="0 0 71 71">
											<g transform="translate(-457 -443)">
											<rect width="71" height="71" rx="12" transform="translate(457 443)" fill="#c5c5c5"></rect>
											<g transform="translate(457 443)">
												<rect data-name="placeholder" width="71" height="71" rx="12" fill={item.color}></rect>
												<circle data-name="Ellipse 12" cx="18" cy="18" r="18" transform="translate(15 20)" fill="#fff"></circle>
												<circle data-name="Ellipse 11" cx="11" cy="11" r="11" transform="translate(36 15)" fill="#ffe70c" 
													style={{mixBlendMode: "multiply",isolation: "isolate"}}
												>													
												</circle>
											</g>
											</g>
										</svg>
									</div>
									<div className="ms-3 featured">
										<h4 className="mb-1">{item.title}</h4>
										<span>Desgin Team Agency</span>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
				<div className="card-footer border-0 m-auto">
					<Link to={"#"} className="btn btn-outline-primary  m-auto dlab-load-more" onClick={() => onClick()}>
						View more{" "}
						{refresh && <i className="fa fa-refresh"></i>}
					</Link>
				</div>
			</div>
		</>
	)
}
export default FeaturedCompanies; 