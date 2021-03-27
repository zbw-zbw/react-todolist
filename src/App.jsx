import React, { Component } from "react";

import axios from "axios";

import "./App.css";

import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";

export default class App extends Component {
	state = {
		list: [
			{
				id: 1,
				value: "吃饭",
				done: false
			},
			{
				id: 2,
				value: "睡觉",
				done: false
			},
			{
				id: 3,
				value: "敲代码",
				done: false
			}
		]
	};

	// axios Demo Start

	// getStudentData = () => {
	// 	axios
	// 		.get("http://localhost:3000/api1/students")
	// 		.then(res => {
	// 			console.log("学生信息：", res.data);
	// 		})
	// 		.catch(err => {
	// 			console.log(err);
	// 		});
	// };

	// getCarsData = () => {
	// 	axios
	// 		.get("http://localhost:3000/api2/cars")
	// 		.then(res => {
	// 			console.log("汽车信息：", res.data);
	// 		})
	// 		.catch(err => {
	// 			console.log(err);
	// 		});
	// };

	// componentDidMount() {
	// 	this.getStudentData();
	// 	this.getCarsData();
	// }

	// axios Demo End

	// 添加一个todo
	addTodoItem = newToDo => {
		const { list } = this.state;
		this.setState({ list: [newToDo, ...list] });
	};

	// 删除一个todo
	deleteItem = index => {
		const newList = this.state.list;
		newList.splice(index, 1);
		this.setState({ list: newList });
	};

	// 更新todo列表
	changeTodoDone = index => {
		const newList = this.state.list;
		newList[index].done = !newList[index].done;
		this.setState({ list: newList });
	};

	// 是否全选todo列表
	toggleSelectAll = done => {
		const newList = this.state.list.map(item => {
			return { ...item, done };
		});
		this.setState({ list: newList });
	};

	delAllDoneItem = () => {
		const newList = this.state.list.filter(item => !item.done);
		this.setState({ list: newList });
	};

	render() {
		const { list } = this.state;
		return (
			<div>
				<div className="todo-container">
					<div className="todo-wrap">
						<Header addTodoItem={this.addTodoItem} />
						<List list={list} delItem={this.deleteItem} changeTodoDone={this.changeTodoDone} />
						<Footer list={list} toggleSelectAll={this.toggleSelectAll} delAllDoneItem={this.delAllDoneItem} />
					</div>
				</div>
			</div>
		);
	}
}
