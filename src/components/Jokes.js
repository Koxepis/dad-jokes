import React from 'react';

function Jokes({ joke }) {
	return (
		<div className="joke">
			{/* Anime */}
			<div className="title">icanhazdadjoke's API</div>
			<blockquote>{joke}</blockquote>
		</div>
	);
}

export default Jokes;
