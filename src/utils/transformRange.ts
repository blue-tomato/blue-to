const transformRange = (oldMin: number, oldMax: number, newMin: number, newMax: number, value: number) => {
	const oldRange = oldMax - oldMin;
	const newRange = newMax - newMin;

	if (oldRange === 0) {
		return newMin;
	}

	const newValue = ((value - oldMin) * newRange) / oldRange + newMin;

	return Math.min(Math.max(newValue, newMin), newMax);
};

export default transformRange;
