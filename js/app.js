import '/js/utils/custom-element.js'
import '/js/utils/web-components.js'
import '/js/utils/link.js'

import fitnessPrograms from '/js/routes/fitness-programs.js';
import login from '/js/routes/login.js';
import videos from '/js/routes/videos.js';

import html from '/js/utils/html.js'
import temp from '/js/utils/temp.js'
import wrap from '/js/utils/wrap.js'
import wrapArr from '/js/utils/wrapArr.js'

window.html = html
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