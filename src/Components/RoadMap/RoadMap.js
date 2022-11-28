import './RoadMap.scss'
import RoadMapItem from './RoadMapItem'

const maps = [
	{
		month: 'January',
		title: 'Brief',
		description:
			'Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. Morbi sed aliquet donec facilisis. Senectus eget.',
	},
	{
		month: 'Fabruary',
		title: 'Research',
		description:
			'Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. Morbi sed aliquet donec facilisis. Senectus eget.',
	},
	{
		month: 'March',
		title: 'Discover',
		description:
			'Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. Morbi sed aliquet donec facilisis. Senectus eget.',
	},
	{
		month: 'April',
		title: 'Design',
		description:
			'Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. Morbi sed aliquet donec facilisis. Senectus eget.',
	},
	{
		month: 'May',
		title: 'Testing',
		description:
			'Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. Morbi sed aliquet donec facilisis. Senectus eget.',
	},
	{
		month: 'June',
		title: 'Launch & Feedback',
		description:
			'Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. Morbi sed aliquet donec facilisis. Senectus eget.',
	},
]

function RoadMap() {
	return (
		<div className='map'>
			<div className='map__top'>
				<h2 className='map__title'>Road map 2022</h2>
				<p className='map__desc'>
					The largest and unique Super rare NFT marketplace For
					crypto-collectibles
				</p>
			</div>
			<div className='map__bottom'>
				{maps.map((map, index) => {
					return <RoadMapItem key={index} {...map} />
				})}
			</div>
		</div>
	)
}

export default RoadMap
