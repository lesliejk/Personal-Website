import React from 'react'
import {TbHttpDelete} from 'react-icons/tb'
import {FaUserEdit} from "react-icons/fa"



function Game({game, onEdit, onDelete}){
    // more readable date format
    const lastUpdate = new Date(game.updated)   
    const cleanDate = lastUpdate.toISOString().slice(0, 10)

    return (
        <tr>
            <td>{game.title}</td>
            <td>{game.year}</td>
            <td>{game.studio}</td>
            <td>{cleanDate}</td>
            <td><FaUserEdit onClick={() => onEdit(game)}/></td>
            <td><TbHttpDelete onClick={() => onDelete(game._id)}/></td>
            <td></td>
        </tr>
    )
}
export default Game;