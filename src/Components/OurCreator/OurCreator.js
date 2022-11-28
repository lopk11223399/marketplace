import './OurCreator.scss'
import OurCreatorItem from './OurCreatorItem'

import Avatar1 from '../../images/profile/profile_6.jpg'
import Avatar2 from '../../images/profile/profile_7.jpg'
import Avatar3 from '../../images/profile/profile_8.jpg'
import Avatar4 from '../../images/profile/profile_9.jpg'
import Avatar5 from '../../images/profile/profile_10.jpg'
import Avatar6 from '../../images/profile/profile_11.jpg'
import Avatar7 from '../../images/profile/profile_12.jpg'
import Avatar8 from '../../images/profile/profile_13.jpg'
import Avatar9 from '../../images/profile/profile_14.jpg'

const profiles = [
	{
		name: 'Emerson Philips',
		price: '3.4',
		avatar: Avatar1,
	},
	{
		name: 'Emerson Philips',
		price: '3.4',
		avatar: Avatar2,
	},
	{
		name: 'Emerson Philips',
		price: '3.4',
		avatar: Avatar3,
	},
	{
		name: 'Emerson Philips',
		price: '3.4',
		avatar: Avatar4,
	},
	{
		name: 'Emerson Philips',
		price: '3.4',
		avatar: Avatar5,
	},
	{
		name: 'Emerson Philips',
		price: '3.4',
		avatar: Avatar6,
	},
	{
		name: 'Emerson Philips',
		price: '3.4',
		avatar: Avatar7,
	},
	{
		name: 'Emerson Philips',
		price: '3.4',
		avatar: Avatar8,
	},
	{
		name: 'Emerson Philips',
		price: '3.4',
		avatar: Avatar9,
	},
]

function OurCreator() {
	return (
		<div className='creator'>
			<div className='creator__top'>
				<h2 className='creator__title'>Our Creator</h2>
				<p className='creator__desc'>
					The largest and unique Super rare NFT marketplace For
					crypto-collectibles
				</p>
			</div>
			<div className='creator__bottom'>
				{profiles.map((profile, idnex) => {
					return <OurCreatorItem key={idnex} {...profile} />
				})}
			</div>
			<button className='creator__btn'>Explore more</button>
		</div>
	)
}

export default OurCreator
