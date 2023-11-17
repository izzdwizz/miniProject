import React from 'react';
import unity from '../assets/Rectangle 7.png';
import unity2 from '../assets/UNIT.png';
import clock from '../assets/Clock.svg';

const SectionTwo = () => {
	return (
		<div>
			<div className=' bg-gradient-to-b from-[#6F7DFB] to-[#26308C] md:px-[7.25rem] md:pb-[7rem]   flex flex-col items-center justify-start'>
				<h2 className='text-white md:w-[32.75rem] items-start gap-[.625rem] flex text-[1.875rem] md:text-[3.75rem] font-[900] mt-[5rem] mb-[5rem] leading-[4.5rem] text-center md:ml-[6rem]'>
					{' '}
					Our Courses
				</h2>
				<div className='flex xl:flex-row flex-col gap-[6rem]'>
					<div className='flex flex-col items-start gap-[1.88rem] py-0 px-8 w-[25.8125rem]  md:w-[32.875rem] bg-white rounded-3xl relative overflow-hidden'>
						<img
							src={unity}
							alt='unity'
							className='md:h-[16.25rem] self-stretch rounded-3xl shadow_box object-cover bg-no-repeat back-shadow hover:scale-110 ease-in-out duration-300'
						/>

						<div className='flex flex-row justify-between gap-[1rem] items-center w-full'>
							<h3 className='text-[#023047] font-[900] text-[1.5rem] md:text-[1.875rem] text-left leading-[2.8125rem] w-[23.375rem]'>
								Game Design Essentials
							</h3>{' '}
							<span className='flex gap-[0.3rem] min-w-max items-center justify-center text-[1rem] leading-6 font-[900] '>
								<img
									src={clock}
									alt='clock'
									className='h-[1.25rem] w-[1.25rem]'
								/>{' '}
								8 HRS
							</span>
						</div>
						<div
							className='md:h-[0.5rem] bg-[#023047]
						self-stretch rounded-3xl relative bottom-[-45px]'
						></div>
					</div>
					<div className='flex flex-col items-start gap-[1.88rem] py-0 px-8 w-[25.8125rem]  md:w-[32.875rem] bg-white rounded-3xl relative overflow-hidden'>
						<img
							src={unity2}
							alt='unity'
							className='md:h-[16.25rem] self-stretch rounded-3xl shadow_box object-cover bg-no-repeat back-shadow hover:scale-110 ease-in-out duration-300'
						/>

						<div className='flex flex-row justify-between items-center w-full'>
							<h3 className='text-[#023047] font-[900] text-[1.5rem] md:text-[1.875rem] text-left leading-[2.8125rem] w-[23.375rem]'>
								Unity Game Engine Fundmentals
							</h3>{' '}
							<span className='flex gap-[0.3rem] items-center justify-center text-[1rem] leading-6 font-[900] min-w-max '>
								<img
									src={clock}
									alt='clock'
									className='h-[1.25rem] w-[1.25rem]'
								/>{' '}
								8 HRS
							</span>
						</div>
						<div
							className='md:h-[0.5rem] bg-[#023047]
						self-stretch rounded-3xl static'
						></div>
					</div>
				</div>
				<div className='flex flex-row justify-end md:w-full items-center mt-[3rem] px-16'>
					{' '}
					<button className='inline-flex px-8 py-4 items-center gap-[0.625rem] rounded-3xl bg-[#DA722C] text-white text-[1.125rem] font-[700] mb-8 hover:scale-[1.07] ease-in duration-200 cursor-pointer'>
						{' '}
						All Courses
					</button>
				</div>
			</div>
		</div>
	);
};

export default SectionTwo;
