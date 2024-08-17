export const timeout = async (millis: number): Promise<unknown> => {
	return new Promise(function (resolve) {
		setTimeout(resolve, millis);
	});
}
