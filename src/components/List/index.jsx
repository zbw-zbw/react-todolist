import React, { Component } from "react";
import PropTypes from "prop-types";

import Item from "../Item";

export default class List extends Component {
	state = {};

	static propTypes = {
		list: PropTypes.array.isRequired,
		delItem: PropTypes.func.isRequired,
		changeTodoDone: PropTypes.func.isRequired
	};

	deleteItem = index => {
		this.props.delItem(index);
	};

	changeTodoDone = index => {
		this.props.changeTodoDone(index);
	};

	render() {
		const { list } = this.props;
		return (
			<div>
				{list.length ? (
					<ul className="todo-main">
						{list.map((item, index) => {
							return (
								<Item
									{...item}
									key={item.id}
									delItem={() => this.deleteItem(index)}
									changeTodoDone={() => this.changeTodoDone(index)}
								/>
							);
						})}
					</ul>
				) : (
					<p>您暂无任何的代办事项！</p>
				)}
			</div>
		);
	}
}
