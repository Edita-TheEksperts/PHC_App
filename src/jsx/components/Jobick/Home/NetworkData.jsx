import { Fragment } from "react"
import DonutChart from './DonutChart'
const networkChart = [
    { title:'Engineer', number:'5,050', percent:'66'},
    { title:'Designer', number:'10,524', percent:'31'},
    { title:'Manager', number:'621', percent:'75'},
    { title:'Programmer', number:'9,662', percent:'62'},
];

const NetworkData = () =>{
    return(
        <Fragment>
            <div className="row sp10">
                {networkChart.map((item, ind)=>(
                    <div className="col-xl-3 col-md-3 col-6 mb-4 text-center" key={ind}>
                        <div className="d-inline-block ms-auto me-auto mb-md-3 mb-2 db-donut-chart-sale me-4">                            
                            <DonutChart backgroundColor1="#f93a0b" backgroundColor2="#f5f5f5" value={item.percent}/>
                            <h4 className="mb-0 pie-label">{item.percent}%</h4>
                        </div>
                        <h5 className="mb-1">{item.title}</h5>
                        <p className="mb-0">{item.number} Vacancy</p>
                    </div>
                ))}                
            </div>
        </Fragment>
    )
}
export default NetworkData;