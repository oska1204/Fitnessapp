export default function toggleTheme() {
    const classList = document.documentElement.classList

    classList.remove('dark-theme')
    classList.remove('light-theme')

    let isDark =  JSON.parse(localStorage.getItem('darkTheme'))
    if (isDark === null)
        isDark = matchMedia('(prefers-color-scheme: dark)').matches
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
