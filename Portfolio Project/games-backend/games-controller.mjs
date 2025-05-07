// Controllers for the Game Collection

import 'dotenv/config';
import express from 'express';
import * as games from './games-model.mjs';

const PORT = process.env.PORT;
const app = express();
app.use(express.json());  // REST needs JSON MIME type.


// CREATE controller ******************************************
app.post ('/games', (req,res) => { 
    games.createGame(
        req.body.title, 
        req.body.year, 
        req.body.updated,
        req.body.studio
        )
        .then(game => {
            console.log(`"${game.title}" was added to the collection.`);
            res.status(201).json(game);
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: `Unable to add "${game.title} to the collection. Please try again."` });
        });
});


// RETRIEVE controller ****************************************************
app.get('/games', (req, res) => {
    games.retrieveGames()
        .then(games => { 
            if (games !== null) {
                console.log(`All games were retrieved from the collection.`);
                res.json(games);
            } else {
                res.status(404).json({ Error: 'Unable to find any games. Please try again' });
            }         
         })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'A bad request error has occured. Please try again' });
        });
});


// RETRIEVE by ID controller
app.get('/games/:_id', (req, res) => {
    games.retrieveGameByID(req.params._id)
    .then(game => { 
        if (game !== null) {
            console.log(`"${game.title}" was retrieved, based on its ID.`);
            res.json(game);
        } else {
            res.status(404).json({ Error: `Unable to retrieve a game with provided ID: ${req.params._id}. Please try again.` });
        }         
     })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'A bad request error has occured. Please try again.' });
    });

});


// UPDATE controller ************************************
app.put('/games/:_id', (req, res) => {
    games.updateGame(
        req.params._id, 
        req.body.title, 
        req.body.year, 
        req.body.updated,
        req.body.studio
    )
    .then(game => {
        console.log(`"${game.title}" information was updated.`);
        res.json(game);
    })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: `A bad request error has occured. Please try again.` });
    });
});


// DELETE Controller ******************************
app.delete('/games/:_id', (req, res) => {
    games.deleteGameById(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                console.log(`Based on its ID, ${deletedCount} game was deleted.`);
                res.status(200).send({ Success: `Record of ${req.params._id} has been removed from the database.` });
            } else {
                res.status(404).json({ Error: `Unable to find and delete ${req.params._id}. Please try again.` });
            }
        })
        .catch(error => {
            console.error(error);
            res.send({ Error: 'An error has occured. Please check your request and try again.' });
        });
});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});