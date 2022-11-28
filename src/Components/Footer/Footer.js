import './Footer.scss'

import Logo from '../../images/background/logo.png'
import FooterItem from './FooterItem'

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
								<svg
									viewBox='0 0 24 24'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'>
									<g clipPath='url(#clip0_1_624)'>
										<path
											d='M17.981 0H6C2.70476 0 0 2.70476 0 6.01905V18C0 21.2952 2.70476 24 6 24H17.981C21.2952 24 24 21.2952 24 17.981V6.01905C24 2.70476 21.2952 0 17.981 0ZM15.219 12H12.9524V19.4286H10.0952V12H8.57143V8.95238H9.90476V7.65714C9.90476 6.4381 10.5143 4.51429 13.0857 4.51429H15.4286V7.04762H13.7714C13.5048 7.04762 13.1429 7.21905 13.1429 7.80952V8.95238H15.4857L15.219 12Z'
											fill='#ffffff'
										/>
									</g>
									<defs>
										<clipPath id='clip0_1_624'>
											<rect width='24' height='24' fill='white' />
										</clipPath>
									</defs>
								</svg>
							</a>
						</li>
						<li className='footer__social--item'>
							<a href='#' className='footer__social--link'>
								<svg
									viewBox='0 0 24 24'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'>
									<g clipPath='url(#clip0_1_628)'>
										<path
											d='M17.9667 0.00952148H6.01427C2.70262 0.00952148 0 2.71214 0 6.0238V17.9952C0 21.2879 2.70262 23.9905 6.01427 23.9905H17.9857C21.2974 23.9905 24 21.2879 24 17.9762V6.0238C23.981 2.71214 21.2784 0.00952148 17.9667 0.00952148ZM7.99366 19.4227H4.5678V9.52578H7.99366V19.4227ZM6.2617 8.00318C5.29104 8.00318 4.51071 7.22284 4.51071 6.25219C4.51071 5.28153 5.29104 4.50119 6.2617 4.50119C7.23236 4.50119 8.01269 5.28153 8.01269 6.25219C7.99366 7.22284 7.21332 8.00318 6.2617 8.00318ZM19.4322 19.4227H19.4132H16.5583V14.6265C16.5583 13.4655 16.406 11.981 14.8263 11.981C13.2086 11.981 12.9421 13.2371 12.9421 14.5504V19.4227H10.0872V9.52578H12.7518V10.8581H12.8279C13.2466 10.0968 14.2173 9.50675 15.7399 9.50675C18.8803 9.50675 19.4322 11.3148 19.4322 13.9984V19.4227Z'
											fill='#ffffff'
										/>
									</g>
									<defs>
										<clipPath id='clip0_1_628'>
											<rect width='24' height='24' fill='white' />
										</clipPath>
									</defs>
								</svg>
							</a>
						</li>
						<li className='footer__social--item'>
							<a href='#' className='footer__social--link'>
								<svg
									viewBox='0 0 24 24'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'>
									<g clipPath='url(#clip0_1_632)'>
										<path
											d='M17.9667 0.00952148H6.01427C2.70262 0.00952148 0 2.71214 0 6.0238V17.9952C0 21.2879 2.70262 23.9905 6.01427 23.9905H17.9857C21.2974 23.9905 24 21.2879 24 17.9762V6.0238C23.981 2.71214 21.2784 0.00952148 17.9667 0.00952148ZM17.9477 8.99287C17.9477 9.1261 17.9477 9.25932 17.9477 9.39255C17.9477 13.3894 14.8644 17.9952 9.21174 17.9952C7.47978 17.9952 5.86201 17.5004 4.51071 16.6439C4.75813 16.663 4.98652 16.682 5.23394 16.682C6.68041 16.682 7.99366 16.2062 9.04044 15.3878C7.68914 15.3688 6.56622 14.4933 6.16653 13.2942C6.35686 13.3323 6.54719 13.3513 6.73751 13.3513C7.023 13.3513 7.30849 13.3132 7.55591 13.2371C6.18557 12.9516 5.13878 11.7336 5.13878 10.268V10.23C5.51943 10.4584 6.01427 10.5916 6.50912 10.6106C5.69072 10.0777 5.13878 9.14513 5.13878 8.09834C5.13878 7.5464 5.29104 7.03252 5.55749 6.57574C7.0801 8.40286 9.32593 9.60191 11.8763 9.73514C11.8192 9.50675 11.8002 9.27836 11.8002 9.04997C11.8002 7.3751 13.1705 6.0238 14.8644 6.0238C15.7399 6.0238 16.5393 6.38541 17.1102 6.97542C17.8144 6.84219 18.4615 6.59477 19.0515 6.23315C18.8232 6.93736 18.3283 7.52736 17.7002 7.90801C18.3283 7.83188 18.9183 7.67962 19.4703 7.4322C19.0515 8.04124 18.5377 8.57415 17.9477 8.99287Z'
											fill='#ffffff'
										/>
									</g>
									<defs>
										<clipPath id='clip0_1_632'>
											<rect width='24' height='24' fill='white' />
										</clipPath>
									</defs>
								</svg>
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
