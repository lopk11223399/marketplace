function RoadMapItem({ month, title, description }) {
	return (
		<div className='map__item'>
			<div className='map__ellipse'></div>
			<h4 className='map__item--month'>{month}</h4>
			<h3 className='map__item--title'>{title}</h3>
			<p className='map__item--desc'>{description}</p>
		</div>
	)
}

export default RoadMapItem
