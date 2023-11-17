import React from 'react';
import Nav from './Nav';
import star from '../assets/emojione_star.svg';
import pen from '../assets/PencilAlt.svg';
import human from '../assets/hero-image 1.png';
const Hero = () => {
	return (
		<div className=' bg-gradient-to-b from-[#6F7DFB] to-[#26308C] md:px-[6.25rem] lg:px-[7.25rem] pt-[1.7rem] min-h-fit relative -z-10'>
			<Nav />

			<div className='flex lg:flex-row flex-col gap-8 mt-[8rem]'>
				<div className='md:flex md:flex-col gap-[1.3rem] items-start text-left '>
					<div className=''>
						<h2 className='text-white text-[3.125rem] font-[900] leading-[3.90625rem] md:w-[39.625rem;] lg:w-[28.5625rem]'>
							Learn the art of Game Dev
						</h2>
					</div>

					<p className='text-white text-[1rem] font-[400] leading-[2rem] md:w-[39.625rem;] lg:w-[28.5625rem]'>
						This is a comprehensive course on Game Development. You will learn
						everything from generating an idea to publishing your games to
						different platforms.
					</p>
					<button className='inline-flex px-8 py-4 items-center gap-[0.625rem] rounded-3xl bg-[#DA722C] text-white text-[1.125rem] font-[700] hover:scale-[1.07] ease-in duration-200 cursor-pointer'>
						{' '}
						<span>
							<img src={pen} alt='pen icon' className='w-[1.5rem] h-[1.5rem]' />
						</span>
						Enrol Now
					</button>
				</div>
				<div className='flex flex-row'>
					<div className='flex flex-col gap-[9.88rem] relative mt-[6.5rem] ml-4 '>
						<div className='bg-white flex flex-col items-center justify-center md:w-[12.875rem] md:h-[5.625rem] rounded-3xl shrink-0 text-[#023047] hero__students'>
							<h3 className='text-[2.25rem] font-[700] leading-[2.8125rem]'>
								32K
							</h3>
							<p>Students Enrolled</p>
						</div>

						<div className='bg-white flex flex-col items-center justify-center md:w-[11.4375rem] md:h-[5.625rem] rounded-3xl shrink-0 text-[#023047] lg:relative right-[3rem] '>
							<h3 className='text-[2.25rem] font-[700] leading-[2.8125rem] flex flex-row '>
								4.7{' '}
								<span>
									{' '}
									<img
										src={star}
										alt='star'
										className='w-[2.75rem] h-[2.75rem] shrink-0'
									/>
								</span>
							</h3>
							<p>Overall Rating</p>
						</div>
					</div>
					<div className='relative lg:bottom-[0.775rem]'>
						<img
							src={human}
							alt='hero'
							className='md:w-[31rem] relative object-cover lg:w-[27.875rem] lg:h-[35.37rem] md:h-[40.44rem] shrink-0'
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
