import './TopCollection.scss'
import TopCollectionItem from './TopCollectionItem'

import img1 from '../../images/profile/profile_18.jpg'
import img2 from '../../images/profile/profile_19.jpg'
import img3 from '../../images/profile/profile_20.jpg'
import company1 from '../../images/profile/company_1.jpg'
import company2 from '../../images/profile/company_2.jpg'
import company3 from '../../images/profile/company_3.jpg'

const tops = [
	{
		name: 'Punk Art Collection',
		img: img1,
		createdBy: 'James Watson',
		company: company1,
	},
	{
		name: 'Punk Art Collection',
		img: img2,
		createdBy: 'James Watson',
		company: company2,
	},
	{
		name: 'Punk Art Collection',
		img: img3,
		createdBy: 'James Watson',
		company: company3,
	},
]

function TopCollection() {
	return (
		<div className='collection'>
			<div className='collection__top'>
				<h2 className='collection__title'>Top Collection</h2>
				<p className='collection__desc'>
					The largest and unique Super rare NFT marketplace For
					crypto-collectibles
				</p>
			</div>
			<div className='collection__bottom'>
				{tops.map((top, index) => {
					return <TopCollectionItem key={index} {...top} />
				})}
			</div>
			<button className='collection__btn'>Explore more</button>
		</div>
	)
}

export default TopCollection
