import React from 'react';
import menu from '../assets/MenuAlt4Outline.svg';

const Nav = () => {
	return (
		<div className='md:flex-row flex justify-between items-center'>
			<div className='text-white text-[2.5rem] font-[900] w-full flex flex-row items-center justify-start'>
				GD.
			</div>
			<div className='hidden md:flex flex-row text-white font-[700] text-[1rem] justify-between md:gap-[2.5rem] lg:gap-[5rem] items-center w-full'>
				<div className='hover:opacity-80 cursor-pointer'>About</div>
				<div className='hover:opacity-80 cursor-pointer'>Services</div>
				<div className='hover:opacity-80 cursor-pointer min-w-max'>
					Our Work
				</div>
				<div className='inline-flex md:py-[0.75rem] justify-center lg:py-[1rem] px-[2rem]  gap-[0.625rem] w-full rounded-[1.5rem] bg-[#023047] hover:scale-[1.07] ease-in duration-200 cursor-pointer'>
					<p className='min-w-max'>Enrol Now</p>
				</div>
			</div>
			<div>
				<img
					src={menu}
					alt='menu icon'
					className='w-[2.5rem] h-[2.5rem] flex md:hidden cursor-pointer'
				/>
			</div>
		</div>
	);
};

export default Nav;
