import './Footer.scss'

import Logo from '../../images/background/logo.png'
import FooterItem from './FooterItem'
import { Facebook, Linkedin, Twitter } from '../../images/icons/icons'

const links = [
	{
		title: 'Site Map',
		links: [
			{
				name: 'Home',
				path: './home',
			},
			{
				name: 'About',
				path: './about',
			},
			{
				name: 'NFT',
				path: './NFT',
			},
			{
				name: 'Road map',
				path: './roadMap',
			},
			{
				name: 'Blog',
				path: './blog',
			},
			{
				name: 'Contact',
				path: './contact',
			},
		],
	},
	{
		title: 'Company',
		links: [
			{
				name: 'Help & Support',
				path: './help&support',
			},
			{
				name: 'Terms & Conditions',
				path: './terms&conditions',
			},
			{
				name: 'Privacy Policy',
				path: './privacyPolicy',
			},
		],
	},
	{
		title: 'Resource',
		links: [
			{
				name: 'Partner',
				path: './partner',
			},
			{
				name: 'Blog',
				path: './blog',
			},
			{
				name: 'Newsletter',
				path: './newsletter',
			},
		],
	},
]

function Footer() {
	return (
		<div className='footer'>
			<div className='footer__top'>
				<div className='footer__heading'>
					<img className='footer__logo' src={Logo} alt='Logo' />
					<p className='footer__info'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. In urna
						ultrices amet tellus ornare. Faucibus id posuere massa
					</p>
					<ul className='footer__social'>
						<li className='footer__social--item'>
							<a href='#' className='footer__social--link'>
								<Facebook />
							</a>
						</li>
						<li className='footer__social--item'>
							<a href='#' className='footer__social--link'>
								<Linkedin />
							</a>
						</li>
						<li className='footer__social--item'>
							<a href='#' className='footer__social--link'>
								<Twitter />
							</a>
						</li>
					</ul>
				</div>
				{links.map((link, index) => {
					return <FooterItem key={index} {...link} />
				})}
			</div>
			<div className='footer__bottom'>
				<p className='footer__desc'>
					Copyright
					<span className='footer__desc--icon'>
						<svg
							viewBox='0 0 14 15'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'>
							<g clipPath='url(#clip0_1_660)'>
								<path
									d='M7 0.5C3.13396 0.5 0 3.63396 0 7.5C0 11.366 3.13396 14.5 7 14.5C10.866 14.5 14 11.366 14 7.5C13.9957 3.63577 10.8642 0.504272 7 0.5ZM7 13.8001C3.52061 13.8001 0.700043 10.9794 0.700043 7.5C0.700043 4.02061 3.52061 1.20004 7 1.20004C10.4794 1.20004 13.3 4.02061 13.3 7.5C13.296 10.9778 10.4778 13.796 7 13.8001Z'
									fill='white'
								/>
								<path
									d='M7 4.70008C7.81764 4.70414 8.59234 5.06666 9.11946 5.69161C9.24507 5.83859 9.46596 5.8561 9.61303 5.7306C9.76001 5.6051 9.77752 5.3841 9.65202 5.23702C8.40211 3.76249 6.19357 3.58027 4.71904 4.83007C3.2444 6.07987 3.06218 8.28852 4.31209 9.76306C5.56189 11.2376 7.77043 11.4198 9.24507 10.17C9.39161 10.0458 9.52769 9.90971 9.65202 9.76306C9.77752 9.61598 9.76001 9.39509 9.61303 9.26948C9.46596 9.14398 9.24507 9.16149 9.11946 9.30847C8.11757 10.4822 6.35379 10.6215 5.18004 9.6195C4.00639 8.61761 3.86711 6.85383 4.869 5.68008C5.40124 5.05673 6.18033 4.69837 7 4.70008Z'
									fill='white'
								/>
							</g>
							<defs>
								<clipPath id='clip0_1_660'>
									<rect
										width='14'
										height='14'
										fill='white'
										transform='translate(0 0.5)'
									/>
								</clipPath>
							</defs>
						</svg>
					</span>
					<span className='footer__desc--N'>N</span>
					<span className='footer__desc--F'>F</span>
					<span className='footer__desc--T'>T</span>
					<span className='footer__desc--link'>
						core 2022 All right reserved
					</span>
				</p>
			</div>
			<div className='footer__bg'></div>
		</div>
	)
}

export default Footer
