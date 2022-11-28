function TopCollectionItem({ name, img, createdBy, company }) {
	return (
		<div className='collection__item'>
			<div className='collection__item--heading'>
				<p className='collection__item--create'>Created by</p>
				<div className='collection__item--info'>
					<img src={img} alt='' className='collection__item--ava' />
					<span className='collection__item--name'>{createdBy}</span>
				</div>
			</div>
			<img src={company} alt='' className='collection__item--img' />
			<div className='collection__item--bottom'>
				<h3 className='collection__item--title'>{name}</h3>
				<p className='collection__item--create'>
					Created by <span className='collection__item--name'>{createdBy}</span>
				</p>
			</div>
		</div>
	)
}

export default TopCollectionItem
