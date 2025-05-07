import React, {useState} from "react"
import { useNavigate } from "react-router-dom"

export const GameAdd = () => {
    const [title, setTitle] = useState('');
    const [year, setYear] = useState('');
    const [studio, setStudio] = useState('');
    const [updated, setUpdated] = useState('');

    const redirect = useNavigate();

    const addGame = async (event) => {
        event.preventDefault();
        const newGame = { title, year, studio };
        try {
            const response = await fetch('/games', {
                method: 'POST',
                body: JSON.stringify(newGame),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if(response.status === 201){
                alert(`${title} was succesfully added to the collection.`);
                redirect("/gamesPage");
            } else {
                alert(`${response.status} Error - Invalid entry. Please review your submission and try again`);
            }
        } catch (error) {
            alert(`Server was unable process your request. Please try again at a later time ${response.status}`);
        }
    };

    return (
        <>
            <h2>Add a game</h2>
            <article>
                <p>Add a game to the database.</p>
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
                                    placeholder="MM/DD/YYYY"
                                    value={updated}
                                    onChange={e => setUpdated(e.target.value)}
                                    id="updated"/>
                            </td>

                            <td><lable htmlFor="submit"></lable>
                                <button
                                    type="submit"
                                    onClick={addGame}
                                    id="submit">Submit</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </article>
        </>
    )
}
export default GameAdd;