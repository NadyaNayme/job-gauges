self.onmessage = function (event) {
	const data = event.data;
	const group = data.overlayGroup;
	const image = data.imageData;
	const imageWidth = data.imageWidth;
	alt1.overLaySetGroup(group);
	alt1.overLayImage(80, 50, image, imageWidth, Infinity);
};
