const Activity = ({ activity, updateFields }) => {
	return (
		<div className="activityForm">
			<select
				onChange={(e) => updateFields({ activity: e.target.value })}
				value={activity ? activity : ""}
				required
			>
				<optgroup>
					<option value="">Select favorite activity</option>
					<option value="running">Running</option>
					<option value="swimming">Swimming</option>
					<option value="hiking">Hiking</option>
					<option value="staying inside">Staying inside</option>
				</optgroup>
			</select>
		</div>
	);
};

export default Activity;
