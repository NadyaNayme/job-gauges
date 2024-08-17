import { SettingsManager } from './Settings/index';

export class A1Sauce {
	static #instance: A1Sauce;
	Settings: SettingsManager = SettingsManager.instance;

	private constructor() {}

	public static get instance(): A1Sauce {
		if (!A1Sauce.#instance) {
			A1Sauce.#instance = new A1Sauce();
			A1Sauce.#instance.Settings = SettingsManager.instance;
		}
		return A1Sauce.#instance;
	}

	public createSettings = (): SettingsManager => {
		this.Settings = SettingsManager.instance;
		return this.Settings;
	}

	public setName = (name: string): A1Sauce => {
		this.Settings.setName(name);
		return this;
	}

	public getName = (): string => {
		return this.Settings.getName();
	}

	public setVersion = (major: number, minor: number, patch: number) => {
		this.Settings.majorVersion = major;
		this.Settings.minorVersion = minor;
		this.Settings.patchVersion = patch;
		return this;
	}

	public getVersion = () => {
		const major = this.Settings.majorVersion;
		const minor = this.Settings.minorVersion;
		const patch = this.Settings.patchVersion;
		return `${major}.${minor}.${patch}`
	}
}
