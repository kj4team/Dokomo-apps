module.exports = Dokomo => class Discord extends Dokomo {
	overrideUserAgent() {
		return window.navigator.userAgent.replace('(KHTML, like Gecko)', '(KHTML, like Gecko) discord/0.0.250')
		.replace('Electron', 'Discord')
		
		return parts.join('(KHTML, like Gecko) discord/0.0.250').replace('Electron', 'Discord').replace('Dokomo', 'Discord');
	}
};
