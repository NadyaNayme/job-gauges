export const capitalizeAppName = (str: string): string => {
	let split_str = [];

	if (str.includes('-') && str.includes(')')) {
		throw new Error(
			'AppName must use either a hyphen or underscore as seperator - not both!'
		);
	}
	if (str.includes('-')) {
		// 'job-gauges'
		split_str = str.split('-');
	}
	// 'job_gauges'
	else if (str.includes('_')) {
		split_str = str.split('_');
	}
	// 'JobGauges'
	else {
		split_str = str.split(/(?=[A-Z])/);
	}

	for (let i = 0; i < split_str.length; i++) {
		split_str[i] = split_str[i][0].toUpperCase() + split_str[i].substr(1);
	}

	return split_str.join(' ');
};
