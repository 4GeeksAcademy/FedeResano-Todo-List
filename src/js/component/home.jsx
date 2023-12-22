import React, { useState } from "react";


const Home = () => {
	const [inputContent, setInputContent] = useState("");
	const [list, setList] = useState([]);

	return (
		<div className="container">
			<h2>To Do List</h2>
			<ul>
				<li>
					<input
						type="text"
						onChange={(e) => setInputContent(e.target.value)}
						value={inputContent}
						onKeyPress={(e) => e.key === "Enter" ? setList(list.concat(inputContent)) : null}
						setInputContent=""
						placeholder="Add items here">
						<FontAwesomeIcon icon="fa-solid fa-xmark" />
					</input>
				</li>
				{list.map((element, i) => (
					<li>
						{element} <FontAwesomeIcon icon="fa-solid fa-xmark" onClick={() => setList(list.filter((element, currentIndex) => i !== currentIndex))} />
					</li>
				))}
			</ul>
			<div>{list.length} tasks</div>
		</div >
	);
};

export default Home;
