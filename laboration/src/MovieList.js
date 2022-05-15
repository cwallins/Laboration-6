import React, { useState, useRef} from "react";
import Movies from "./Movies";


export default function MovieList() {
    const [movies, setMovies] = useState([{
        id: 1,
        title: "",
        rate: null
        
    }]);
    const inputTitle = useRef()
    const optionRate = useRef()

    function addItem(event) {
        console.log(event)
        if (inputTitle == "") {
            alert("You have to enter a title")
        } 
        else if (optionRate == "") {
            alert("You have to set a rating")
        }
        else {
            console.log(movies.length)
            const newId = movies.lenght > 0 ? movies[movies.length - 1].id + 1 : 1;
            
            setMovies([...movies, {
                id: newId,
                title: inputTitle.current.value,
                rate: optionRate.current.value
            }]);

            inputTitle.current.value = "";
            optionRate.current.value = null;
            
        }console.log(movies)
    }

    return (
        <div>
            <label for="title-field">Titel:</label>
            <input type="text" ref={inputTitle} className="form-control"/>

            <label for="rating-field">Betyg:</label>
            <select type="text" ref={optionRate} className="form-control">
                <option value="0">Välj betyg här...</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            
            <input type="submit" onClick={addItem} class="btn btn-success mt-3" value="Spara film"/>
            <hr></hr>

            <h4>Filmer</h4>
            
            <ul className="list-group">
                { movies.map( movie => <Movies key={movie.id} item={movie} />) }
            </ul>

            <input type="submit" class="btn btn-success mt-3" value="Alfabetisk ordning"/>
            <input type="submit" class="btn btn-success mt-3" value="Betygsordning"/>

        </div>
    );
}

