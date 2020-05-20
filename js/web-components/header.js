import '../utils/toggle-theme.js'
import toggleTheme from '../utils/toggle-theme.js';
class HeaderFitnessapp extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
            <link rel="stylesheet" href="css/header.css">
            <div class=".header">
                <h2>Fitnessapp</h2>
                <nav>
                    <ul>
                        <li><a href="#">Træningsprogram</a></li>
                        <li><a href="#">Videoer</a></li>
                        <li><a href="#">Brugere</a></li>
                        <li><a class="btn-toggle-theme">☀</a></li>
                    </ul>
                </nav>
            </div>
        `
        const loaded = function () {
            const btnToggleTheme = document.querySelector('.btn-toggle-theme')
            btnToggleTheme.addEventListener('click', toggleTheme)
        }
        this.addEventListener('DOMContentLoaded', loaded())
    }
}
customElements.define('header--fitness-app', HeaderFitnessapp);