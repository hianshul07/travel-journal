import globe from '../assets/globe.svg';

const Navbar = () => {
	return (
		<div className='w-full flex items-center justify-center bg-[#F55A5A] h-14 gap-2'>
			<img src={globe} alt='' className='h-6 w-6'/>
			<h1 className='text-white text-lg font-medium'>my travel journal.</h1>
		</div>
	);
};
export default Navbar;
