// Models for the Game Collection

// Import dependencies.
import mongoose from 'mongoose';
import 'dotenv/config';

// Connect based on the .env file parameters.
mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);
const db = mongoose.connection;

// Confirm that the database has connected and print a message in the console.
db.once("open", (err) => {
    if(err){
        res.status(500).json({ Error: 'Connection failed.' });
    } else  {
        console.log('Succesfully connected to MongoDB database.');
    }
});

// SCHEMA: Define the collection's schema.
const gameSchema = mongoose.Schema({
	title:    { type: String, required: true },
	year:     { type: Number, required: true },
    updated:  { type: Date,   required: true, default: Date.now },
	studio:   { type: String, required: true }
});

// Compile the model from the schema 
// by defining the collection name "games".
const games = mongoose.model('Games', gameSchema);


// CREATE model *****************************************
const createGame = async (title, year, updated, studio) => {
    const game = new games({ 
        title: title, 
        year: year, 
        updated: updated,
        studio: studio 
    });
    return game.save();
}


// RETRIEVE model *****************************************
// Retrieve all documents and return a promise.
const retrieveGames = async () => {
    const query = games.find();
    return query.exec();
}

// RETRIEVE by ID
const retrieveGameByID = async (_id) => {
    const query = games.findById({_id: _id});
    return query.exec();
}

// DELETE model based on _id  *****************************************
const deleteGameById = async (_id) => {
    const result = await games.deleteOne({_id: _id});
    return result.deletedCount;
};


// UPDATE model *****************************************************
const updateGame = async (_id, title, year, updated, studio) => {
    const result = await games.replaceOne({_id: _id }, {
        title: title,
        year: year,
        updated: updated,
        studio: studio
    });
    return { 
        _id: _id, 
        title: title,
        year: year,
        updated: updated,
        studio: studio 
    }
}

// EXPORT the variables for use in the controller file.
export { createGame, retrieveGames, retrieveGameByID, updateGame, deleteGameById }