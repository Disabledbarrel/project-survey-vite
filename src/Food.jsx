const Food = ({ favouriteFood, updateFields }) => {
	const foodArray = ["pizza", "tacos", "tapas", "burger"];
	return (
		<div className="foodForm">
			<p>Choose your favorite food:</p>
			{foodArray.map((food) => (
				<label key={food}>
					<input
						type="radio"
						value={food}
						name={food}
						onChange={(e) => updateFields({ favouriteFood: e.target.value })}
						checked={favouriteFood === food}
					/>
					{food}
				</label>
			))}
		</div>
	);
};

export default Food;
