import "../css/local/partials/components/_countdown-timer.css"
import Desktop from "../Assets/timer.svg"
import Mobile from "../Assets/timer-mobile.svg"
import Countdown from "./Timer"
import Address from "./Address"
const Timer = () => {
	return(
		<div>
			<section  className="">	
				<div className="countdown-svg-container">		
					<img src={Desktop} alt="countdown-SVG-background" className="countdown-bg-desktop" />
					<img src={Mobile} alt="bg" className="countdown-bg-mobile"/>
				<div className="timer text-center d-flex align-items-center">
                    <h1 className="timer-header-text">PRIVATE SALES IS LIVE</h1>
                    <div className="timer-countdown">
                    <Countdown timeTillDate="12 13 2021, 12:00 am" timeFormat="MM DD YYYY, h:mm a" />
                    </div>
					<a target= "_newtab" className="anchor" href="http://bit.ly/OreoSwap"> <button className="timer-button">JOIN WHITELIST</button></a>
					<Address />
                </div>
				</div>
			</section>
		</div>
	)
}

export default Timer;