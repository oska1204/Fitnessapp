import '../compiled/header.js';
import '../content-snippets/main/heading.js';
import '../content-snippets/fitness-programs/article.js';

const styleSheet = document.createElement('link');
styleSheet.rel = 'stylesheet';
styleSheet.href = '/css/fitness-programs.css';
document.head.appendChild(styleSheet);

/*test*/ var data = {
	main: {
		heading: 'Træningsprogram',
		subText: 'Tryk på en plan for at ændre den eller <a href="#">opret en ny plan</a>',
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
	template.innerHTML = `
		<header>
			<c-header></c-header>
		</header>
		<div class="wrapper">
			<main>
				<c-main--heading></c-main--heading>
				<c-articles--fitness-programs></c-articles--fitness-programs>
			</main>
		</div>
	`;
	const mainHeading = template.content.querySelector('c-main--heading');
	const articlesFitnessPrograms = template.content.querySelector('c-articles--fitness-programs');

	document.body.appendChild(template.content);

	mainHeading._data = data.main;
	articlesFitnessPrograms._data = data.main.articles;
}
