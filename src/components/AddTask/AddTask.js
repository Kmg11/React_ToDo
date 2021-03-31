import "./AddTask.css";

function AddTask(props) {
	const addNewTask = (e) => {
		e.preventDefault();

		const input = e.target.querySelector(".add-task-input");

		if (input.value !== "") {
			props.addNewTask(input.value);
			input.value = "";
		}
	};

	return (
		<div className="add-task">
			<form className="add-task-form" onSubmit={addNewTask}>
				<input
					type="text"
					placeholder="Create Task"
					autoFocus
					className="add-task-input"
				/>

				<input type="submit" value="+" className="add-task-btn" />
			</form>
		</div>
	);
}

export default AddTask;
