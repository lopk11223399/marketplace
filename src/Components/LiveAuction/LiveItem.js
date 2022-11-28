function LiveItem({ author, avatar, company, imgCompany, price, following }) {
	let [item1, item2, item3, imte4] = following

	return (
		<div className='live__card '>
			<div className='live__card--heading'>
				<div className='card__heading--left'>
					<h4 className='card__heading--title'>210 Digital Artwork</h4>
					<p className='card__heading--price'>
						<span className='card__heading--icon'>
							<svg
								width='16'
								height='16'
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
				<button className='card__heading--right'>Place bid</button>
			</div>
			<img src={imgCompany} alt={company} className='live__card--img' />
			<div className='live__card--info'>
				<div className='card__info-left'>
					<h3 className='card__info--comp'>{company}</h3>
					<div className='card__info--auther'>
						<img src={avatar} alt={author} className='card__info--ava' />
						<div className='card__info--name'>{author}</div>
					</div>
				</div>
				<div className='card__info--right'>
					<img src={item1} alt='' className='card__info--flow' />
					<img src={item2} alt='' className='card__info--flow' />
					<img src={item3} alt='' className='card__info--flow' />
					<img src={imte4} alt='' className='card__info--flow' />
				</div>
			</div>
		</div>
	)
}

export default LiveItem
