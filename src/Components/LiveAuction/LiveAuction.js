import './LiveAuction.scss'
import LiveItem from './LiveItem'

import Avatar3 from '../../images/profile/profile_3.jpg'
import Avatar4 from '../../images/profile/profile_4.jpg'
import Avatar5 from '../../images/profile/profile_5.png'
import Company3 from '../../images/profile/company_3.jpg'
import Company4 from '../../images/profile/company_4.jpg'
import Company5 from '../../images/profile/company_5.jpg'
import Follow1 from '../../images/profile/profile_6.jpg'
import Follow2 from '../../images/profile/profile_7.jpg'
import Follow3 from '../../images/profile/profile_8.jpg'
import Follow4 from '../../images/profile/profile_9.jpg'
import Follow5 from '../../images/profile/profile_10.jpg'
import Follow6 from '../../images/profile/profile_11.jpg'
import Follow7 from '../../images/profile/profile_12.jpg'
import Follow8 from '../../images/profile/profile_13.jpg'
import Follow9 from '../../images/profile/profile_14.jpg'
import Follow10 from '../../images/profile/profile_15.jpg'
import Follow11 from '../../images/profile/profile_16.jpg'
import Follow12 from '../../images/profile/profile_17.jpg'

const profile = [
	{
		author: 'John Doe',
		avatar: Avatar3,
		company: 'Golden Hour',
		imgCompany: Company3,
		price: '3.2',
		following: [Follow1, Follow2, Follow3, Follow4],
	},
	{
		author: 'John Doe',
		avatar: Avatar4,
		company: 'Golden Hour',
		price: '4.1',
		imgCompany: Company4,
		following: [Follow5, Follow6, Follow7, Follow8],
	},
	{
		author: 'John Doe',
		avatar: Avatar5,
		company: 'Golden Hour',
		price: '4.1',
		imgCompany: Company5,
		following: [Follow9, Follow10, Follow11, Follow12],
	},
]

function LiveAuction() {
	return (
		<div className='live'>
			<h2 className='live__title'>Live Auction</h2>
			<p className='live__desc'>
				The largest and unique Super rare NFT marketplace For
				crypto-collectibles
			</p>
			<div className='live__list'>
				{profile.map((item, idnex) => {
					return <LiveItem key={idnex} {...item} />
				})}
			</div>
		</div>
	)
}

export default LiveAuction
