import {React, useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {Link} from 'react-router-dom'
import GameList from './GameList'
import { FaGamepad } from 'react-icons/fa'

function GamesPage({setGame}){
    const redirect = useNavigate();
    const [games, setGames] = useState([]);

    // Retrieve all the games
    const loadGames = async () => {
        const response = await fetch('/games');
        const games = await response.json();
        setGames(games);
    }

    // Updates an entry
    const onEditGame = async game => {
        setGame(game);
        redirect("/updateGame");
    }

    // Deletes an entry
    const onDeleteGame = async _id => {
        const response = await fetch(`/games/${_id}`, { method: 'DELETE' });
          if (response.status === 200) {
             const getResponse = await fetch('/games');
             const games = await getResponse.json();
             setGames(games);
        } else {
             console.error(`Unable to delete the record due to = ${_id}, status code = 
             ${response.status}`)
          }
      }

    // Load games
    useEffect(() => {
        loadGames();
    }, [])

    // Display games
    return (
        <>
            <h2>Games Collection</h2>
            <article>
                <p>A list of all games currently stored in the database.</p>
                <GameList                  // parameters (games, onEditGame, onDeleteGame)
                    games={games}
                    onEdit={onEditGame}
                    onDelete={onDeleteGame}
                />
            </article>
        </>
    )
}
export default GamesPage;