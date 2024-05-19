// made using code from the course video (https://www.youtube.com/watch?v=K00J87SofEc)

const alexRoute = (req, res) => {
    res.send("Alex Bower")
}

const jadaRoute = (req, res) => {
    res.send("Jada Bower")
}

const mitchellRoute = (req, res) => {
    res.send("Mitchell Bower")
}

module.exports = {
    alexRoute,
    jadaRoute,
    mitchellRoute
}