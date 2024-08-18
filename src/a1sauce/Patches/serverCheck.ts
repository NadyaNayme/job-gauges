import { A1Sauce } from "..";
import { tempTooltip } from "../Utils/tempTooltip";

export const getVersion = async (versionUrl: string): Promise<string> => {
	let latest = await fetch(versionUrl, {
		method: 'GET',
		headers: {
			'Content-type': 'application/json; charset=UTF-8',
		},
	})
		.then((res) => {
			let latestVersion = res.json();
			return latestVersion;
		})
		.then((latestVersion) => {
			return latestVersion;
		});
	return latest;
};

export const startVersionChecking = async (versionUrl: string) => {
	let version = await getVersion(versionUrl);
	updateTooltip(version);

	setInterval(async () => {
		let version = await getVersion(versionUrl);
		updateTooltip(version);
	}, 1000 * 60 * 15);
};

export const updateTooltip = (version: string) => {
	const sauce = A1Sauce.instance;
	if (version === sauce.getVersion()) {
		tempTooltip(
			`A new update for ${sauce.getPublicName()} is available! Reload ${sauce.getPublicName()} for update.`,
			3000
		);
	}
}
