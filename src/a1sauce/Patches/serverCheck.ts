import { A1Sauce } from "..";
import { timeout } from "../Utils/timeout";

const sauce = A1Sauce.instance;

export const checkVersion = async (version: string) => {
	fetch('./version.json', {
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
			if (version != latestVersion.version) {
				alt1.setTooltip(
					`A new update for ${sauce.getPublicName()} is available! Reload ${sauce.getPublicName()} for update.`
				);
				timeout(3000).then(() => {
					alt1.clearTooltip();
				});
			} else {
				console.log(
					`App is running latest version. Expected version: ${latestVersion.version} ; found: ${version}`
				);
			}
		});
}

export const startVersionChecking = () => {
	checkVersion(sauce.getVersion());
	setInterval(() => {
		checkVersion(sauce.getVersion());
	}, 1000 * 60 * 15);
}
