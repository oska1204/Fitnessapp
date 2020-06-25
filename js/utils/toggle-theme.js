export default function toggleTheme() {
    // matchMedia('(prefers-color-scheme: dark)') jar jar is the key to everything
    const darkTheme = document.documentElement.classList.toggle('dark-theme')
    localStorage.setItem('darkTheme', darkTheme)
}
