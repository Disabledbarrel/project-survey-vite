const Name = ({ name, updateFields }) => {
	return (
		<div className="nameForm">
			<label>What is your name?</label>
			<input
				type="text"
				value={name}
				onChange={(e) => updateFields({ name: e.target.value })}
				required
			/>
		</div>
	);
};

export default Name;
