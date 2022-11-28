import './App.scss'
import Navbar from './Components/Navbar/Navbar'
import Header from './Components/Header/Header'

import background from './images/background/Super NFT landing page.png'
import Description from './Components/Description/Description'
import LiveAuction from './Components/LiveAuction/LiveAuction'
import RoadMap from './Components/RoadMap/RoadMap'
import TopCollection from './Components/TopCollection/TopCollection'
import OurCreator from './Components/OurCreator/OurCreator'
import Footer from './Components/Footer/Footer'

function App() {
	return (
		<div
			style={{
				backgroundImage: `url("${background}")`,
			}}
			className='App'>
			<Navbar />
			<Header />
			<Description />
			<LiveAuction />
			<RoadMap />
			<TopCollection />
			<OurCreator />
			<Footer />
		</div>
	)
}

export default App
