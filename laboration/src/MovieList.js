import React, { useState, useRef } from "react";
import Movies from "./Movies";

export default function MovieList() {
    const [movies, setMovies] = useState([]);

    const inputTitle = useRef()
    const optionRate = useRef()

    function addItem(event) {
        console.log(event.target.value)
        console.log(inputTitle)
        if (inputTitle.current.value === "") {
            alert("You have to enter a title")
        }
        else if (optionRate.current.value === "") {
            alert("You have to set a rating")
        }
        else {
            setMovies([...movies, {
                title: inputTitle.current.value,
                rate: optionRate.current.value
            }]);
            inputTitle.current.value = "";
            optionRate.current.value = "";
        }

    }

    function deleteItem(id) {
        let newMovies = movies;
        newMovies.splice(id, 1)
        setMovies([...newMovies])
    }

    function sortAlpha() {
        let sortedItems = movies;
        sortedItems.sort((a, b) => a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1)
        setMovies([...sortedItems])
    }

    function sortRating() {
        let sortedItems = movies;
        sortedItems.sort((a, b) => a.rate < b.rate ? 1 : -1)
        setMovies([...sortedItems])
    }

    return (
        <div>
            <label for="title-field">Titel:</label>
            <input type="text" ref={inputTitle} className="form-control" />

            <label for="rating-field">Betyg:</label>
            <select type="text" ref={optionRate} className="form-control">
                <option value="0">Välj betyg här...</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>

            <input type="submit" onClick={addItem} class="btn btn-success mt-3" value="Spara film" />
            <hr/>

            <h4>Filmer</h4>

            <ul className="list-group">
                {/*genererar endast om vi har filmer i listan*/}
                {
                    movies.length > 0
                    ?
                    movies.map((movie, i) => <Movies key={i} id={i} item={movie} onDelete={deleteItem} /> )
                    : 
                    <p>Inga filmer tillagda ännu</p>
                }
            </ul>

            <input onClick={sortAlpha} type="submit" class="btn btn-success mt-3" value="Alfabetisk ordning" />
            <input onClick={sortRating} type="submit" class="btn btn-success mt-3" style={{marginLeft: 5}} value="Betygsordning" />

        </div>
    );
}

