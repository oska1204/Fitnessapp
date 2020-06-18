import '/js/utils/custom-element.js'
import '/js/utils/web-components.js'

import fitnessPrograms from '/js/routes/fitness-programs.js';
import login from '/js/routes/login.js';
import videos from '/js/routes/videos.js';

import data from '/js/utils/data.js'
import getPath from '/js/utils/get-path.js'
import setPath from '/js/utils/set-path.js'
import temp from '/js/utils/temp.js'
import wrap from '/js/utils/wrap.js'
import wrapArr from '/js/utils/wrapArr.js'

HTMLElement.prototype.getData = data

window.getPath = getPath
window.setPath = setPath
window.temp = temp
window.wrap = wrap
window.wrapArr = wrapArr

const loading = document.querySelector('.loading')
if (loading) loading.style.opacity = 0

switch (location.pathname) {
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