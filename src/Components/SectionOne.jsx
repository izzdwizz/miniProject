import React from 'react';
import jane from '../assets/Ellipse 1.svg';
import jackob from '../assets/Ellipse 1.png';

const SectionOne = () => {
	return (
		<div className='flex justify-center'>
			<div className='grid md:grid-cols-2 md:px-[7.25rem] py-[7.25rem] bg-white gap-12'>
				<div className='flex flex-col gap-8 straight_ehind relative'>
					<div className='rounded-3xl shrink-0 bg-[#023047] md:h-[34.12rem] md:w-[1.75rem] ml-[5rem]'></div>

					<div className='flex flex-col gap-[3rem] absolute top-8'>
						<div className='flex flex-col gap-0 md:w-[27.625rem] bg-white rounded-t-[1.5rem] shadow_box items-start pb-2 rounded-b-[1.5rem]'>
							<div className='rounded-3xl px-[2rem] py-[1.5rem] items-start self-start gap-[0.625rem] bg-[#6f7dfb] '>
								<p className='text-white font-[900] text-[1.125rem] text-left leading-[1.6875rem]'>
									This is a great course. It helped me a lot. Thank you :)
								</p>
							</div>
							<div className='flex py-0 px-8 gap-[6.62rem] self-stretch '>
								<div className='flex flex-col items-start justify-center'>
									<h2
										className='text-[#023047] text-[1.5rem]
								 font-[900] leading-[1.8rem]
								 '
									>
										Jane Cooper
									</h2>
									<p
										className='text-[#023047] text-[1.125rem]
								 font-[400] leading-[1.35rem]
								 '
									>
										Developer, Sony
									</p>
								</div>
								<img
									src={jane}
									alt='jane '
									className='rounded-[7.5rem] md:h-[7.5rem] md:w-[7.5rem] relative bottom-2 '
								/>
							</div>
						</div>
						<div className='flex flex-col gap-0 md:w-[27.625rem] bg-white rounded-t-[1.5rem]  shadow_box items-start pb-2 rounded-b-[1.5rem] relative left-11'>
							<div className='rounded-3xl px-[2rem] text-left py-[1.5rem] items-start self-start gap-[0.625rem] bg-[#DA722C] w-full'>
								<p className='text-white font-[900] text-[1.125rem] leading-[1.6875rem]'>
									Amazing Work! Well done!
								</p>
							</div>
							<div className='flex py-0 px-8 gap-[6rem] self-stretch '>
								<div className='flex flex-col items-start w-full justify-center text-left'>
									<h2
										className='text-[#023047] text-[1.5rem]
								 font-[900] leading-[1.8rem]
								 '
									>
										Jacob Jones
									</h2>
									<p
										className='text-[#023047] text-[1.125rem]
								 font-[400] leading-[1.35rem]
								 '
									>
										Designer, Facebook
									</p>
								</div>
								<img
									src={jackob}
									alt='jane '
									className='rounded-[7.5rem] md:h-[7.5rem] md:w-[7.5rem] relative bottom-2 '
								/>
							</div>
						</div>
					</div>
				</div>
				<div className='md:flex md:flex-col gap-[1.3rem] items-start text-left mt-[4.29rem]'>
					<div className='flex items-start '>
						<h2 className='text-[#023047] text-[3.75rem] font-[900] leading-[4.5rem]  gap-[0.625rem] md:w-[34.9375rem]'>
							What our students say
						</h2>
					</div>

					<p className='text-[#023047] text-[1rem] font-[400] leading-[2rem] w-[34.875rem]'>
						All students get access to all the videos and also the source code
						of the projects. You will also have access to a private Discord
						channel where you can discuss your doubts.
					</p>
					<button className='inline-flex px-8 py-4 items-center gap-[0.625rem] rounded-3xl bg-[#DA722C] text-white text-[1.125rem] font-[700] hover:scale-[1.07] ease-in duration-200 cursor-pointer'>
						{' '}
						Enrol Now
					</button>
				</div>
			</div>
		</div>
	);
};

export default SectionOne;
