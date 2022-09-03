import { toggleActive } from "../stores/SideBar";
import "../styles/TitleBar.css";

interface props {
	title: string;
}

export default function TitleBar({ title }: props) {
	return (
		<div className="title-bar-container">
			<button className="toggle-bar-button" onClick={toggleActive} />
			<h1 className="title">{title}</h1>
		</div>
	);
}
