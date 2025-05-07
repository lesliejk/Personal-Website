import React, {useState} from "react"
import { useNavigate } from "react-router-dom"

export const GameEdit = ( { gameToEdit } ) => {
    const [title, setTitle]       = useState(gameToEdit.title);            // allows input fields to prepopulate
    const [year, setYear] = useState(gameToEdit.year);
    const [studio, setStudio] = useState(gameToEdit.studio);
    const [updated, setUpdated] = useState(gameToEdit.updated.slice(0,10));

    const redirect = useNavigate();

    const editGame = async () => {
        const response = await fetch(`/games/${gameToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify({ 
                title: title, 
                year: year, 
                studio: studio
            }),
            headers: {'Content-Type': 'application/json',},
        });

        if (response.status === 200) {
            alert(`${title} was succesfully updated.`);
        } else {
            const errMessage = await response.json();
            alert(`Unable to change this record at this time due to: ${response.status}. ${errMessage.Error}`);
        }
        redirect("/gamesPage");
    }



    return (
        <>
            <h2>Edit this game</h2>
            <article>
                <p>Edit a game in the database</p>
                <table id="games">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Year</th>
                            <th>Studio</th>
                            <th>Last Updated</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><lable htmlFor="title"></lable>
                                <input
                                    type="text"
                                    placeholder="Title"
                                    value={title}
                                    onChange={e => setTitle(e.target.value)}
                                    id="title"/>
                            </td>
                            <td><lable htmlFor="year"></lable>
                                <input 
                                    type="number"
                                    placeholder="1888"
                                    min="1888"
                                    value={year}
                                    onChange={e => setYear(e.target.value)}
                                    id="year"/>
                            </td>
                            <td><lable htmlFor="studio"></lable>
                                <input 
                                    type="text"
                                    placeholder="Studio"
                                    value={studio}
                                    onChange={e => setStudio(e.target.value)}
                                    id="studio"/>
                            </td>

                            <td><lable htmlFor="updated"></lable>
                                <input 
                                    type="date"
                                    placeholder="Updated"
                                    value={updated}
                                    onChange={e => setUpdated(e.target.value)}
                                    id="updated"/>
                            </td>

                            <td><lable htmlFor="submit"></lable>
                                <button
                                    type="submit"
                                    onClick={editGame}
                                    id="submit">Submit</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </article>
        </>
    )
}
export default GameEdit;