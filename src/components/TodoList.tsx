import "../styles/TodoList.css";

import { useStore } from "@nanostores/react";
import { todos } from "../stores/Todos";
import { MouseEvent } from "react";

import TodoItem from "./TodoItem";

interface props {
	onClick: (event: MouseEvent) => void;
}

export default function TodoList({ onClick }: props) {
	const todoList = useStore(todos);
	return (
		<>
			<ul id="todo-list-container" onClick={onClick}>
				{todoList.map((value, index) => (
					<TodoItem todo={value} key={index} id={index} />
				))}
			</ul>
		</>
	);
}
