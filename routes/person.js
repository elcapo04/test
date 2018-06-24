
module.exports = app => {
    const person = [];
    const reason = [];
    app.get('/', function (req, res) {
        res.render('./person/person', {
            person: person,
            reason: reason
        });
    });
}