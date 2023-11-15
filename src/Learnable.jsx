import React, { useState } from 'react';

const Learnable = () => {
	function nthMostRare(list, n) {
		if (!list || n <= 0) {
			return null;
		}

		// Count the frequency of each item in the list
		const frequency = {};
		list.forEach((item) => {
			frequency[item] = (frequency[item] || 0) + 1;
		});

		// Sort the items based on frequency and value
		const sortedItems = Object.keys(frequency).sort((a, b) => {
			const freqDiff = frequency[a] - frequency[b];
			return freqDiff !== 0 ? freqDiff : a - b;
		});

		// Return the nth rarest item
		if (n <= sortedItems.length) {
			return sortedItems[n - 1];
		} else {
			return null;
		}
	}

	// Example usage:
	const [exampleList, setExamplelist] = useState([
		5, 4, 5, 4, 5, 4, 4, 5, 3, 3, 3, 2, 2, 1, 5,
	]);

	const [index, setIndex] = useState(2);
	const nthRarestItem = nthMostRare(exampleList, index);

	return (
		<div>
			<div
				className=' bg-gradient-to-b from-[#6F7DFB] to-[#26308C] px-[7.25rem] pt-[1.7rem] h-[48rem]
            justify-center flex items-center'
			>
				<div className='md:flex-row flex justify-evenly items-center gap-[1rem]'>
					<div className='text-white text-[2rem] gap-3 md:font-[900] w-full flex flex-row items-center justify-start min-w-full text-left'>
						Input Example List and value of n respectively in the fields
						provided
						<span className='gap-8 flex'>
							<input
								type='text'
								className='w-[25rem] h-[4rem] text-black text-[.8rem] border-none outline-none px-4 rounded-2xl'
								value={exampleList}
								onChange={(e) => setExamplelist(e.target.value)}
							/>
							<input
								type='text'
								className='w-[6.5rem] h-[4rem] text-black text-[.8rem] border-none outline-none px-4 rounded-2xl'
								value={index}
								onChange={(e) => setIndex(e.target.value)}
							/>
						</span>
					</div>
					<div className='flex flex-row text-white font-[700] text-[1rem] justify-between items-center w-full'>
						<div
							className='inline-flex py-[1rem] px-[2rem] w-full  gap-[0.625rem] rounded-[1.5em] bg-[#DA722C] text-[#023047] hover:scale-[1.07] ease-in duration-200 cursor-pointer'
							onClick={() => {
								alert(nthRarestItem);
							}}
						>
							Compute
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Learnable;
