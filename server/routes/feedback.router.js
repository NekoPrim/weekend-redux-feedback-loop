const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// POST
router.post('/', (req, res) => {
    // check data sent
    console.log(req.body);

    // ready SQL command
    // protect database
    queryText = `
        INSERT INTO "feedback"
        ("feeling", "understanding", "support", "comments")
        VALUES
        ($1, $2, $3, $4);
    `;

    // ready data for command
    queryParams = [
        req.body.feeling,
        req.body.understanding,
        req.body.support,
        req.body.comments
    ];

    // send data to database
    pool.query(queryText, queryParams)
        .then((dbRes) => {
            // tell client of success
            console.log('pool POST success!', dbRes);
            res.sendStatus(201);
        })
        .catch((err) => {
            // tell client of failure
            console.log('pool POST ERROR!', err);
            res.sendStatus(500);
        });
})

module.exports = router;