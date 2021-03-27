import React, { Component } from "react";
import PropTypes from "prop-types";

import "./index.css";

export default class Footer extends Component {
	static propTypes = {
		list: PropTypes.array.isRequired,
		delAllDoneItem: PropTypes.func.isRequired,
		toggleSelectAll: PropTypes.func.isRequired
	};

	getDoneCount = () => {
		return this.props.list.reduce((pre, cur) => pre + (cur.done ? 1 : 0), 0);
	};

	toggleSelectAll = e => {
		this.props.toggleSelectAll(e.target.checked);
	};
	delAllDoneItem = () => {
		this.props.delAllDoneItem();
	};

	render() {
		const { list } = this.props;
		const doneLength = this.getDoneCount();
		return (
			<div>
				<div className="todo-footer">
					<label>
						<input
							type="checkbox"
							checked={list.length && doneLength === list.length}
							onChange={this.toggleSelectAll}
						/>
					</label>
					<span>
						<span>已完成 {doneLength} </span> / 全部 {list.length}
					</span>
					<button className="btn btn-danger" onClick={this.delAllDoneItem}>
						清除已完成任务
					</button>
				</div>
			</div>
		);
	}
}
