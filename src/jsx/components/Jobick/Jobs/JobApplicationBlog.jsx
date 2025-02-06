import React,{useEffect, useState, useRef} from 'react';
import {Link} from 'react-router-dom';

const JobApplicationBlog = () => {
	const [data, setData] = useState(
		document.querySelectorAll('#application-data tbody tr')
	)
	const sort = 10
	const activePag = useRef(0)
	const [test, settest] = useState(0)

	  // Active data
	const chageData = (frist, sec) => {
		for (var i = 0; i < data.length; ++i) {
			if (i >= frist && i < sec) {
				data[i].classList.remove('d-none')
			} else {
				data[i].classList.add('d-none')
			}
		}
	}
	// use effect
	useEffect(() => {
		setData(document.querySelectorAll('#application-data tbody tr'))
		//chackboxFun()
	}, [test])
	// Active pagginarion
		activePag.current === 0 && chageData(0, sort)
	// paggination
		let paggination = Array(Math.ceil(data.length / sort))
			.fill()
			.map((_, i) => i + 1)
	 // Active paggination & chage data
	const onClick = (i) => {
		activePag.current = i
		chageData(activePag.current * sort, (activePag.current + 1) * sort)
		settest(i)
	}
	const chackbox = document.querySelectorAll('.application_sorting_1 input')
	const motherChackBox = document.querySelector('.sorting_asc input')
	const chackboxFun = (type) => {
		for (let i = 0; i < chackbox.length; i++) {
		const element = chackbox[i]
			if (type === 'all') {
				if (motherChackBox.checked) {
					element.checked = true
				} else {
					element.checked = false
				}
			} else {
				if (!element.checked) {
					motherChackBox.checked = false
					break
				} else {
					motherChackBox.checked = true
				}
			}
		}
	}
	return(
		<>
			<div className="table-responsive dataTables_wrapper" id="application-data">
				<table className="table display mb-4 dataTablesCard job-table table-responsive-xl card-table dataTable no-footer" id="example5">
					<thead>
						<tr role='row'>							
							<th className="sorting_asc">No</th>
							<th className="sorting_asc">Position</th>
							<th className="sorting_asc">Name</th>
							<th className="sorting_asc">Email</th>
							<th className="sorting_asc">Phone Number</th>
							<th className="sorting_asc">Applied On</th>
							<th className="sorting_asc">Submitted By</th>
							<th className="sorting_asc">Status</th>
							<th className="sorting_asc text-center">Actions</th>
						</tr>
					</thead>
					<tbody>
						<tr role='row' className='odd'>
							
							<td>1.</td>
							<td className="wspace-no">Database analyst</td>
							<td>Jordan</td>
							<td>Jordan@gmail.com</td>
							<td>1234598765</td>
							<td>24-01-2021</td>
							<td>Nicholas</td>
							<td><span className="badge badge-warning light">Pending</span></td>
							<td className="action-btn wspace-no">
								<span>
									<Link to={"#"}><i className="fas fa-check text-success"></i></Link>
								</span>
								<span>
									<Link to={"#"}><i className="fas fa-times text-danger"></i></Link>
								</span>
								<span>
									<Link to={"#"}><i className="fas fa-eye"></i></Link>
								</span>	
								<span>
									<Link to={"#"}><i className="far fa-trash-alt text-danger"></i></Link>
								</span>
								<span>
									<Link to={"#"}><i className="fas fa-download text-warning"></i></Link>
								</span>
							</td>
						</tr>
						<tr role='row' className='even'>
							
							<td>2.</td>
							<td className="wspace-no">Network architect</td>
							<td>Asher</td>
							<td>Jordan@gmail.com</td>
							<td>1234598765</td>
							<td>24-01-2021</td>
							<td>Dominic</td>
							<td><span className="badge badge-warning light">Pending</span></td>
							<td className="action-btn wspace-no">
								<span>
									<Link to={"#"}><i className="fas fa-check text-success"></i></Link>
								</span>
								<span>
									<Link to={"#"}><i className="fas fa-times text-danger"></i></Link>
								</span>
								<span>
									<Link to={"#"}><i className="fas fa-eye"></i></Link>
								</span>	
								<span>
									<Link to={"#"}><i className="far fa-trash-alt text-danger"></i></Link>
								</span>
								<span>
									<Link to={"#"}><i className="fas fa-download text-warning"></i></Link>
								</span>
							</td>
						</tr>
						<tr role='row' className='odd'>
							
							<td>3.</td>
							<td className="wspace-no">Network architect</td>
							<td>Carter</td>
							<td>Jordan@gmail.com</td>
							<td>1234598765</td>
							<td>24-01-2021</td>
							<td>Austin</td>
							<td><span className="badge badge-warning light">Pending</span></td>
							<td className="action-btn wspace-no">
								<span>
									<Link to={"#"}><i className="fas fa-check text-success"></i></Link>
								</span>
								<span>
									<Link to={"#"}><i className="fas fa-times text-danger"></i></Link>
								</span>
								<span>
									<Link to={"#"}><i className="fas fa-eye"></i></Link>
								</span>	
								<span>
									<Link to={"#"}><i className="far fa-trash-alt text-danger"></i></Link>
								</span>
								<span>
									<Link to={"#"}><i className="fas fa-download text-warning"></i></Link>
								</span>
							</td>
						</tr>
						<tr role='row' className='even'>
							
							<td>4.</td>
							<td className="wspace-no">Systems analyst</td>
							<td>Grayson</td>
							<td>Jordan@gmail.com</td>
							<td>1234598765</td>
							<td>24-01-2021</td>
							<td>Everett</td>
							<td><span className="badge badge-danger light">Rejected</span></td>
							<td className="action-btn wspace-no">
								<span>
									<Link to={"#"}><i className="fas fa-check text-success"></i></Link>
								</span>
								<span>
									<Link to={"#"}><i className="fas fa-times text-danger"></i></Link>
								</span>
								<span>
									<Link to={"#"}><i className="fas fa-eye"></i></Link>
								</span>	
								<span>
									<Link to={"#"}><i className="far fa-trash-alt text-danger"></i></Link>
								</span>
								<span>
									<Link to={"#"}><i className="fas fa-download text-warning"></i></Link>
								</span>
							</td>
						</tr>
						<tr role='row' className='odd'>
							
							<td>5.</td>
							<td className="wspace-no">Network engineer</td>
							<td>Thomas</td>
							<td>Jordan@gmail.com</td>
							<td>1234598765</td>
							<td>24-01-2021</td>
							<td>Brooks</td>
							<td><span className="badge badge-warning light">Pending</span></td>
							<td className="action-btn wspace-no">
								<span>
									<Link to={"#"}><i className="fas fa-check text-success"></i></Link>
								</span>
								<span>
									<Link to={"#"}><i className="fas fa-times text-danger"></i></Link>
								</span>
								<span>
									<Link to={"#"}><i className="fas fa-eye"></i></Link>
								</span>	
								<span>
									<Link to={"#"}><i className="far fa-trash-alt text-danger"></i></Link>
								</span>
								<span>
									<Link to={"#"}><i className="fas fa-download text-warning"></i></Link>
								</span>
							</td>
						</tr>
						<tr role='row' className='even'>
							
							<td>6.</td>
							<td className="wspace-no">Service desk analyst</td>
							<td>Miles</td>
							<td>Jordan@gmail.com</td>
							<td>1234598765</td>
							<td>24-01-2021</td>
							<td>Wesley</td>
							<td><span className="badge badge-primary light">Selected</span></td>
							<td className="action-btn wspace-no">
								<span>
									<Link to={"#"}><i className="fas fa-check text-success"></i></Link>
								</span>
								<span>
									<Link to={"#"}><i className="fas fa-times text-danger"></i></Link>
								</span>
								<span>
									<Link to={"#"}><i className="fas fa-eye"></i></Link>
								</span>	
								<span>
									<Link to={"#"}><i className="far fa-trash-alt text-danger"></i></Link>
								</span>
								<span>
									<Link to={"#"}><i className="fas fa-download text-warning"></i></Link>
								</span>
							</td>
						</tr>
						<tr role='row' className='odd'>							
							<td>7.</td>
							<td>Network Engineer</td>
							<td>Adrian</td>
							<td>Jordan@gmail.com</td>
							<td>1234598765</td>
							<td>24-01-2021</td>
							<td>Kayden</td>
							<td><span className="badge badge-success light">Success</span></td>
							<td className="action-btn wspace-no">
								<span>
									<Link to={"#"}><i className="fas fa-check text-success"></i></Link>
								</span>
								<span>
									<Link to={"#"}><i className="fas fa-times text-danger"></i></Link>
								</span>
								<span>
									<Link to={"#"}><i className="fas fa-eye"></i></Link>
								</span>	
								<span>
									<Link to={"#"}><i className="far fa-trash-alt text-danger"></i></Link>
								</span>
								<span>
									<Link to={"#"}><i className="fas fa-download text-warning"></i></Link>
								</span>
							</td>
						</tr>
						<tr role='row' className='odd'>							
							<td>8.</td>
							<td className="wspace-no">Database analyst</td>
							<td>Jordan</td>
							<td>Jordan@gmail.com</td>
							<td>1234598765</td>
							<td>24-01-2021</td>
							<td>Nicholas</td>
							<td><span className="badge badge-warning light">Pending</span></td>
							<td className="action-btn wspace-no">
								<span>
									<Link to={"#"}><i className="fas fa-check text-success"></i></Link>
								</span>
								<span>
									<Link to={"#"}><i className="fas fa-times text-danger"></i></Link>
								</span>
								<span>
									<Link to={"#"}><i className="fas fa-eye"></i></Link>
								</span>	
								<span>
									<Link to={"#"}><i className="far fa-trash-alt text-danger"></i></Link>
								</span>
								<span>
									<Link to={"#"}><i className="fas fa-download text-warning"></i></Link>
								</span>
							</td>
						</tr>
						<tr role='row' className='even'>							
							<td>9.</td>
							<td className="wspace-no">Network architect</td>
							<td>Asher</td>
							<td>Jordan@gmail.com</td>
							<td>1234598765</td>
							<td>24-01-2021</td>
							<td>Dominic</td>
							<td><span className="badge badge-primary light">Selected</span></td>
							<td className="action-btn wspace-no">
								<span>
									<Link to={"#"}><i className="fas fa-check text-success"></i></Link>
								</span>
								<span>
									<Link to={"#"}><i className="fas fa-times text-danger"></i></Link>
								</span>
								<span>
									<Link to={"#"}><i className="fas fa-eye"></i></Link>
								</span>	
								<span>
									<Link to={"#"}><i className="far fa-trash-alt text-danger"></i></Link>
								</span>
								<span>
									<Link to={"#"}><i className="fas fa-download text-warning"></i></Link>
								</span>
							</td>
						</tr>
						<tr role='row' className='odd'>							
							<td>10.</td>
							<td className="wspace-no">Network architect</td>
							<td>Carter</td>
							<td>Jordan@gmail.com</td>
							<td>1234598765</td>
							<td>24-01-2021</td>
							<td>Austin</td>
							<td><span className="badge badge-success light">Success</span></td>
							<td className="action-btn wspace-no">
								<span>
									<Link to={"#"}><i className="fas fa-check text-success"></i></Link>
								</span>
								<span>
									<Link to={"#"}><i className="fas fa-times text-danger"></i></Link>
								</span>
								<span>
									<Link to={"#"}><i className="fas fa-eye"></i></Link>
								</span>	
								<span>
									<Link to={"#"}><i className="far fa-trash-alt text-danger"></i></Link>
								</span>
								<span>
									<Link to={"#"}><i className="fas fa-download text-warning"></i></Link>
								</span>
							</td>
						</tr>
						<tr>
							<td>11.</td>
							<td className="wspace-no">Network architect</td>
							<td>Carter</td>
							<td>Jordan@gmail.com</td>
							<td>1234598765</td>
							<td>24-01-2021</td>
							<td>Austin</td>
							<td><span className="badge badge-warning light">Pending</span></td>
							<td className="action-btn wspace-no">
								<span>
									<Link to={"#"}><i className="fas fa-check text-success"></i></Link>
								</span>
								<span>
									<Link to={"#"}><i className="fas fa-times text-danger"></i></Link>
								</span>
								<span>
									<Link to={"#"}><i className="fas fa-eye"></i></Link>
								</span>	
								<span>
									<Link to={"#"}><i className="far fa-trash-alt text-danger"></i></Link>
								</span>
								<span>
									<Link to={"#"}><i className="fas fa-download text-warning"></i></Link>
								</span>
							</td>
						</tr>
						<tr role='row' className='even'>
							
							<td>12.</td>
							<td className="wspace-no">Systems analyst</td>
							<td>Grayson</td>
							<td>Jordan@gmail.com</td>
							<td>1234598765</td>
							<td>24-01-2021</td>
							<td>Everett</td>
							<td><span className="badge badge-danger light">Rejected</span></td>
							<td className="action-btn wspace-no">
								<span>
									<Link to={"#"}><i className="fas fa-check text-success"></i></Link>
								</span>
								<span>
									<Link to={"#"}><i className="fas fa-times text-danger"></i></Link>
								</span>
								<span>
									<Link to={"#"}><i className="fas fa-eye"></i></Link>
								</span>	
								<span>
									<Link to={"#"}><i className="far fa-trash-alt text-danger"></i></Link>
								</span>
								<span>
									<Link to={"#"}><i className="fas fa-download text-warning"></i></Link>
								</span>
							</td>
						</tr>
						<tr role='row' className='odd'>
							
							<td>13.</td>
							<td className="wspace-no">Network engineer</td>
							<td>Thomas</td>
							<td>Jordan@gmail.com</td>
							<td>1234598765</td>
							<td>24-01-2021</td>
							<td>Brooks</td>
							<td><span className="badge badge-warning light">Pending</span></td>
							<td className="action-btn wspace-no">
								<span>
									<Link to={"#"}><i className="fas fa-check text-success"></i></Link>
								</span>
								<span>
									<Link to={"#"}><i className="fas fa-times text-danger"></i></Link>
								</span>
								<span>
									<Link to={"#"}><i className="fas fa-eye"></i></Link>
								</span>	
								<span>
									<Link to={"#"}><i className="far fa-trash-alt text-danger"></i></Link>
								</span>
								<span>
									<Link to={"#"}><i className="fas fa-download text-warning"></i></Link>
								</span>
							</td>
						</tr>
					</tbody>	
				</table>	
				<div className='d-sm-flex text-center justify-content-between align-items-center'>
					<div className='dataTables_info pt-0' id='example5_info'>
						  Showing {activePag.current * sort + 1} to{' '}
						  {data.length > (activePag.current + 1) * sort
							? (activePag.current + 1) * sort
							: data.length}{' '}
						  of {data.length} entries
					</div>
					<div className='dataTables_paginate paging_simple_numbers mb-0' id='example5_paginate'>
						<Link to='/job-application' className='paginate_button previous disabled' onClick={() => activePag.current > 0 && onClick(activePag.current - 1)}>
							<i className='fa fa-angle-double-left' />
						</Link>
						<span>
							{paggination.map((number, i) => (
								<Link key={i} to='/job-application' className={`paginate_button  ${ activePag.current === i ? 'current' : '' } `} onClick={() => onClick(i)}>
									{number}
								</Link>
							))}
						</span>
						<Link to='/job-application' className='paginate_button next' onClick={() => activePag.current + 1 < paggination.length && onClick(activePag.current + 1)}>
							<i className='fa fa-angle-double-right' />
						</Link>
					</div>
				</div>
			</div>	
		</>
	)	
}
export default JobApplicationBlog;