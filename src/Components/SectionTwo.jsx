import React from 'react';
import unity from '../assets/Rectangle 7.png';
import clock from '../assets/Clock.svg';

const SectionTwo = () => {
	return (
		<div>
			<div className=' bg-gradient-to-b from-[#6F7DFB] to-[#26308C] md:px-[7.25rem]  h-[48rem] flex flex-col items-center justify-start'>
				<h2 className='text-white md:w-[32.75rem] items-start gap-[.625rem] flex text-[3.75rem] font-[900] mt-[4.37rem] mb-[3.5rem] leading-[4.5rem] text-center'>
					{' '}
					Our Courses
				</h2>
				<div className='flex flex-row gap-[3.rem]'>
					<div>
						<div>
							<img src={unity} alt='unity' />
						</div>
						<div>
							<h3>Unity Game Engine Fundmentals</h3>{' '}
							<span>
								<img src={clock} alt='clock' /> 8 HRS
							</span>
						</div>
						<div></div>
					</div>
					<div></div>
				</div>
				<div></div>
			</div>
		</div>
	);
};

export default SectionTwo;
