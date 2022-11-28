function OurCreatorItem({ name, price, avatar }) {
	return (
		<div className='creator__item'>
			<img src={avatar} alt={name} className='creator__item--ava' />
			<div className='creator__item--info'>
				<div className='creator__item--name'>{name}</div>
				<p className='creator__item--price'>
					<span className='creator__item--icon'>
						<svg
							viewBox='0 0 16 16'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'>
							<g clipPath='url(#clip0_1_159)'>
								<path
									d='M8.00574 12.1982L3.56531 10.0303L8.00171 16.0002L8.66821 15.1033V11.8738L8.00574 12.1982Z'
									fill='#15BFFD'
								/>
								<path
									d='M8.00171 0L2.90625 9.14294H13.0973L8.00171 0Z'
									fill='#15BFFD'
								/>
								<path
									d='M13.0973 9.15649L8.00171 0V9.15649H13.0973Z'
									fill='#1286B0'
								/>
								<path
									d='M6.46021 5.07788H7.46021V6.07788H6.46021V5.07788Z'
									fill='#F7F8FA'
								/>
								<path
									d='M8.00171 6.65991L7.98169 6.65039L2.90674 9.15039H2.91125L7.98621 11.6504L8.00623 11.6409L8.66821 11.3169V6.98633L8.00171 6.65991Z'
									fill='#147EA5'
								/>
								<path
									d='M6.46021 3.18652H7.46021V4.18652H6.46021V3.18652Z'
									fill='#F7F8FA'
								/>
								<path
									d='M8.00574 12.1984L8.00171 16.0004L12.4413 10.0264L8.00574 12.1984Z'
									fill='#1286B0'
								/>
								<path
									d='M13.0878 9.15039L8.00171 6.65991L7.98169 6.65039L7.98621 11.6504L8.00623 11.6409L13.0923 9.15039H13.0878Z'
									fill='#0E526A'
								/>
							</g>
							<defs>
								<clipPath id='clip0_1_159'>
									<rect width='16' height='16' fill='white' />
								</clipPath>
							</defs>
						</svg>
					</span>
					{price} ETH
				</p>
			</div>
			<button className='creator__item--follow'>Follow</button>
		</div>
	)
}

export default OurCreatorItem
