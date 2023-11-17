import React from 'react';
import apple from '../assets/Group 8.svg';
import android from '../assets/Vector.svg';
const SectionThree = () => {
	return (
		<div>
			<div className='flex flex-col items-center justify-center mt-[4.8rem] md:mt-[6.25rem] mb-[5.5rem]'>
				<div>
					<h3 className='text-[#023047] gap-[0.625rem] md:w-[42.5rem] text-center text-[1.875rem] md:text-[3.75rem] font-[900] leading-[4.5rem]'>
						Get our App
					</h3>
				</div>
				<div className='flex justify-center items-center'>
					<p className='text-[#023047] w-[21.875rem] md:w-[66.875rem] text-[1rem] text-center font-[400] leading-8 mt-4'>
						You can use our App for better experience on smartphones
					</p>
				</div>
				<div className='flex flex-col md:flex-row items-start justify-center gap-10 mt-[3.5rem]'>
					<div
						className='bg-black w-[19.375rem]
                     py-[1.25rem] px-[1.9375rem]
                      items-center flex gap-[0.875rem] justify-center'
					>
						<img src={android} alt='' />{' '}
						<span className='text-white text-center text-[1.5rem] font-[400] leading-[3rem] '>
							App Store
						</span>
					</div>
					<div
						className='bg-black w-[19.375rem]
                     py-[1.25rem] px-[1.9375rem]
                      items-center flex gap-[0.875rem] justify-center'
					>
						<img src={apple} alt='' />{' '}
						<span className='text-white text-center text-[1.5rem] font-[400] leading-[3rem] '>
							Google Play
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SectionThree;
