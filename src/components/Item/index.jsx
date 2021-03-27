import React, { Component } from "react";

import "./index.css";

export default class Item extends Component {
	state = { isCurrentItem: false };

	onEnterItem = () => {
		this.setState({ isCurrentItem: true });
	};

	onLeaveItem = () => {
		this.setState({ isCurrentItem: false });
	};

	deleteItem = () => {
		const { value, delItem } = this.props;
		if (window.confirm(`您确定要删除${value}吗？`)) delItem();
	};

	toggleTodoDone = () => {
		this.props.changeTodoDone();
	};
	render() {
		const { isCurrentItem } = this.state;
		const { value, done } = this.props;
		return (
			<div>
				<li
					onMouseOver={this.onEnterItem}
					onMouseOut={this.onLeaveItem}
					style={{ background: isCurrentItem ? "#ddd" : "" }}>
					<label>
						<input type="checkbox" checked={done} onChange={this.toggleTodoDone} />
						<span style={{ paddingLeft: "4px" }}>{value}</span>
					</label>
					<button
						className="btn btn-danger"
						style={{ display: isCurrentItem ? "block" : "none" }}
						onClick={this.deleteItem}>
						删除
					</button>
				</li>
			</div>
		);
	}
}
