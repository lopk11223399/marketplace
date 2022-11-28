function NavbarLeft({ logo }) {
	return (
		<div className='navbar__left'>
			<img className='navbar__logot' src={logo} alt='Logo' />
			<ul className='navbar__categrory'>
				<li className='navbar__item'>
					<a href='#' className='navbar__link'>
						Discover
					</a>
				</li>
				<li className='navbar__item'>
					<a href='#' className='navbar__link'>
						Marketplace
					</a>
					<div className='navbar__item--pro'>PRO</div>
				</li>
				<li className='navbar__item'>
					<a href='#' className='navbar__link'>
						How it Work
					</a>
				</li>
			</ul>
		</div>
	)
}

export default NavbarLeft
