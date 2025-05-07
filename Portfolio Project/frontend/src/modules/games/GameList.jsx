import React from 'react'
import Game from './Game'
import { FaGamepad } from 'react-icons/fa'

function GameList({games, onEdit, onDelete}){
    return (
        <table id="games">
            <caption>Add or delete games</caption>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Year</th>
                    <th>Studio</th>
                    <th>Last Updated</th>
                    <th>Edit</th>
                    <th>Delete</th>
                    <th><a href="/createGame"><i><FaGamepad size={25}/></i></a></th>
                </tr>
            </thead>
            <tbody>
                {games.map((game,i) => 
                <Game                  // parameters (game, iterator, onEdit, onDelete)
                    game={game}
                    key={i}
                    onEdit={onEdit}
                    onDelete={onDelete}
                />)}
            </tbody>
        </table>
    )
}
export default GameList;