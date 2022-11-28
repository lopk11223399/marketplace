import { useState } from 'react'

function NavbarRight() {
	const [inputShow, setInputShow] = useState(false)

	const toggleInput = () => {
		setInputShow(!inputShow)
	}

	return (
		<div className='navbar__right'>
			<div className='navbar__search'>
				<input
					type='text'
					className={
						inputShow
							? 'navbar__search--input navbar__search--input-show'
							: 'navbar__search--input'
					}
					placeholder='Search'
				/>
				<svg
					onClick={toggleInput}
					className='navbar__search--icon'
					viewBox='0 0 24 24'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'>
					<circle
						cx='11.7666'
						cy='11.7666'
						r='8.98856'
						stroke='white'
						strokeWidth='1.5'
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
					<path
						d='M18.0183 18.4851L21.5423 22'
						stroke='white'
						strokeWidth='1.5'
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
				</svg>
			</div>
			<button className='navbar__connect'>Connect Wallet</button>
			<div className='navbar__upload'>
				<svg
					className='navbar__upload--icon'
					viewBox='0 0 24 24'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'>
					<path
						d='M4 16L4 17C4 18.6569 5.34315 20 7 20L17 20C18.6569 20 20 18.6569 20 17L20 16M16 8L12 4M12 4L8 8M12 4L12 16'
						stroke='white'
						strokeWidth='2'
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
				</svg>
			</div>
		</div>
	)
}

export default NavbarRight
