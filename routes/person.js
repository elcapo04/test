const dbConnection = require('../../config/dbConnection');

module.exports = app => {
    const connection = dbConnection();
    app.get('/', findPerson, findReason, renderPage);


    app.post('/person', (req, res) => {
        console.log(req.body)
        const {person_id, attnd_wed, reason_wed_id, attnd_sat, reason_sat_id, attnd_sun, reason_sun_id  } = req.body;
        connection.query('INSERT into attendance SET?', {
            person_id,
            attnd_wed,
            reason_wed_id,
            attnd_sat,
            reason_sat_id,
            attnd_sun,
            reason_sun_id

        }, (err, result) => {
            console.log(err);
            console.log(result);
            res.redirect('/');
        })
    });

    function findPerson(req, res, next) {
        connection.query('SELECT * FROM person', (err, result) => {
            req.person = result;
            return next();
        } );
    }
    function findReason(req, res, next) {
        connection.query('SELECT * FROM reason', (err, result) => {
            req.reason = result;
            return next();
        } );
    }

    function renderPage(req, res) {
        res.render('person/person', {
            person: req.person,
            reason: req.reason
        });
    }
}