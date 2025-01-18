import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const ServiceEvaluation = ({ onChange, percentage, elementId, children }) => {
	return (
		<div className="form-row">
			<label>{children}</label>
			<FormControl fullWidth>
				<InputLabel
					id={elementId}
					sx={{
						color: "var(--color-c)",
						"&:hover": {
							color: "var(--color-c)",
						},
						"&.Mui-focused": {
							color: "var(--color-blue)",
						},
					}}
				>
					Select
				</InputLabel>
				<Select
					labelId={elementId}
					label="Select"
					value={percentage}
					onChange={onChange}
					size="small"
					fullWidth
					sx={{
						"& .MuiOutlinedInput-notchedOutline": {
							borderColor: "var(--color-c)",
						},
						"&:hover .MuiOutlinedInput-notchedOutline": {
							borderColor: "var(--color-c)",
						},
						"&.Mui-focused .MuiOutlinedInput-notchedOutline": {
							borderColor: "var(--color-blue)",
						},
						"& .MuiInputBase-input": {
							color: "var(--color-c)",
						},
						"&:hover .MuiInputBase-input": {
							color: "var(--color-c)",
						},
						"&.Mui-focused .MuiInputBase-input": {
							color: "var(--color-c)",
						},
					}}
				>
					<MenuItem value="0">Dissatisfied (0%)</MenuItem>
					<MenuItem value="5">It was okay (5%)</MenuItem>
					<MenuItem value="10">It was good (10%)</MenuItem>
					<MenuItem value="20">Absolutely amazing! (20%)</MenuItem>
				</Select>
			</FormControl>
		</div>
	);
};

export default ServiceEvaluation;
