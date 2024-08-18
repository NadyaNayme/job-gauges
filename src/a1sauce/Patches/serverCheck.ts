import { appName, majorVersion, minorVersion, patchVersion } from "../../data/constants";
import { capitalizeAppName } from "../Utils/capitalizeName";
import { timeout } from "../Utils/timeout";

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
					`A new update for ${capitalizeAppName(
						appName
					)} is available! Reload ${capitalizeAppName(
						appName
					)} for update.`
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
	checkVersion(`${majorVersion}.${minorVersion}.${patchVersion}`);
	setInterval(() => {
		checkVersion(`${majorVersion}.${minorVersion}.${patchVersion}`);
	}, 1000 * 60 * 15);
}
