import getData from '/src/js/utils/get-data.js'
import getPath from '/src/js/utils/get-path.js'
import setPath from '/src/js/utils/set-path.js'
import temp from '/src/js/utils/temp.js'
import toggleTheme from '/src/js/utils/toggle-theme.js';
import wrap from '/src/js/utils/wrap.js'
import wrapArr from '/src/js/utils/wrap-arr.js'

HTMLElement.prototype.getData = getData

window.getPath = getPath
window.setPath = setPath
window.temp = temp
window.toggleTheme = toggleTheme
window.wrap = wrap
window.wrapArr = wrapArr