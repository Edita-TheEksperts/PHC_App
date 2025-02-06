import loadable from "@loadable/component";
import pMinDelay from "p-min-delay";

const NetworkApexChart = loadable(() =>
	pMinDelay(import("./NetworkApexChart"), 1000)
);


const NetworkSection = () =>{
	return(
		<>
			<div className="card">
				<div className="card-header border-0 flex-wrap pb-0 align-items-start">
					<h4 className="card-title mb-2">Your Network Summary</h4>
					<div className="width160">
						<div className="d-flex align-items-center">
							<svg className="me-2" xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13">
							  <rect  width="13" height="13" fill="#f73a0b"/>
							</svg>
							Following
							<h5 className="ms-auto mb-0">239</h5>
						</div>
						<div className="mt-1 d-flex align-items-center">							
							<svg className="me-2" xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13">
								<rect  width="13" height="13" fill="#01111C"/>
							</svg>
							Followers							
							<h5 className="ms-auto mb-0">824</h5>
						</div>
					</div>
				</div>
				<div className="card-body pt-0 pb-0 ps-sm-3 ps-0">
					<div id="chartBar" className="chartBar">
						<NetworkApexChart />
					</div>
				</div>
			</div>
		</>
	)
}
export default NetworkSection;