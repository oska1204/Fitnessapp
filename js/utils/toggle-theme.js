export default function toggleTheme() {
    const darkTheme = document.documentElement.classList.toggle('dark-theme')
    localStorage.setItem('darkTheme', darkTheme)
}
