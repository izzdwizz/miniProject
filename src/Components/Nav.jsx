import React from 'react';

const Nav = () => {
	return (
		<div className='md:flex-row flex justify-between items-center'>
			<div className='text-white text-[2.5rem] md:font-[900] w-full flex flex-row items-center justify-start'>
				GD.
			</div>
			<div className='flex flex-row text-white font-[700] text-[1rem] justify-between gap-[5rem] items-center w-full'>
				<div className='hover:opacity-80 cursor-pointer'>About</div>
				<div className='hover:opacity-80 cursor-pointer'>Services</div>
				<div className='hover:opacity-80 cursor-pointer'>Our Work</div>
				<div className='inline-flex py-[1rem] px-[2rem]  gap-[0.625rem] rounded-[1.5em] bg-[#023047] hover:scale-[1.07] ease-in duration-200 cursor-pointer'>
					Enrol Now
				</div>
			</div>
		</div>
	);
};

export default Nav;
