import '/js/utils/custom-element.js'
import '/js/utils/utils.js'
import '/js/utils/web-components.js'

import fitnessPrograms from '/js/routes/fitness-programs.js';
import login from '/js/routes/login.js';
import videos from '/js/routes/videos.js';

const pathname = location.pathname
const index = pathname.lastIndexOf('/')
const modPathname = pathname.slice(0, index) || '/'

switch (modPathname) {
	case '/fitness-programs':
		fitnessPrograms();
		break;

	case '/videos':
		videos();
		break;

	case '/':
		fitnessPrograms();
		break;

	case '/login':
		login();
		break;
}