import fitnessPrograms from '/js/routes/fitness-programs.js';
import login from '/js/routes/login.js';
import videos from '/js/routes/videos.js';

if (localStorage.getItem('darkTheme') === 'true')
	document.documentElement.classList.add('dark-theme');

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
