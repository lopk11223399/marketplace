import CardItem from './CardItem'
import Avatar1 from '../../images/profile/profile_1.jpg'
import Avatar2 from '../../images/profile/profile_2.png'
import Company1 from '../../images/profile/company_1.jpg'
import Company2 from '../../images/profile/company_2.jpg'

const profiles = [
	{
		author: 'John Doe',
		avatar: Avatar1,
		company: 'Golden Hour',
		imgCompany: Company1,
		price: '3.2',
	},
	{
		author: 'John Doe',
		avatar: Avatar2,
		company: 'Golden Hour',
		price: '4.1',
		imgCompany: Company2,
	},
]

function HeaderRight() {
	return (
		<div className='header__right'>
			{profiles.map((profile, index) => {
				return <CardItem key={index} {...profile} />
			})}
		</div>
	)
}

export default HeaderRight
