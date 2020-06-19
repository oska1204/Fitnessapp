import '/js/utils/custom-element.js'
import '/js/utils/web-components.js'

import fitnessPrograms from '/js/routes/fitness-programs.js';
import login from '/js/routes/login.js';
import videos from '/js/routes/videos.js';

import getData from '/js/utils/get-data.js'
import getPath from '/js/utils/get-path.js'
import setPath from '/js/utils/set-path.js'
import temp from '/js/utils/temp.js'
import wrap from '/js/utils/wrap.js'
import wrapArr from '/js/utils/wrapArr.js'

HTMLElement.prototype.getData = getData

window.getPath = getPath
window.setPath = setPath
window.temp = temp
window.wrap = wrap
window.wrapArr = wrapArr

const pathname = location.pathname
const index = pathname.lastIndexOf('/') + 1
const modPathname = pathname.slice(0, index)

switch (modPathname) {
	case '/fitness-programs/':
		fitnessPrograms();
		break;

	case '/videos/':
		videos();
		break;

	case '/':
		fitnessPrograms();
		break;

	case '/login/':
		login();
		break;
}