import { useState } from "react";
import Bill from "./components/Bill";
import ServiceEvaluation from "./components/ServiceEvaluation";
import Button from "@mui/material/Button";
import "./App.scss";

function App() {
	const [billValue, setBillValue] = useState(0);
	const [tipValues, setTipValues] = useState([0, 0]);

	let tipAverage = (tipValues[0] + tipValues[1]) / 2 / 100;
	let tipValue = Number((Number(billValue) * Number(tipAverage)).toFixed(2));
	let payment = Number(billValue) + tipValue;

	function handleChangeBillValue(e) {
		setBillValue(e.target.value);
	}

	function handleChangeTipValue(e, index) {
		setTipValues((prevTips) => {
			const updatedTips = [...prevTips];
			updatedTips[index] = parseInt(e.target.value);
			return updatedTips;
		});
	}

	function handleReset() {
		setBillValue(0);
		setTipValues([0, 0]);
	}

	return (
		<>
			<h1>Tip calculator</h1>
			<Bill
				billValue={billValue}
				onChangeBillValue={handleChangeBillValue}
			/>
			<ServiceEvaluation
				percentage={tipValues[0]}
				elementId={"tip-you"}
				onChange={(e) => handleChangeTipValue(e, 0)}
			>
				How did you like the service?
			</ServiceEvaluation>
			<ServiceEvaluation
				percentage={tipValues[1]}
				elementId={"tip-friend"}
				onChange={(e) => handleChangeTipValue(e, 1)}
			>
				How did your friend like the service?
			</ServiceEvaluation>
			{payment > 0 && (
				<>
					<h3>
						You pay ${payment} (${billValue} + ${tipValue} tip)
					</h3>
					<hr />
					<Button variant="contained" onClick={handleReset}>
						Reset
					</Button>
				</>
			)}
		</>
	);
}

export default App;
