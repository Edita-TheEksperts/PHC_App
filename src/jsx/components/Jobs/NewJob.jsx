import React from 'react';
import {Link} from 'react-router-dom';


const NewJob = () => {
		return(
		<>
			<div className="d-flex align-items-center mb-4">
				<h3 className="mb-0 me-auto">New Job</h3>
				<div>
					<Link to={"#"} className="btn btn-secondary btn-sm me-3"> <i className="fas fa-envelope"></i></Link>
					<Link to={"#"} className="btn btn-secondary btn-sm me-3"><i className="fas fa-phone-alt"></i></Link>
					<Link to={"#"} className="btn btn-primary btn-sm"><i className="fas fa-info"></i></Link>
				</div>
			</div>		
			<div className="row">
				<div className="col-xl-12">
					<div className="card">
						<div className="card-body">
							<div className="row">
								<div className="col-xl-6  col-md-6 mb-4">
								  <label  className="form-label font-w600">Company Name<span className="text-danger scale3 ms-2">*</span></label>
									<input type="text" className="form-control" placeholder="Name" />
								</div>
								<div className="col-xl-6  col-md-6 mb-4">
								  <label  className="form-label font-w600">Position<span className="text-danger scale3 ms-2">*</span></label>
									<input type="text" className="form-control" placeholder="Name" />
								</div>
								<div className="col-xl-6  col-md-6 mb-4">
									<label  className="form-label font-w600">Job Category<span className="text-danger scale3 ms-2">*</span></label>
									<select  className="form-select form-control">
										<option defaultValue>Choose...</option>
										<option>QA Analyst</option>
										<option>IT Manager</option>
										<option>Systems Analyst</option>
									</select>
								</div>
								<div className="col-xl-6  col-md-6 mb-4">
									<label  className="form-label font-w600">Job Type<span className="text-danger scale3 ms-2">*</span></label>
									<select  className="form-select form-control">
										<option defaultValue>Choose...</option>
										<option>Part-Time</option>
										<option>Full-Time</option>
										<option>Freelancer</option>
									</select>
								</div>
								<div className="col-xl-6  col-md-6 mb-4">
								  	<label  className="form-label font-w600">No. of Vancancy<span className="text-danger scale3 ms-2">*</span></label>
									<input type="number" className="form-control" placeholder="10" />
								</div>
								<div className="col-xl-6  col-md-6 mb-4">
									<label  className="form-label font-w600">Select Experience<span className="text-danger scale3 ms-2">*</span></label>
									<select  className="form-select form-control">
									  <option defaultValue>1 yr</option>
									  <option>2 Yr</option>
									   <option>3 Yr</option>
										<option>4 Yr</option>
									</select>
								</div>
								<div className="col-xl-6  col-md-6 mb-4">
									<label  className="form-label font-w600">Posted Date<span className="text-danger scale3 ms-2">*</span></label>
									<div className="input-group">										 
										<input type="date" defaultValue="2024-06-15" className="form-control form_datetime " />
									</div>
								</div>
								<div className="col-xl-6  col-md-6 mb-4">
									<label  className="form-label font-w600">Last Date To Apply<span className="text-danger scale3 ms-2">*</span></label>
									<div className="input-group">										 
										<input type="date" defaultValue="2024-06-15" className="form-control form_datetime " />
									</div>
								</div>
								<div className="col-xl-6  col-md-6 mb-4">
									<label  className="form-label font-w600">Close Date<span className="text-danger scale3 ms-2">*</span></label>
									<div className="input-group">										 
										<input type="date" defaultValue="2024-06-15" className="form-control form_datetime " />
									</div>
								</div>
								<div className="col-xl-6  col-md-6 mb-4">
									<label  className="form-label font-w600">Select Gender:<span className="text-danger scale3 ms-2">*</span></label>
									<select  className="form-select form-control">
									  <option defaultValue>Choose...</option>
									  <option>Male</option>
									   <option>Female</option>
									</select>
								</div>
								<div className="col-xl-6  col-md-6 mb-4">
								  <label  className="form-label font-w600">Salary Form<span className="text-danger scale3 ms-2">*</span></label>
									<input type="text" className="form-control" placeholder="$" />
								</div>
								<div className="col-xl-6  col-md-6 mb-4">
								  <label  className="form-label font-w600">Salary To<span className="text-danger scale3 ms-2">*</span></label>
									<input type="text" className="form-control" placeholder="$" />
								</div>
								<div className="col-xl-6  col-md-6 mb-4">
								  <label  className="form-label font-w600">Enter City:<span className="text-danger scale3 ms-2">*</span></label>
									<input type="text" className="form-control" placeholder="$" />
								</div>
								<div className="col-xl-6  col-md-6 mb-4">
								  <label  className="form-label font-w600">Enter State:<span className="text-danger scale3 ms-2">*</span></label>
									<input type="text" className="form-control" placeholder="State" />
								</div>
								<div className="col-xl-6  col-md-6 mb-4">
								  <label  className="form-label font-w600">Enter Counter:<span className="text-danger scale3 ms-2">*</span></label>
									<input type="text" className="form-control" placeholder="State" />
								</div>
								<div className="col-xl-6  col-md-6 mb-4">
								  <label  className="form-label font-w600">Enter Education Level:<span className="text-danger scale3 ms-2">*</span></label>
									<input type="text" className="form-control" placeholder="Education Level" />
								</div>
								<div className="col-xl-12 mb-4">
									<label  className="form-label font-w600">Description:<span className="text-danger scale3 ms-2">*</span></label>
									<textarea className="form-control" rows="4" aria-label="With textarea"></textarea>
								</div>
							</div>
							<div>
								<label className="form-label me-3">Status:</label>
								<div className="form-check form-check-inline">
									<input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" defaultValue="option1" />
									<label className="form-check-label" htmlFor="inlineRadio1">Active</label>
								</div>
								<div className="form-check form-check-inline">
									<input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" defaultValue="option2" />
									<label className="form-check-label" htmlFor="inlineRadio2">In Active</label>
								</div>
							</div>
						</div>
						<div className="card-footer text-end">
							<div>
								<Link to={"#"} className="btn btn-danger light me-3">Close</Link>
								<Link to={"#"} className="btn btn-primary">Submit</Link>
							</div>
						</div>
					</div>
				</div>
			</div>	
		</>
	)	
}
export default NewJob;