import "../styles/TodoItem.css";

import { deleteTodo, toggleTodo } from "../stores/Todos";
import { useState } from "react";

import DeleteButton from "./DeleteButton";
import CheckButton from "./CheckButton";

interface props {
	todo: Todo;
	id: number;
}

export default function TodoItem({ todo, id }: props) {
	const [done, setDone] = useState(todo.done);
	const handleDone = () => {
		setDone(!done);
		toggleTodo(id);
	};

	const handleDelete = () => {
		deleteTodo(id);
	};
	return (
		<>
			<li className={`todo-container ${todo.done ? "done" : ""}`}>
				<p className="text">
					{todo.content}
					<span className="decorator" />
				</p>
				<CheckButton onClick={handleDone} isCheked={todo.done} />
				<DeleteButton onClick={handleDelete} />
			</li>
		</>
	);
}
