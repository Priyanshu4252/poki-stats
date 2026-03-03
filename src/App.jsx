import Cards from './Cards.jsx'
import Header from './Header.jsx'
import Bar from './search_bar.jsx';
import React, { useState } from "react";

function App() {
	const ids = Array.from({length:100},function(_,i){
		return i+1;
	})

	const [searchValue, setSearchValue] = useState("");

	function handleSearch(value) {
    	setSearchValue(value);
	}
	
	return(
		<>
			<Header/>
			<Bar onSearch={handleSearch}/>
			<div id='grid'>
				{searchValue === "" ? ids.map(function(id) {
						return <Cards key={id} i={id} />;
					})  
					: <Cards key={searchValue} i={searchValue} />
				}
			</div>
		</>
  	)
}

export default App
