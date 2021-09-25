import './feature.css'
import VisibilityIcon from '@material-ui/icons/Visibility';

export default function Feature() {
    return (
        <div className="feature">
            <div className="featureitem">
                   <h4 className="featureItemTitle">Number of views</h4>
               
                {/* <div className="featureViewContaineer"> */}
                   <span className="numberOf">1545</span>
                {/* </div> */}
                
            </div>
            <div className="featureitem">
                <ul>
            
                  <h4 className="featureItemTitle">Number of Likes</h4> 
                <div className="featureViewContaineer">
                   <span className="numberOf">2540</span>
                </div>
                </ul>
            </div>
            <div className="featureitem">
                   <h4 className="featureItemTitle">Likes in last 7 days</h4>
                <div className="featureViewContaineer">
                   <span className="numberOf">321</span>
                </div>
            </div>
            
        </div>
    )
}
