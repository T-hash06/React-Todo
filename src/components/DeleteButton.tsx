import "../styles/DeleteButton.css";

import { FaTrash } from "react-icons/fa";

interface props {
	onClick: () => void;
}

export default function DeleteButton({ onClick }: props) {
	return (
		<>
			<button className="delete-button" onClick={onClick}>
				<FaTrash className="delete-icon"></FaTrash>
			</button>
		</>
	);
}
