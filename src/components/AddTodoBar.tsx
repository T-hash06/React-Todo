import "../styles/AddTodoBar.css";

import { toggleSection } from "../stores/TodoSection";

import AddTodoSection from "./AddTodoSection";

export default function AddTodoBar() {
	return (
		<>
			<div id="add-todo-bar">
				<button className="add-todo-button" onClick={toggleSection}>
					<span className="decorator"></span>
					<span className="decorator"></span>
				</button>

				<AddTodoSection />
			</div>
		</>
	);
}
