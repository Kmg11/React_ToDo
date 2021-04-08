import { Component } from "react";

class Form extends Component {
	render() {
		const { addTask, handleChange, inputValue } = this.props;

		return (
			<form className="form" onSubmit={addTask}>
				<input
					type="text"
					value={inputValue}
					onChange={handleChange}
					placeholder="Create Task"
					autoFocus
					className="add-task-input"
				/>
				<input type="submit" value="+" className="add-task-btn" />
			</form>
		);
	}
}

export default Form;
