import Connect from './connect.js'
export class Crud extends Connect {
    constructor(target = '') {
        super(target)
    }
    create() {

    }
    read(name) {
        if (sessionStorage[target + name])
            return JSON.parse(sessionStorage[target + name])
        const data = fetch()
        sessionStorage[target + name] = JSON.stringify(data)
    }
    update() {

    }
    delete() {

    }
}