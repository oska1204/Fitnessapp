import header from './html-templates/compiled/header.js';
import fitnessPrograms from './html-templates/compiled/fitness-programs.js';
import videos from './html-templates/compiled/videos.js';
import login from './html-templates/compiled/login.js';
import './utils/crud.js';

if (localStorage.getItem('darkTheme') === 'true')
	document.documentElement.classList.add('dark-theme');

switch (location.pathname) {
	case '/fitness-programs/':
		header();
		fitnessPrograms();
		break;

	case '/videos/':
		header();
		videos();
		break;

	case '/':
		login();
		break;

	default:
		break;
}
