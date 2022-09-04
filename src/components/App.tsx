import "../styles/App.css";

import { sectionActive, toggleSection } from "../stores/TodoSection";
import { isActive, toggleActive } from "../stores/SideBar";
import { useStore } from "@nanostores/react";
import { todos } from "../stores/Todos";
import { MouseEvent } from "react";

import AddTodoBar from "./AddTodoBar";
import TitleBar from "./TitleBar";
import SideBar from "./SideBar";
import TodoList from "./TodoList";

export default function App() {
	const todoList = useStore(todos);

	const handleClick = (_: MouseEvent) => {
		if (isActive.get()) {
			toggleActive();
		}

		if (sectionActive.get()) {
			toggleSection();
		}
	};

	return (
		<div id="main-app-container">
			<SideBar />
			<div id="main-container">
				<TitleBar title="all tasks" />
				<TodoList onClick={handleClick} />
				<AddTodoBar />
			</div>
		</div>
	);
}
