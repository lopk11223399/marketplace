import './Navbar.scss'
import NavbarLeft from './NavbarLeft'
import NavbarRight from './NavbarRight'

import Logo from '../../images/background/logo.png'

function Navbar() {
	return (
		<nav className='navbar'>
			<NavbarLeft logo={Logo} />
			<NavbarRight />
		</nav>
	)
}

export default Navbar
