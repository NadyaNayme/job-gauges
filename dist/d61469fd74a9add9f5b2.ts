var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _a, _A1Sauce_instance;
import { SettingsManager } from './Settings/index';
import { capitalizeAppName } from './Utils/capitalizeName';
export class A1Sauce {
    constructor() {
        this.Settings = SettingsManager.instance;
        this.createSettings = () => {
            this.Settings = SettingsManager.instance;
            return this.Settings;
        };
        this.setName = (name) => {
            this.Settings.setName(name);
            this.setPublicName(name);
            return this;
        };
        this.setPublicName = (name) => {
            this.publicName = capitalizeAppName(name);
            return this;
        };
        this.getName = () => {
            return this.Settings.getName();
        };
        this.getPublicName = () => {
            return this.publicName;
        };
        this.setVersion = (major, minor, patch) => {
            this.Settings.majorVersion = major;
            this.Settings.minorVersion = minor;
            this.Settings.patchVersion = patch;
            return this;
        };
        this.getVersion = () => {
            const major = this.Settings.majorVersion;
            const minor = this.Settings.minorVersion;
            const patch = this.Settings.patchVersion;
            return `${major}.${minor}.${patch}`;
        };
    }
    static get instance() {
        if (!__classPrivateFieldGet(_a, _a, "f", _A1Sauce_instance)) {
            __classPrivateFieldSet(_a, _a, new _a(), "f", _A1Sauce_instance);
            __classPrivateFieldGet(_a, _a, "f", _A1Sauce_instance).Settings = SettingsManager.instance;
        }
        return __classPrivateFieldGet(_a, _a, "f", _A1Sauce_instance);
    }
}
_a = A1Sauce;
_A1Sauce_instance = { value: void 0 };
