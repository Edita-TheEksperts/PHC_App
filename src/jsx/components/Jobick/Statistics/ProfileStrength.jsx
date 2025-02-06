import loadable from "@loadable/component";
import pMinDelay from "p-min-delay";

const ApexPieChart2 = loadable(() =>
	pMinDelay(import("./ApexPieChart2"), 1000)
);


const ProfileStrength = () =>{
	return(
		<>
			<div className="card">
				<div className="card-header border-0 pb-0">
					<h4 className="fs-20 mb-0">Profile Stregth</h4>
				</div>
				<div className="card-body pt-3">
					<div className="row align-items-center">
						<div className="col-xl-6 col-sm-6">
							<div className="progress default-progress">
								<div className="progress-bar bg-vigit progress-animated" style={{width: "90%", }} role="progressbar">
									<span className="sr-only">90% Complete</span>
								</div>
							</div>
							<div className="d-flex align-items-end mt-2 pb-4 justify-content-between">
								<span className="fs-14 font-w500">Figma</span>
								<h6 className="mb-0">90%</h6>
							</div>
							<div className="progress default-progress">
								<div className="progress-bar bg-contact progress-animated" style={{width: "68%", }} role="progressbar">
									<span className="sr-only">45% Complete</span>
								</div>
							</div>
							<div className="d-flex align-items-end mt-2 pb-4 justify-content-between">
								<span className="fs-14 font-w500">Adobe XD</span>
								<h6 className="mb-0">68%</h6>
							</div>
							<div className="progress default-progress">
								<div className="progress-bar bg-follow progress-animated" style={{width: "85%", }} role="progressbar">
									<span className="sr-only">85% Complete</span>
								</div>
							</div>
							<div className="d-flex align-items-end mt-2  justify-content-between">
								<span className="fs-14 font-w500">Photoshop</span>
								<h6 className="mb-0">85%</h6>
							</div>
						</div>
						<div className="col-xl-6 col-sm-6">
							<div id="pieChart3">
								<ApexPieChart2   />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
export default ProfileStrength;