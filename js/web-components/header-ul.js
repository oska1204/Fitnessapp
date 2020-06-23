customElements.define(
    'c-header-ul',
    class extends CustomElement {
        constructor() {
            super();
        }

        connectedCallback() {
            const { links } = this.data

            this.insertAdjacentHTML('afterbegin', `
                <c-header-li class="btn-toggle-nav">
                    <a class="btn">
                        IlI<!-- Empty content -->
                        <div>
                            <div>
                                <div class="line"></div>
                                <div class="line"></div>
                                <div class="line"></div>
                            </div>
                        </div>
                    </a>
                </c-header-li>
            `)

            links.forEach(link => {
                this.insertAdjacentHTML('beforeend', `
                    <c-header-li data-raw="${setPath(link)}"></c-header-li>
                `)
            });

            this.insertAdjacentHTML('beforeend', `
                <c-header-li><a class="btn btn-toggle-theme">☼</a></c-header-li>
            `)

			const btnToggleNav = this.querySelector('.btn-toggle-nav');
			const btnToggleTheme = this.querySelector('.btn-toggle-theme');

            btnToggleTheme.addEventListener('click', toggleTheme);
            
            btnToggleNav.addEventListener('click', e => btnToggleNav.classList.toggle('toggled'))
        }
    }
);