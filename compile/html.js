const fs = require('fs')
const { html: beautify_html } = require('js-beautify');

function getFiles(dir, files_) {
    files_ = files_ || {};
    var files = fs.readdirSync(dir);
    for (var i in files) {
        var name = dir + '/' + files[i];
        if (fs.statSync(name).isDirectory()) {
            getFiles(name, files_);
        } else {
            if (name.match(/(body|head)\.html$/)) {
                files_[dir] = files_[dir] || []
                files_[dir].push(name);
            }
        }
    }
    return files_;
}

const base = fs.readFileSync('./compile/html/base.html', 'utf8')

const object = getFiles('.')

const dirs = []

for (const dir in object) {
    if (object.hasOwnProperty(dir)) {
        const arr = object[dir]
        let file = base
        arr.forEach(path => {
            const html = fs.readFileSync(path, 'utf8')
            const part = path.match(/(body|head)\.html$/)[1]
            file = file.replace('<!--$$${' + part + '}$$$-->', html)
        })
        fs.writeFileSync(`${dir}/index.html`, beautify_html(file), err => {
            if (err !== null)
                console.error(err)
        })
        dirs.push(`${dir}/index.html`)
    }
}
