let isDark = null
try {
    isDark =  JSON.parse(localStorage.getItem('darkTheme'))
} catch (err) {
    console.error(err)
}
export default function toggleTheme() {
    const classList = document.documentElement.classList

    classList.remove('dark-theme')
    classList.remove('light-theme')

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
    isDark = !isDark
    localStorage.setItem('darkTheme', isDark)
}
