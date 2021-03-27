import React, { Component } from "react";
import PropTypes from "prop-types";
import { nanoid } from "nanoid";

import "./index.css";

export default class Header extends Component {
	static propTypes = {
		addTodoItem: PropTypes.func.isRequired
	};

	addTodoItem = e => {
		const { keyCode, target } = e;
		if (keyCode !== 13) return false;
		if (target.value.trim() === "") return alert("输入的名称不能为空!");
		this.props.addTodoItem({ id: nanoid(), value: target.value, done: false });
		target.value = "";
	};

	render() {
		return (
			<div>
				<div className="todo-header">
					<input type="text" onKeyUp={this.addTodoItem} placeholder="请输入您的代办事项名称，按回车键确认" />
				</div>
			</div>
		);
	}
}
