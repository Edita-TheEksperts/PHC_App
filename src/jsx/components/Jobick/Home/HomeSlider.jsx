import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const sliderData = [
	{title:'UI Designer', subtitle:'Bubbles Studios', designcolor:'#2769ee'},
	{title:'Researcher', subtitle:'Kleon Studios', designcolor:'#ee27c0'},
	{title:'Frontend', subtitle:'Green Comp.', designcolor:'#2db532'},
	{title:'UI Designer', subtitle:'Bubbles Studios', designcolor:'#2769ee'},
	{title:'Researcher', subtitle:'Kleon Studios', designcolor:'#ee27c0'},
];

const HomeSlider = () => {
	const settings = {
		dots: false,
		infinite: true,
		arrows: false,
		variableWidth: true,
		speed: 500,
		slidesToScroll: 1,
		responsive: [
			{
			  breakpoint: 575,
				settings: {
					slidesToScroll: 1,
					variableWidth: false,
				}
			},
		]	
	};
	return (
		<Slider  className="card-slide owl-right-nav " {...settings}>
			{sliderData.map((data, ind)=>(
				<div className="items p-2" key={ind}>
					<div className="jobs text-center">
						<div className="icon-img-bx">						
							<svg className="mb-2" xmlns="http://www.w3.org/2000/svg" width="71" height="71" viewBox="0 0 71 71">
								<g  transform="translate(-457 -443)">
									<rect  width="71" height="71" rx="12" transform="translate(457 443)" fill="#c5c5c5"/>
									<g  transform="translate(457 443)">
										<rect  data-name="placeholder" width="71" height="71" rx="12" fill={data.designcolor}/>
										<circle  data-name="Ellipse 12" cx="18" cy="18" r="18" transform="translate(15 20)" fill="#fff"/>
										<circle data-name="Ellipse 11" cx="11" cy="11" r="11" transform="translate(36 15)" fill="#ffe70c" 
											style={{mixBlendMode: "multiply",isolation: "isolate"}}></circle>
									</g>
								</g>
							</svg>
						</div>						
						<h5 className="mb-1">{data.title}</h5>
						<p className="text-primary mb-2 fs-13">{data.subtitle}</p>
						<div className="bottom-info pt-1">
							<p className="mb-0"><i className="fas fa-map-marker-alt me-2" />Manchester, England</p>
							<p className="mb-0 mt-0"><i className="fas fa-comments-dollar me-2" />$ 2,000 - $ 2,500</p>
						</div>
					</div>	
				</div>
			))}			
		</Slider>
	);
};

export default HomeSlider;