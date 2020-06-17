/*test*/ const data = {
	main: {
		heading: 'Træningsprogram',
		paragraphs: 'Tryk på en plan for at ændre den eller <a class="create-plan" href="#">opret en ny plan</a>',
		articles: [
			{
				heading: 'Ben program',
				paragraphs: [
					'Consequuntur maiores et dicta neque. Deserunt ab dolor odio. Sunt sit enim numquam nostrum aperiam corrupti et officia.',
					'Nesciunt at quia deserunt. Illo corrupti repellendus iste. Minima quo tenetur qui. Ut quos omnis laborum ut porro. Voluptatem.',
				],
			},
			{
				heading: 'Overkrop øvelser program',
				paragraphs: [
					'Consequuntur maiores et dicta neque. Deserunt ab dolor odio. Sunt sit enim numquam nostrum aperiam corrupti et officia.',
					'Nesciunt at quia deserunt. Illo corrupti repellendus iste. Minima quo tenetur qui. Ut quos omnis laborum ut porro. Voluptatem.',
				],
			},
			{
				heading: 'Bliv sommerklar',
				paragraphs: [
					'Consequuntur maiores et dicta neque. Deserunt ab dolor odio. Sunt sit enim numquam nostrum aperiam corrupti et officia.',
					'Nesciunt at quia deserunt. Illo corrupti repellendus iste. Minima quo tenetur qui. Ut quos omnis laborum ut porro. Voluptatem.',
				],
			},
			{
				heading: 'Fjern din computernakke',
				paragraphs: [
					'Consequuntur maiores et dicta neque. Deserunt ab dolor odio. Sunt sit enim numquam nostrum aperiam corrupti et officia.',
					'Nesciunt at quia deserunt. Illo corrupti repellendus iste. Minima quo tenetur qui. Ut quos omnis laborum ut porro. Voluptatem.',
				],
			},
		],
	},
};


export default function fitnessPrograms() {
	window.data = data

	const template = document.createElement('template');
	// Visual Studio Code: Ctrl K + M --> HTML
	// Visual Studio Code: Ctrl K + M --> JavaScript

	template.innerHTML = `
		<header>
			<c-header></c-header>
		</header>
		<div class="wrapper">
			<main>
				<c-main-heading data-heading="${setPath(data.main.heading)}" data-paragraphs="data.main.paragraphs">
				</c-main-heading>
				<c-fitness-programs-section data-articles="data.main.articles">
				</c-fitness-programs-section>
			</main>
		</div>
	`;

	document.body.appendChild(template.content);

	const createPlan = document.querySelector('.create-plan')
	createPlan.addEventListener('click', function (event) {
		document.body.insertAdjacentHTML('beforeend', `
				<c-modal data-confirm="Slut, uden at gemme?">
					<c-create-plan></c-create-plan>
				</c-modal>
			`)
	})
}
