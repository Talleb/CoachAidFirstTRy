const { Router } = require('express');
const { db } = require('../firebase')

let router = new Router();


//Return all formations
router.get('/', async (req, res) => {
    try {
        let formations = [];
        let database = await db.collection('Formations').get();

        database.forEach(formation => {
            formations.push(formation.data());
        })

        res.status(200).send(formations)

    } catch (err) {
        res.status(500)
        console.error(err)
    }
})

//Returns a specific formation
router.get('/:id', async (req, res) => {
    try {
        let database = await db.collection('Formations')
            .where("id", "==", parseInt(req.params.id)).get();

        database.forEach(formation => {
            res.status(200).send(formation.data());
        })

    } catch (err) {
        res.status(500)
        console.error(err)
    }
})

module.exports = router;