import "../styles/SideBar.css";

import { isActive, toggleActive } from "../stores/SideBar";
import { useStore } from "@nanostores/react";

import BackButton from "./BackButton";

export default function SideBar() {
	const activeBar = useStore(isActive);

	return (
		<div id="side-bar-container" className={activeBar ? "active" : ""}>
			<BackButton onClick={toggleActive} />
		</div>
	);
}
