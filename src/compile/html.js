const fs = require('fs')

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

const base = fs.readFileSync('./src/compile/base.html', 'utf8', console.log)

const object = getFiles('.')
for (const key in object) {
    if (object.hasOwnProperty(key)) {
        const arr = object[key]
        let file = base
        arr.forEach(path => {
            const html = fs.readFileSync(path, 'utf8', console.log)
            const part = path.match(/(body|head)\.html$/)[1]
            file = file.replace('<!--$$${' + part + '}$$$-->', html)
        })
        const path = arr[0].match(/.*(?=(body|head)\.html)/)[0]
        fs.writeFile(`${path}index.html`, file, err => {
            if (err !== null)
                console.error(err)
        })
    }
}
