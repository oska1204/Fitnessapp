const prefersDark = matchMedia('(prefers-color-scheme: dark)').matches
localStorage.setItem('darkTheme', prefersDark)

export default function toggleTheme() {
    const classList = document.documentElement.classList

    classList.remove('dark-theme')
    classList.remove('light-theme')

    const isDark =  JSON.parse(localStorage.getItem('darkTheme'))
    switch (isDark) {
        case true:
            classList.add('light-theme')
            break;

        case false:
            classList.add('dark-theme')
            break;
    }
    localStorage.setItem('darkTheme', !isDark)
}
