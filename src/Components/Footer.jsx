import React from 'react';
import instagram from '../assets/ig.svg';
import facebook from '../assets/fb.svg';

const Footer = () => {
	return (
		<div>
			<div className='flex-col flex items-start justify-start md:mt-[4rem] bg-black px-[5rem] py-[3rem] md:px-[9.5rem] md:py-[4.3rem] gap-[2rem]'>
				<div className='flex flex-row justify-start items-start gap-8 md:gap-[6rem] lg:gap-[12rem] w-full flex-wrap grid-default'>
					<ul className='flex flex-col gap-5 items-center md:items-start'>
						<h2 className='text-[#da722c] text-center text-[1.125rem] font-[700] leading-9 md:relative right-[1.5rem]'>
							Quick Links
						</h2>
						<li className='text-white text-[1rem] font-[400] leading-8'>
							About Us
						</li>
						<li className='text-white text-[1rem] font-[400] leading-8'>
							Contact Us
						</li>
						<li className='text-white text-[1rem] font-[400] leading-8'>
							Privacy Policy
						</li>
						<li className='text-white text-[1rem] font-[400] leading-8'>
							Terms & Conditions
						</li>
					</ul>
					<ul className='flex flex-col gap-5 md:mr-8 md:relative left-16 items-center md:items-start'>
						<h2 className='text-[#da722c] text-center text-[1.125rem] font-[700] leading-9 md:relative right-[1.5rem]'>
							Course
						</h2>
						<li className='text-white text-[1rem] font-[400] leading-8'>
							Login
						</li>
						<li className='text-white text-[1rem] font-[400] leading-8'>
							Download
						</li>
						<li className='text-white text-[1rem] font-[400] leading-8'>
							All Courses
						</li>
					</ul>
					<ul className='flex flex-col gap-5 items-center md:items-start'>
						<h2 className='text-[#da722c] text-center text-[1.125rem] font-[700] leading-9 md:relative right-[1.5rem]'>
							Contact Us
						</h2>
						<li className='text-white text-[1rem] font-[400] leading-8'>
							contact@email.com
						</li>
						<div className='flex flex-row gap-8'>
							{' '}
							<img src={facebook} alt='facebook-icon' />
							<img src={instagram} alt='ig-icon' />
						</div>
						<div className='flex flex-row justify-between items-center bg-white w-[16.875rem] pl-4 md:w-[32.563rem] md:h-[2.4375rem] shrink-0 rounded-[0.5rem] md:pl-[1rem] pr-[0.5rem]  md:py-[0.5rem]'>
							<input
								type='text'
								placeholder='Email Address'
								className='bg-white outline-none'
							/>
							<button className='md:w-[8.4375rem] md:h-[1.88rem] shrink-0 rounded-[0.5rem] bg-[#023047] text-white text-[1rem] justify-center font-[400] leading-8 hidden md:flex'>
								Subscribe
							</button>
						</div>
					</ul>
				</div>
				<div className='flex flex-col justify-center items-center gap-4'>
					<button className='w-[8.4375rem] md:h-[1.88rem] justify-center py-[.35rem] shrink-0 rounded-[0.5rem] bg-[#023047] text-white text-[1rem] font-[400] leading-8 flex md:hidden'>
						Subscribe
					</button>
					<p className='text-white md:relative right-8 md:text-[1rem] text-[0.8rem] leading-[1.75rem]'>
						This website is developed by GTCoding © 2021
					</p>
				</div>
			</div>
		</div>
	);
};

export default Footer;
