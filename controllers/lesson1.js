// made using the course video

const alexRoute = (req, res) => {
    res.send("Alex Bower")
}

const jadaRoute = (req, res) => {
    res.send("Jada Bower")
}

const jonasRoute = (req, res) => {
    res.send("Jonas Bower")
}

module.exports = {
    alexRoute,
    jadaRoute,
    jonasRoute
}