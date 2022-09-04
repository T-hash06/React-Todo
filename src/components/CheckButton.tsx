import "../styles/CheckButton.css";

import { FiCheck } from "react-icons/fi";
import { useState } from "react";

interface props {
	onClick: () => void;
	isCheked: boolean;
}

export default function CheckButton({ onClick, isCheked }: props) {
	const [checked, setChecked] = useState(isCheked);

	const handleToggle = () => {
		setChecked(!checked);
		onClick();
	};
	return (
		<>
			<button className={`check-button ${checked ? "checked" : ""}`} onClick={handleToggle}>
				<FiCheck className="check-icon" />
			</button>
		</>
	);
}
