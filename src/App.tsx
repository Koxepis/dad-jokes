import Jokes from './components/Jokes';
import React, { useState, useEffect } from 'react';

function App() {
	const [
		joke,
		setJoke
	] = useState(null);

	const fetchJoke = async () => {
		try {
			const congif = { headers: { Accept: 'application/json' } };

			await fetch('https://icanhazdadjoke.com', congif)
      .then((res) => res.json())
      .then(json => setJoke(json.joke));
		} catch (error) {
			console.error(error);
		}
	};

	const generate = async () => {
		await fetchJoke();
	};

	//as soon as the page loads, it's gonna grab the jokes from the state
	useEffect(() => {
		(async () => {
			await fetchJoke();
		})();
	}, []);

	return (
		<div className="App">
			<Jokes joke={joke} />
			<button onClick={generate}>More, Please</button>
		</div>
	);
}

export default App;
