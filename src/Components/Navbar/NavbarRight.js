import { useState } from 'react'
import { Search, Upload } from '../../images/icons/icons'

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
				<div onClick={toggleInput}>
					<Search className='navbar__search--icon' />
				</div>
			</div>
			<button className='navbar__connect'>Connect Wallet</button>
			<div className='navbar__upload'>
				<Upload />
			</div>
		</div>
	)
}

export default NavbarRight
