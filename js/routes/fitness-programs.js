import html from '/js/utils/html.js'

import '/js/web-components/header.js';
import '/js/web-components/main-heading.js';
import '/js/web-components/fitness-programs-section.js'

/*test*/ const data = {
	main: {
		heading: 'Træningsprogram',
		subText: `Tryk på en plan for at ændre den eller <a href="#">opret en ny plan</a>`,
		articles: [
			{
				heading: 'Ben program',
				paragraphs: [
					'Consequuntur maiores et dicta neque. Deserunt ab dolor odio. Sunt sit enim numquam nostrum aperiam corrupti et officia.',
					'Nesciunt at quia deserunt. Illo corrupti repellendus iste. Minima quo tenetur qui. Ut quos omnis laborum ut porro. Voluptatem.',
				],
			},
		],
	},
};

export default function fitnessPrograms() {
	const template = document.createElement('template');
	// Visual Studio Code: Ctrl K + M --> HTML
	// Visual Studio Code: Ctrl K + M --> Javascript
	template.innerHTML = html`
		<link rel="stylesheet" href="/css/fitness-programs.css">
		<header>
			<c-header></c-header>
		</header>
		<div class="wrapper">
			<main>
				<c-main-heading data-heading="${data.main.heading}" data-sub-text="${data.main.subText}">
				</c-main-heading>
				<c-fitness-programs-section data-articles="${JSON.stringify(data.main.articles)}">
				</c-fitness-programs-section>
			</main>
		</div>
	`;

	document.body.appendChild(template.content);
}
