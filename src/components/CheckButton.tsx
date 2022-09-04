import "../styles/CheckButton.css";

import { useState } from "react";

interface props {
	onClick: () => void;
}

export default function CheckButton({ onClick }: props) {
	const [checked, setChecked] = useState(false);

	const handleToggle = () => {
		setChecked(!checked);
		onClick();
	};
	return (
		<>
			<button className={`check-button ${checked ? "checked" : ""}`} onClick={handleToggle} />
		</>
	);
}
