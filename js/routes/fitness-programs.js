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
				program: [
					{
						heading: 'Video',
						paragraphs: ['Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, numquam accusamus quaerat voluptates odio ex suscipit odit? Suscipit veritatis dolore, repellendus illo soluta perspiciatis pariatur rem alias corporis voluptate cumque.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati dolorum sapiente delectus fuga repudiandae beatae hic minima mollitia voluptate, maxime esse corporis sequi possimus reiciendis. Sunt rerum nisi suscipit voluptatum!'],
						video: 'https://youtube.com/embed/-FlxM_0S2lA',
					},
					{
						heading: 'Video',
						paragraphs: 'Ok',
						video: 'https://youtube.com/embed/-FlxM_0S2lA',
					},
				],
			},
			{
				heading: 'Overkrop øvelser program',
				paragraphs: [
					'Consequuntur maiores et dicta neque. Deserunt ab dolor odio. Sunt sit enim numquam nostrum aperiam corrupti et officia.',
					'Nesciunt at quia deserunt. Illo corrupti repellendus iste. Minima quo tenetur qui. Ut quos omnis laborum ut porro. Voluptatem.',
				],
				program: 'id',
			},
			{
				heading: 'Bliv sommerklar',
				paragraphs: [
					'Consequuntur maiores et dicta neque. Deserunt ab dolor odio. Sunt sit enim numquam nostrum aperiam corrupti et officia.',
					'Nesciunt at quia deserunt. Illo corrupti repellendus iste. Minima quo tenetur qui. Ut quos omnis laborum ut porro. Voluptatem.',
				],
				program: 'id',
			},
			{
				heading: 'Fjern din computernakke',
				paragraphs: [
					'Consequuntur maiores et dicta neque. Deserunt ab dolor odio. Sunt sit enim numquam nostrum aperiam corrupti et officia.',
					'Nesciunt at quia deserunt. Illo corrupti repellendus iste. Minima quo tenetur qui. Ut quos omnis laborum ut porro. Voluptatem.',
				],
				program: 'id',
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
				<c-main-heading data-heading="${setPath(data.main.heading)}" data-paragraphs="${setPath(data.main.paragraphs)}">
				</c-main-heading>
				<c-fitness-programs-section data-articles="${setPath(data.main.articles)}">
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
