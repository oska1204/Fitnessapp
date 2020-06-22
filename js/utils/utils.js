import getData from '/js/utils/get-data.js'
import getPath from '/js/utils/get-path.js'
import setPath from '/js/utils/set-path.js'
import temp from '/js/utils/temp.js'
import toggleTheme from '/js/utils/toggle-theme.js';
import wrap from '/js/utils/wrap.js'
import wrapArr from '/js/utils/wrapArr.js'

HTMLElement.prototype.getData = getData

window.getPath = getPath
window.setPath = setPath
window.temp = temp
window.toggleTheme = toggleTheme
window.wrap = wrap
window.wrapArr = wrapArr