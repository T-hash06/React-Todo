import "../styles/TodoItem.css";

interface props {
	content: string;
}

export default function TodoItem({ content }: props) {
	return (
		<>
			<li className="todo-container">
				<p className="text">{content}</p>
				<button className="check-button">Hola</button>
			</li>
		</>
	);
}
