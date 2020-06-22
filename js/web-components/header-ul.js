customElements.define(
    'c-header-ul',
    class extends CustomElement {
        constructor() {
            super();
        }

        connectedCallback() {
            const { links } = this.data

            links.forEach(link => {
                this.insertAdjacentHTML('beforeend', `
                    <c-header-li data-raw="${setPath(link)}"></c-header-li>
                `)
            });

            this.insertAdjacentHTML('beforeend', `
                <c-header-li><a class="btn btn-toggle-theme">☼</a></c-header-li>
            `)

			const btnToggleTheme = this.querySelector('.btn-toggle-theme');

			btnToggleTheme.addEventListener('click', toggleTheme);
        }
    }
);