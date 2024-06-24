self.onmessage = function (event) {
	let data = event.data;
	let group = data.overlayGroup;
	let image = data.imageData;
	let imageWidth = data.imageWidth;
	alt1.overLaySetGroup(group);
	alt1.overLayImage(80, 50, image, imageWidth, Infinity);
};
