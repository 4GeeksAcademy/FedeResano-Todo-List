import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
	const [inputContent, setinputcontent] = useState("");
	const [list, setlist] = useState([]);
	const [hoveredIndex, setHoveredIndex] = useState(null);

	return (
		<div className="container">
			<h2>To Do List</h2>
			<ul>
				<li>
					<input
						type="text"
						onChange={(e) => setinputcontent(e.target.value)}
						value={inputContent}
						onKeyPress={(e) => {
							if (e.key === "Enter" && inputContent !== "") {
								setlist(list.concat(inputContent));
								setinputcontent("");
							}
						}}
						placeholder="Add items here">
					</input>
				</li>
				{list.map((element, i) => (
					<li key={i} className="list-element"
						onMouseEnter={() => setHoveredIndex(i)}
						onMouseLeave={() => setHoveredIndex(null)}
					>
						{element}
						{hoveredIndex === i && (
							<FontAwesomeIcon icon={faTimes} className="delete-icon" onClick={() => setlist(list.filter((element, currentIndex) => i !== currentIndex))} />
						)}
					</li>
				))}
			</ul>
			{list.length === 0 ?
				(<div> No tasks, add a task </div>) :
				(<div> {list.length} tasks </div>)
			}
		</div>
	)
}
export default Home;