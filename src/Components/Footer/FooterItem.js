function FooterItem({ title, links }) {
	const [...link] = links

	return (
		<div className='footer__tag'>
			<h3 className='footer__tag--name'>{title}</h3>
			<ul className='footer__list'>
				{link.map((ele, index) => {
					return (
						<li key={index} className='footer__item'>
							<a className='footer__link' href={ele.path}>
								{ele.name}
							</a>
						</li>
					)
				})}
			</ul>
		</div>
	)
}

export default FooterItem