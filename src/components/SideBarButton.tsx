import "../styles/SideBarButton.css";

interface props {
	onClick: () => void;
}

export default function SideBarButton(props: props) {
	return (
		<>
			<button className="toggler-button" onClick={props.onClick}>
				<span className="decorator"></span>
				<span className="decorator"></span>
				<span className="decorator"></span>
				<span className="decorator"></span>
			</button>
		</>
	);
}
