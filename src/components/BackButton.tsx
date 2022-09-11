import "../styles/BackButton.css";

import { FaArrowLeft } from "react-icons/fa";

interface props {
	onClick: () => void;
}

export default function BackButton({ onClick }: props) {
	return (
		<>
			<button className="back-button" onClick={onClick}>
				<FaArrowLeft />
			</button>
		</>
	);
}
