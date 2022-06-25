import { FC } from 'react'
import './App.css'

import Zipcode from 'components/Zipcode'

const App: FC = () => {
	return (
		<div className='app'>
			<h1 className='title'>Ergeon - American Zipcode</h1>
			<Zipcode />
		</div>
	)
}

export default App
