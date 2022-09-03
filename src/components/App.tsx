import "../styles/App.css";

import SideBar from "./SideBar";
import TitleBar from "./TitleBar";
import { MouseEvent } from "react";
import { isActive, toggleActive } from "../stores/SideBar";

export default function App() {
	const handleClick = (_: MouseEvent) => {
		if (isActive.get()) {
			toggleActive();
		}
	};

	return (
		<div id="main-app-container">
			<SideBar />
			<div id="main-container">
				<TitleBar title="your title" />
				<div id="content" onClick={handleClick}>
					How are you?
				</div>
			</div>
		</div>
	);
}
