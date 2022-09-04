import "../styles/TodoItem.css";

import { MouseEvent } from "react";

import CheckButton from "./CheckButton";

interface props {
	content: string;
}

export default function TodoItem({ content }: props) {
	const handleClick = () => {
		console.log("Clciked");
	};
	return (
		<>
			<li className="todo-container">
				<p className="text">{content}</p>
				<CheckButton onClick={handleClick} />
			</li>
		</>
	);
}
