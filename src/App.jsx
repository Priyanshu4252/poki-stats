import Cards from './Cards.jsx'
import Header from './Header.jsx'

function App() {
	const ids = Array.from({length:1025},function(_,i){
		return i+1;
	})
	return(
		<>
			<Header/>
			<div id='grid'>
				{ids.map(function(id) {
					return <Cards key={id} i={id} />;
				})}
			</div>
		</>
  	)
}

export default App
