import { useState } from "react";
import Activity from "./Activity";
import Food from "./Food";
import Name from "./Name";
import survey from "./assets/survey.svg";
import { useMultistepForm } from "./useMultiStepForm";

const INITIAL_DATA = {
	name: "",
	favouriteFood: "",
	activity: "",
};

export const App = () => {
	const [data, setData] = useState(INITIAL_DATA);
	const [renderResult, setRenderResult] = useState(false);
	const updateFields = (fields) => {
		setData((prev) => {
			return { ...prev, ...fields };
		});
	};
	const { steps, currentStep, step, isFirstStep, isLastStep, back, next } =
		useMultistepForm([
			<Name {...data} updateFields={updateFields} />,
			<Food {...data} updateFields={updateFields} />,
			<Activity {...data} updateFields={updateFields} />,
		]);

	const onSubmit = (e) => {
		e.preventDefault();
		if (!isLastStep) return next();
		setRenderResult(true);
	};

	return (
		<div className="outerContainer">
			<img src={survey} />
			{!renderResult ? (
				<div className="formContainer">
					<form onSubmit={onSubmit}>
						<div className="steps">
							{currentStep + 1} / {steps.length}
						</div>
						{step}
						<div className="buttonContainer">
							{!isFirstStep && (
								<button onClick={back} type="button">
									Back
								</button>
							)}
							<button type="submit">{isLastStep ? "Finish" : "Next"}</button>
						</div>
					</form>
				</div>
			) : (
				<div>
					<h1>Thank you {data.name}!</h1>
					<p>You are a person that really likes {data.favouriteFood}.</p>
					<p>
						When you are not eating {data.favouriteFood}, you like{" "}
						{data.activity}.
					</p>
				</div>
			)}
		</div>
	);
};
