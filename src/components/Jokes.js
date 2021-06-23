import React from 'react';

function Jokes({ joke }) {
	return (
		<div className="joke">
			<div className="title">A Dad Throws A Joke. He said:</div>
			<blockquote>{joke}</blockquote>
		</div>
	);
}

export default Jokes;
