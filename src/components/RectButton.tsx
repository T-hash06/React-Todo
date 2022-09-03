import { MouseEvent } from "react";
import "../styles/RectButton.css";

interface props {
	main?: boolean;
	content: string;
	onClick: (event: MouseEvent) => void;
}

export default function RectButton({ main, content, onClick }: props) {
	return (
		<>
			<button className={`rect-button ${main ? "main" : ""}`} onClick={onClick}>
				{content}
			</button>
		</>
	);
}
