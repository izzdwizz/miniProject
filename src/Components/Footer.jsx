import React from 'react';
import instagram from '../assets/ig.svg';
import facebook from '../assets/fb.svg';

const Footer = () => {
	return (
		<div>
			<div className='flex-col flex items-start justify-start md:mt-[4rem] bg-black md:px-[9.5rem] md:py-[4.3rem] gap-[2rem]'>
				<div className='flex flex-row justify-start items-start gap-[12rem] w-full flex-wrap'>
					<ul className='flex flex-col gap-5 items-start'>
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
					<ul className='flex flex-col gap-5 items-start'>
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
					<ul className='flex flex-col gap-5 items-start'>
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
						<div className='flex flex-row justify-between items-center bg-white md:w-[32.563rem] md:h-[2.4375rem] shrink-0 rounded-[0.5rem] md:pl-[1rem] pr-[0.5rem]  md:py-[0.5rem]'>
							<input
								type='text'
								placeholder='Email Address'
								className='bg-white outline-none'
							/>
							<button className='md:w-[8.4375rem] md:h-[1.88rem] shrink-0 rounded-[0.5rem] bg-[#023047] text-white text-[1rem] font-[400] leading-8'>
								Subscribe
							</button>
						</div>
					</ul>
				</div>
				<div>
					<p className='text-white md:relative right-8'>
						This website is developed by GTCoding © 2021
					</p>
				</div>
			</div>
		</div>
	);
};

export default Footer;
