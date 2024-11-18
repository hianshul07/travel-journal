import pin from '../assets/pin.svg';
import Sydney from '../assets/Sydney.png';
import Fuji from '../assets/Fuji.png';
import water from '../assets/water.png';

const Destination = ({ image, description }) => {
	return (
		<div className="flex items-center  p-10  border-b">
			{/* <div id='left' className=''> */}
			<img src={image} alt="" className="" />
			{/* </div> */}
			<div id="right" className="px-5">
				<div id="location" className="flex items-center">
					<img src={pin} alt="" className="h-4 mr-1" />
					<h3 className=" tracking-[0.17em] text-xs mr-3">JAPAN</h3>
					<p className="text-[#918E9B] underline">View on Google Maps</p>
				</div>
				<h2 className="font-bold text-[#2B283A] text-2xl mb-4">Mount Fuji</h2>
				<p className="font-bold text-xs mb-2">12 Jan, 2023 - 24 Jan, 2023</p>
				<p className="text-xs text-[#2B283A]">
					{description}
				</p>
			</div>
		</div>
	);
};
export default Destination;
