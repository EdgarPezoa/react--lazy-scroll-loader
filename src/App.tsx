import React, { useState } from "react";
import "./index.css";

const extraTitles = [
	"Extra Titles",
	"Extra Titles",
	"Extra Titles",
	"Extra Titles",
	"Extra Titles",
];

const App: React.FC = () => {
	const [titles, setTitles] = useState([
		"Title",
		"Title",
		"Title",
		"Title",
		"Title",
	]);

	const onScroll = async (e: any) => {
		if (
			e.target.scrollTop ===
			e.target.scrollHeight - e.target.clientHeight
		) {
			setTitles((oldTitles) => {
				const newTitles = oldTitles.concat(extraTitles);
				return newTitles;
			});
		}
	};
	return (
		<div className="container">
			<h1>React Lazy Scroll Loader</h1>
			<div className="scroll-container" onScroll={onScroll}>
				{titles.map((title, index) => (
					<p key={index}>{`${title} ${index}`}</p>
				))}
			</div>
		</div>
	);
};

export default App;
