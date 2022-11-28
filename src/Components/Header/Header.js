import HeaderLeft from './HeaderLeft'
import HeaderRight from './HeaderRight'
import './Header.scss'

function Header() {
	return (
		<div className='header'>
			<HeaderLeft />
			<HeaderRight />
		</div>
	)
}

export default Header
