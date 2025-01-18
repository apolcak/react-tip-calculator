import TextField from "@mui/material/TextField";

const Bill = ({ onChangeBillValue, billValue }) => {
	return (
		<div className="form-row">
			<label>How much was the bill?</label>
			<TextField
				label="Bill"
				type="number"
				variant="outlined"
				size="small"
				value={billValue}
				inputProps={{ min: 0 }}
				onChange={onChangeBillValue}
				sx={{
					"& .MuiOutlinedInput-root": {
						"& fieldset": {
							borderColor: "var(--color-c)",
						},
						"&:hover fieldset": {
							borderColor: "var(--color-c)",
						},
						"&.Mui-focused fieldset": {
							borderColor: "var(--color-blue)",
						},
					},
					"& .MuiInputLabel-root": {
						color: "var(--color-c)",
					},
					"& .MuiInputLabel-root.Mui-focused": {
						color: "var(--color-blue)",
					},
					"& .Mui-focused": {
						color: "var(--color-blue)",
					},
					"& .MuiInputBase-input": {
						color: "var(--color-c)",
					},
				}}
			/>
		</div>
	);
};

export default Bill;
