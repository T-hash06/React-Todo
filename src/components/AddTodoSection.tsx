import "../styles/AddTodoSection.css";

import { sectionActive, toggleSection } from "../stores/TodoSection";
import { ChangeEvent, MouseEvent, useState } from "react";
import { useStore } from "@nanostores/react";
import { addTodo } from "../stores/Todos";

import RectButton from "./RectButton";

export default function AddTodoSection() {
	const isActive = useStore(sectionActive);
	const [newTodo, setTodo] = useState("");

	const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
		setTodo(event.target.value);
	};

	const handleAddTodo = (event: MouseEvent) => {
		if (newTodo === "") return;

		addTodo(newTodo);
		setTodo("");
		toggleSection();
	};

	return (
		<>
			<div id="add-todo-section" className={isActive ? "active" : ""}>
				<div className="text-section">
					<div className="text-area-container">
						<textarea className="text-area" onChange={handleChange} value={newTodo} />
					</div>
				</div>
				<div className="buttons-section">
					<RectButton content="add" main onClick={handleAddTodo} />
					<RectButton content="cancel" onClick={toggleSection} />
				</div>
			</div>
		</>
	);
}
