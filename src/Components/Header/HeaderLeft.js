import { useEffect } from 'react'
import Vector from '../../images/background/Vector 31.png'
import TagItem from './TagItem'
import { Group } from '../../images/icons/icons'

const Tags = [
	{ nameTag: 'All' },
	{ nameTag: 'Music' },
	{ nameTag: '3D Abstract' },
	{ nameTag: 'Game' },
	{ nameTag: 'Sprots' },
	{ nameTag: 'Cartoon' },
	{ nameTag: 'Virtual World' },
	{ nameTag: 'Classic' },
]

function HeaderLeft() {
	useEffect(() => {
		const tags = document.querySelectorAll('.tag__item')

		function changeActive() {
			tags.forEach(tag => {
				tag.classList.remove('tag__item--active')
				this.classList.add('tag__item--active')
			})
		}

		tags.forEach(tag => tag.addEventListener('click', changeActive))
	}, [])

	return (
		<div className='header__left'>
			<div className='header__top'>
				<h1 className='header__top--title'>
					Super NFT <span className='header__top--desc'>Marketplace</span>
				</h1>
				<img className='header__vector' src={Vector} alt='Vector' />
				<p className='header__desc'>
					The largest and unique Super rare NFT marketplace For
					crypto-collectibles
				</p>
				<div className='header__button'>
					<button className='button__fill'>Connect Wallet</button>
					<button className='button__line'>
						Create NFTs
						<span className='button__line--icon'>
							<Group />
						</span>
					</button>
				</div>
			</div>
			<div className='header__bottom'>
				<h3 className='header__bottom--title'>Last 7 days popular search</h3>
				<div className='tag__list'>
					{Tags.map((tag, index) => {
						return <TagItem key={index} {...tag} index={index} />
					})}
				</div>
			</div>
		</div>
	)
}

export default HeaderLeft
