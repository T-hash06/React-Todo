import "../styles/TodoItem.css";

import { toggleTodo } from "../stores/Todos";
import { useState } from "react";

import CheckButton from "./CheckButton";

interface props {
	todo: Todo;
	id: number;
}

export default function TodoItem({ todo, id }: props) {
	const [done, setDone] = useState(todo.done);

	const handleClick = () => {
		setDone(!done);
		toggleTodo(id);
	};
	return (
		<>
			<li className={`todo-container ${todo.done ? "done" : ""}`}>
				<p className="text">
					{todo.content}
					<span className="decorator" />
				</p>
				<CheckButton onClick={handleClick} isCheked={todo.done} />
			</li>
		</>
	);
}
