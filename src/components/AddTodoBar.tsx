import "../styles/AddTodoBar.css";
import AddTodoSection from "./AddTodoSection";
import { toggleSection } from "../stores/TodoSection";

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
