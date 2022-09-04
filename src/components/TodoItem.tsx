import { toggleTodo } from "../stores/Todos";
import "../styles/TodoItem.css";

import CheckButton from "./CheckButton";

interface props {
	todo: Todo;
	id: number;
}

export default function TodoItem({ todo, id }: props) {
	const handleClick = () => {
		toggleTodo(id);
	};

	return (
		<>
			<li className="todo-container">
				<p className="text">{todo.content}</p>
				<CheckButton onClick={handleClick} isCheked={todo.done} />
			</li>
		</>
	);
}
