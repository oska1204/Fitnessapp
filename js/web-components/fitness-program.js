customElements.define(
    'c-fitness-program',
    class extends CustomElement {
        constructor() {
            super();
        }

        connectedCallback() {
            const { program } = this.data

            this.innerHTML = `
                <h1>${program.heading}</h1>
                ${wrap`<p>${program.paragraphs}</p>`}
                ${wrapArr`
                    ${program.videos}
                    <article>
                        <h3>${'heading'}</h3>
                        ${[
                            '<p>',
                            'paragraphs',
                            '</p>'
                        ]}
                        <div class="video">
                            <iframe src="${'video'}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </article>
                `}
            `
        }
    }
);
