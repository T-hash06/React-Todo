import "../styles/SideBar.css";

import { isActive, toggleActive } from "../stores/SideBar";
import { useStore } from "@nanostores/react";

export default function SideBar() {
	const activeBar = useStore(isActive);

	return (
		<div id="side-bar-container" className={activeBar ? "active" : ""}>
			<button onClick={toggleActive}>close</button>
		</div>
	);
}
