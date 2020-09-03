const { Router } = require('express');
const { db } = require('../firebase')

let router = new Router();

let selectedTeam = "Norrmalm IK"

//Return all players
router.get('/', async (req, res) => {
    try {
        let players = [];
        let database = await db.collection(selectedTeam).get();

        database.forEach(player => {
            players.push(player.data());
        })

        res.status(200).send(players)

    } catch (err) {
        res.status(500)
        console.error(err)
    }
})

//Returns a specific player
router.get('/:id', async (req, res) => {
    try {
        let database = await db.collection(selectedTeam)
            .where("id", "==", parseInt(req.params.id)).get();

        database.forEach(player => {
            res.status(200).send(player.data());
        })

    } catch (err) {
        res.status(500)
        console.error(err)
    }
})

module.exports = router;