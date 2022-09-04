import "../styles/TitleBar.css";

import { toggleActive } from "../stores/SideBar";

import SideBarButton from "./SideBarButton";

interface props {
	title: string;
}

export default function TitleBar({ title }: props) {
	return (
		<>
			<div className="title-bar-container">
				<SideBarButton onClick={toggleActive} />
				<h1 className="title">{title}</h1>
			</div>
		</>
	);
}
