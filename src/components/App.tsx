import "../styles/App.css";

import { sectionActive, toggleSection } from "../stores/TodoSection";
import { isActive, toggleActive } from "../stores/SideBar";
import { MouseEvent, useEffect } from "react";
import { setTodos } from "../stores/Todos";

import AddTodoBar from "./AddTodoBar";
import TitleBar from "./TitleBar";
import TodoList from "./TodoList";
import SideBar from "./SideBar";

export default function App() {
	useEffect(() => {
		const storedData = localStorage.getItem("todos");

		if (storedData === null) localStorage.setItem("todos", JSON.stringify([]));
		else setTodos(JSON.parse(storedData) as unknown as Todo[]);
	});

	const handleClick = (_: MouseEvent) => {
		if (isActive.get()) {
			toggleActive();
		}

		if (sectionActive.get()) {
			toggleSection();
		}
	};

	return (
		<>
			<div id="main-app-container">
				<SideBar />
				<div id="main-container">
					<TitleBar title="all tasks" />
					<TodoList onClick={handleClick} />
					<AddTodoBar />
				</div>
			</div>
		</>
	);
}
