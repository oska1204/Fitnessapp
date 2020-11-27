// This file is only made for convenience.
// Meaning you don't have to manually add the web-components to the web-components file.

// Generates /js/utils/web-components.js that links to all the web-components in the /js/web-components folder.

// If you have node installed, open the console and run this:
// node node-generate.js

const fs = require('fs')

function getFiles(dir, files_) {
    files_ = files_ || [];
    var files = fs.readdirSync(dir);
    for (var i in files) {
        var name = dir + '/' + files[i];
        if (fs.statSync(name).isDirectory()) {
            getFiles(name, files_);
        } else {
            if (name.match(/script\.js$/))
                files_.push(name);
        }
    }
    return files_;
}

const file = getFiles('./src/js/temp-web-components').map(e => `import '${e.slice(1)}'`).join('\n')

fs.writeFile('./src/js/utils/temp-web-components.js', file, err => {
    if (err !== null)
        console.error(err)
})