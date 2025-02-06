import React from 'react';
import {Link} from 'react-router-dom';
import JobApplicationBlog from '../Jobick/Jobs/JobApplicationBlog';


const JobApplication = () => {
		return(
		<>
			<div className="d-flex align-items-center mb-4 flex-wrap">
				<h3 className="me-auto">Job Application</h3>
				<div>
					<Link to={"/job-list"} className="btn btn-primary me-3 "><i className="fas fa-plus me-2"></i>Add New Job</Link>
					<Link to={"#"} className="icon-btn  me-3"> <i className="fas fa-envelope"></i></Link>
					<Link to={"#"} className="icon-btn  me-3"><i className="fas fa-phone-alt"></i></Link>
					<Link to={"#"} className="icon-btn " ><i className="fas fa-info"></i></Link>
				</div>
			</div>
			<div className="row">
				<div className="col-xl-12">
					<JobApplicationBlog />
				</div>
			</div>		
				
		</>
	)	
}
export default JobApplication;