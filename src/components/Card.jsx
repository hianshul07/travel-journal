import Destination from './Destination.jsx';
import Navbar from './Navbar.jsx';
import data from '../data.js';
// import { JSX } from 'react/jsx-runtime';
// import pin from "../assets/pin.svg"

const Card = () => {
	// const destinations = data.map((item => {
	//   console.log({...item});
	//   return (
	//     <Destination key={item.id} {...item}/>
	//   )
	// }))

	return (
		<div className="bg-white w-[550px]">
			{/* <img src={pin} alt="" /> */}
			<Navbar />
			<Destination
				image="/src/assets/Fuji.png"
				description="Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
			/>
			<Destination
				image="/src/assets/Sydney.png"
				description="The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings."
			/>
			<Destination
				imgae="/src/assets/Water.png"
				description="The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality."
			/>
			{/* {destinations} */}
		</div>
	);
};
export default Card;
