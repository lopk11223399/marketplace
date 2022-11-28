import './Description.scss'
import background from '../../images/background/Group 1261152705.png'

function Description() {
	return (
		<div className='description'>
			<img src={background} alt='' className='description__img' />
			<div className='description__content'>
				<div className='description__heading'>Why choose us?</div>
				<p className='description__desc'>
					Lorem ipsum dolor sit amet consectetur. Congue eu arcu neque um
					semper. Eros suspendisse varius enim ultrices isque et quis ctumst.
					Feugiat amet velit faucibus amet Eu feugiat adipiscing viverrfeugiat.
					Mollis tellus malesuada massa amet lacinia aliquamid ultrices vitae.
				</p>
				<button className='description__btn'>Connect Wallet</button>
			</div>
            <div className="description__bg"></div>
		</div>
	)
}

export default Description
